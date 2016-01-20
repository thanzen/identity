package user

import "gitlab.com/thanzen/identity/utils"

// return a user salt token
func GetUserSalt() string {
	return utils.GetRandomString(10)
}
