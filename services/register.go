package services

import (
    "github.com/astaxie/beego/orm"
    "gitlab.com/thanzen/identity/models/user"
)
func Register(){
    orm.RegisterModel(new(user.UserType), new(user.User),new(user.Role),new(user.Permission))
}