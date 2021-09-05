Database (project_cookie_clicker, Mysql) contains 2 entities for saving and loading information:

* User *
contains: 

userID (int)
userName (varchar 45)
userPassword (int)
userCookies (int)
userLevel (int)
userCookiesEaten (int)
userCookieLevelCap (int)
userDevotion (int)
userOfferedCookies (int)
userOfferedUnits (int)
userBoughtLand (int)
userCookiesOfInsight (int)
cookieLevel (int)

* Unit *

unitName (varchar 45)
unitCookies (int)
unitCost (int)
unitAmount (int)
intervalTime (int)
unitMultiplyer (double)
unitCostMultiplyer (double)
unitHomelandName (varchar 45)
unitHomelandCost (int)
unitHomelandSvg (int)
unitHomelandBought (tinyint)
userID (int, Foreign Key)