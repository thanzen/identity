package controllers

import (
	"github.com/astaxie/beego"
	userApi "gitlab.com/thanzen/identity/controllers/api/user"
	"gitlab.com/thanzen/identity/controllers/user"
	"gitlab.com/thanzen/identity/setting"
	"gitlab.com/thanzen/identity/controllers/experiment"
	"gitlab.com/thanzen/identity/controllers/api/magic"
)

func RegisterControllers() {
	//register maincontroller
	mc := new(MainController)
	beego.Router("/", mc, "get:Index")
	beego.Router("/index", mc, "get:Index")

	// "robot.txt"
	beego.Router("/robot.txt", &RobotRouter{})

	// Add Filters
	//todo:enable image filter later
	//  beego.InsertFilter("/img/*", beego.BeforeRouter, attachment.ImageFilter)

	beego.InsertFilter("/captcha/*", beego.BeforeRouter, setting.Captcha.Handler)
	//register user related controllers
	user.RegisterRoutes()
	userApi.RegisterRoutes()

	extractor := &magic.ExtractorController{}
	beego.Router("/api/extractor/parse", extractor, "get:Parse")

	//experiment
	exp := new(experiment.ExperimentController)
	beego.Router("/experiment", exp, "get:Index;post:Post")
}
