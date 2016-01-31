package magic
import (
	//"encoding/json"
	//"fmt"
	//"github.com/astaxie/beego/validation"
	//"gitlab.com/thanzen/identity/conf/permissions"
	"gitlab.com/thanzen/identity/controllers/base"
	//"gitlab.com/thanzen/identity/models/user"
	userServes "gitlab.com/thanzen/identity/services/user"
	//"strings"
	"github.com/astaxie/beego/httplib"
)


type ExtractorController struct {
	base.BaseController
	roleService userServes.RoleService
}

func (this *ExtractorController) Parse() {
	url := this.GetString("page_url");
	str, err := httplib.Get("http://52.35.87.105:8888/url_enter?page_url="+url).String();
	if err != nil {
		// error
	}
	this.Data["json"] = str
	//this.ServeJSON()
	this.Ctx.Output.JSON(this.Data["json"], false, false)
}