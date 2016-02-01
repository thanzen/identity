package main

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/lib/pq"
	"github.com/thanzen/migrate/migrate"
	"gitlab.com/thanzen/identity/controllers"
	"gitlab.com/thanzen/identity/services"
	"gitlab.com/thanzen/identity/setting"
	"github.com/astaxie/beego/plugins/cors"
)

func main() {
	setting.Initialize()
	beego.SetLogFuncCall(true)
	beego.SetViewsPath("views")

	if setting.IsProMode {
		beego.Info(setting.PostgresMigrateConnection)
		//auto migrate db
		//todo: we may want to disable this later
		//dbMigrate()
	} else {
		beego.Info("Develment mode enabled")
	}
	dbMigrate()
	beego.Info(beego.BConfig.AppName, setting.APP_VER, setting.AppUrl)
	testOnly();//todo:remove this
	//dev directory listing
	if !setting.IsProMode {
		beego.SetStaticPath("/assets", "static/dist/assets")
		beego.BConfig.WebConfig.DirectoryIndex = true
	}
	orm.RegisterDriver("postgres", orm.DRPostgres)

	orm.RegisterDataBase("default", "postgres", setting.PostgresConnection)
	services.Register()
	orm.RunCommand()
	orm.Debug = true

	controllers.RegisterControllers()

	if beego.BConfig.RunMode == "dev" {
		//	beego.Router("/test/:tmpl(mail/.*)", new(base.TestRouter))
	}
	beego.Run()
}
func dbMigrate() {
	allErrors, ok := migrate.UpSync(setting.PostgresMigrateConnection, "./conf/db/migrations")
	if !ok {
		beego.Error(allErrors)
	}

}
func testOnly(){
	beego.InsertFilter("*", beego.BeforeRouter, cors.Allow(&cors.Options{
		AllowAllOrigins: true,
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Authorization", "Access-Control-Allow-Origin"},
		ExposeHeaders:    []string{"Content-Length", "Access-Control-Allow-Origin"},
	}))
}