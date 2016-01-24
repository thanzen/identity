package controllers

import (
	"gitlab.com/thanzen/identity/controllers/base"
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
	c.TplName = "test.html"

}
