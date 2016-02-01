package controllers

import (
	"gitlab.com/thanzen/identity/controllers/base"
	"github.com/astaxie/beego"
	"gitlab.com/thanzen/identity/setting"
)

type MainController struct {
	base.BaseController
}

func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.tpl"
}
func (c *MainController) Index() {
	//c.TplName = "index.html"
	c.Data["Username"] = c.User.Username
	c.Data["Email"] = c.User.Email
	c.Data["BaseDir"] = "assets"
	c.TplName = "test.html"
	beego.BeeLogger.Info(setting.AppUrl)

}
