package email

import (
	"fmt"

	"github.com/beego/i18n"

	"gitlab.com/thanzen/eq/models/user"
	userServ "gitlab.com/thanzen/eq/services/user"
	"gitlab.com/thanzen/eq/utils"
)

//SendRegisterMail sends user register mail with active code
func SendRegisterMail(locale i18n.Locale, u *user.User) {
	serv := &userServ.UserService{}
	code := serv.CreateUserActiveCode(u, nil)

	subject := locale.Tr("mail.register_success_subject")

	data := GetMailTmplData(locale.Lang, u)
	data["Code"] = code
	body := utils.RenderTemplate("mail/auth/register_success.html", data)

	msg := NewMailMessage([]string{u.Email}, subject, body)
	msg.Info = fmt.Sprintf("UID: %d, send register mail", u.Id)

	// async send mail
	SendAsync(msg)
}

// SendResetPwdMail sends user reset password mail with verify code
func SendResetPwdMail(locale i18n.Locale, u *user.User) {
	serv := &userServ.UserService{}
	code := serv.CreateUserResetPwdCode(u, nil)

	subject := locale.Tr("mail.reset_password_subject")

	data := GetMailTmplData(locale.Lang, u)
	data["Code"] = code
	body := utils.RenderTemplate("mail/auth/reset_password.html", data)

	msg := NewMailMessage([]string{u.Email}, subject, body)
	msg.Info = fmt.Sprintf("UID: %d, send reset password mail", u.Id)

	// async send mail
	SendAsync(msg)
}

//SendActiveMail sends email verify active email.
func SendActiveMail(locale i18n.Locale, u *user.User) {
	serv := &userServ.UserService{}
	code := serv.CreateUserActiveCode(u, nil)

	subject := locale.Tr("mail.verify_your_email_subject")

	data := GetMailTmplData(locale.Lang, u)
	data["Code"] = code
	body := utils.RenderTemplate("mail/auth/active_email.html", data)

	msg := NewMailMessage([]string{u.Email}, subject, body)
	msg.Info = fmt.Sprintf("UID: %d, send email verify mail", u.Id)

	// async send mail
	SendAsync(msg)
}
