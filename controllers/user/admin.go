package user

import (
    "gitlab.com/thanzen/eq/controllers/base"
    "gitlab.com/thanzen/eq/conf/permissions"
)

type AdminController struct {
    base.BaseController
}

func (this *AdminController) Index()  {
    this.CheckLoginRedirect()
    this.CheckPermission(permissions.RoleViewAll)
    this.TplNames = "admin/index.html"
}