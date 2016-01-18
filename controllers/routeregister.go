package controllers

import (
	"github.com/astaxie/beego"
	userApi "gitlab.com/thanzen/eq/controllers/api/user"
	"gitlab.com/thanzen/eq/controllers/user"
	"gitlab.com/thanzen/eq/setting"
	"gitlab.com/thanzen/eq/controllers/experiment"
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



	//experiment
	exp := new(experiment.ExperimentController)
	beego.Router("/experiment", exp, "get:Index;post:Post")
}
