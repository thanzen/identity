package user

import (
    "gitlab.com/thanzen/identity/controllers/base"
    "gitlab.com/thanzen/identity/conf/permissions"
)

type AdminController struct {
    base.BaseController
}

func (this *AdminController) Index()  {
    this.CheckLoginRedirect()
    this.CheckPermission(permissions.RoleViewAll)
    this.TplName = "admin/index.html"
}