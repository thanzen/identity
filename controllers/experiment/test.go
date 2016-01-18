package experiment

import (
	"gitlab.com/thanzen/eq/controllers/base"
	"encoding/json"
	"github.com/astaxie/beego"
)

type HtmlContent struct{
	Content string
}
type ExperimentController struct {
	base.BaseController
}

func (this *ExperimentController) Index()  {
	this.CheckLoginRedirect()
	this.TplNames = "experiment/index.html"
}


func (this *ExperimentController) Post(){
	var html HtmlContent
	json.Unmarshal(this.Ctx.Input.RequestBody, &html)
	beego.Info(len(html.Content))
	this.ServeJson()
}
