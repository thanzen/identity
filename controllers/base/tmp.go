package base

import (
"gitlab.com/thanzen/identity/services/email"
)

type TestRouter struct {
    BaseController
}

func (this *TestRouter) Get() {
    this.TplName = this.GetString(":tmpl")
    this.Data = email.GetMailTmplData(this.Locale.Lang, &this.User)
    this.Data["Code"] = "CODE"
}
