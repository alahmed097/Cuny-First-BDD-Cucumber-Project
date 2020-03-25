Feature: CunyFirst Login Feature
 
#Without Example Keyword
#Scenario: CunyFirst Login Test Scenario

#Given user is already on Login Page 
#When title of login page is CUNY Login
#Then user enters "Ali.ahmed004@login.cuny.edu" and "Ilovenyc1997"
#Then user clicks on login button
#Then user is on home page
#Then close the browser


#With example keyword
Scenario Outline: CunyFirst Login Test Scenario

Given user is already on Login Page 
When title of login page is CUNY Login
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser

Examples:
	| username | password |
	| Ali.ahmed004@login.cuny.edu | Ilovenyc1997 |
	| tom123 | test123 |
	
