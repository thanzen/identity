package user

import (
	"github.com/astaxie/beego"
	"gitlab.com/thanzen/identity/controllers/base"
	"gitlab.com/thanzen/identity/models/user"
	"gitlab.com/thanzen/identity/services/email"
	userServ "gitlab.com/thanzen/identity/services/user"
)

// ForgotController serves login page.
type ForgotController struct {
	base.BaseController
}

// Get implemented Get method for ForgotController.
func (this *ForgotController) Get() {
	this.TplName = "auth/forgot.html"

	// no need login
	if this.CheckLoginRedirect(false) {
		return
	}

	form := ForgotForm{}
	this.SetFormSets(&form)
}

// Get implemented Post method for ForgotController.
func (this *ForgotController) Post() {
	this.TplName = "auth/forgot.html"

	// no need login
	if this.CheckLoginRedirect(false) {
		return
	}

	var user user.User
	form := ForgotForm{User: &user}
	// valid form and put errors to template context
	if this.ValidFormSets(&form) == false {
		return
	}

	email.SendResetPwdMail(this.Locale, &user)

	this.FlashRedirect("/forgot", 302, "SuccessSend")
}

// Reset implemented user password reset.
func (this *ForgotController) Reset() {
	this.TplName = "auth/reset.html"

	code := this.GetString(":code")
	this.Data["Code"] = code

	var user user.User

	if this.UserService.VerifyUserResetPwdCode(&user, code) {
		this.Data["Success"] = true
		form := ResetPwdModel{}
		this.SetFormSets(&form)
	} else {
		this.Data["Success"] = false
	}
}

// Reset implemented user password reset.
func (this *ForgotController) ResetPost() {
	this.TplName = "auth/reset.html"

	code := this.GetString(":code")
	this.Data["Code"] = code

	var user user.User

	if this.UserService.VerifyUserResetPwdCode(&user, code) {
		this.Data["Success"] = true

		form := ResetPwdModel{}
		if this.ValidFormSets(&form) == false {
			return
		}

		user.Active = true
		user.PasswordSalt = userServ.GetUserSalt()

		if err := this.UserService.SaveNewPassword(&user, form.Password); err != nil {
			beego.Error("ResetPost Save New Password: ", err)
		}

		if this.IsLogin {
			this.LogoutUser(this.Ctx)
		}

		this.FlashRedirect("/login", 302, "ResetSuccess")

	} else {
		this.Data["Success"] = false
	}
}
