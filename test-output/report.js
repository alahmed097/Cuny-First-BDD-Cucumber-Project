$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/AliAhmed/eclipse-workspace/CunyFirstBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "CunyFirst Login Feature",
  "description": "",
  "id": "cunyfirst-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Without Example Keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: CunyFirst Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 7,
      "value": "#When title of login page is CUNY Login"
    },
    {
      "line": 8,
      "value": "#Then user enters \"Ali.ahmed004@login.cuny.edu\" and \"Ilovenyc1997\""
    },
    {
      "line": 9,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 10,
      "value": "#Then user is on home page"
    },
    {
      "line": 11,
      "value": "#Then close the browser"
    },
    {
      "line": 14,
      "value": "#With example keyword"
    }
  ],
  "line": 15,
  "name": "CunyFirst Login Test Scenario",
  "description": "",
  "id": "cunyfirst-login-feature;cunyfirst-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is CUNY Login",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "cunyfirst-login-feature;cunyfirst-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "cunyfirst-login-feature;cunyfirst-login-test-scenario;;1"
    },
    {
      "cells": [
        "Ali.ahmed004@login.cuny.edu",
        "Ilovenyc1997"
      ],
      "line": 26,
      "id": "cunyfirst-login-feature;cunyfirst-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom123",
        "test123"
      ],
      "line": 27,
      "id": "cunyfirst-login-feature;cunyfirst-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "CunyFirst Login Test Scenario",
  "description": "",
  "id": "cunyfirst-login-feature;cunyfirst-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is CUNY Login",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"Ali.ahmed004@login.cuny.edu\" and \"Ilovenyc1997\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 8318902945,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 185243478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali.ahmed004@login.cuny.edu",
      "offset": 13
    },
    {
      "val": "Ilovenyc1997",
      "offset": 47
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 800496560,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2915085541,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 24129626,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 193335133,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "CunyFirst Login Test Scenario",
  "description": "",
  "id": "cunyfirst-login-feature;cunyfirst-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is CUNY Login",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"tom123\" and \"test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 3542814469,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 22554187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom123",
      "offset": 13
    },
    {
      "val": "test123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 326826098,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 432789736,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 18471186,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Employee-facing registry content]\u003e but was:\u003c[CUNY Login]\u003e\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\n\tat stepDefinations.LoginStepDefination.user_is_on_home_page(LoginStepDefination.java:52)\n\tat ✽.Then user is on home page(/Users/AliAhmed/eclipse-workspace/CunyFirstBDDFramework/src/main/java/Features/login.feature:21)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});