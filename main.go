package main

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/lib/pq"
	"github.com/thanzen/migrate/migrate"
	"gitlab.com/thanzen/identity/controllers"
	"gitlab.com/thanzen/identity/services"
	"gitlab.com/thanzen/identity/setting"
)

func main() {
	setting.Initialize()
	beego.SetLogFuncCall(true)
	beego.SetViewsPath("views")

	if setting.IsProMode {
		beego.Info("Product mode enabled")
		beego.Info(setting.PostgresMigrateConnection)
		//auto migrate db
		//todo: we may want to disable this later
		//dbMigrate()
	} else {
		beego.Info("Develment mode enabled")
	}
	dbMigrate()
	beego.Info(beego.BConfig.AppName, setting.APP_VER, setting.AppUrl)

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
