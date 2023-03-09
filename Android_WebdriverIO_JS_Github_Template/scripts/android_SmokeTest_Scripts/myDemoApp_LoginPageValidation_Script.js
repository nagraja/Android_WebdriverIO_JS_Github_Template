//Calculator_Operations_With_DF_And_AllureReporter_Script.js => DF = DataFile

const calculator_Home_Page = require('../../app_Pages/calculator_Home_Page.js');
const testcases_data = require('../../TestData_Files/Calculator_TestData.js');
const myDemoApp_Home_Page = require('../../app_Pages/myDemoApp_Home_Page');
const myDemoApp_LogIn_Page = require('../../app_Pages/myDemoApp_LogIn_Page');

var today = new Date(),
TimeStamp_V = today.getMonth() + 1 + '_' + today.getDate() + '_' + today.getFullYear() + '_' + today.getHours()+'h'+today.getMinutes()+'m';

console.log("Time Stamp Value Is: "+TimeStamp_V);

describe('MyDemo App Test', function () 
{    
    //testcases_data.testcases.forEach(function (tc)
    //{
        beforeEach(async () => 
        {
            await myDemoApp_Home_Page.MenuItem_Option.click();
            await driver.pause(5000);

            await myDemoApp_Home_Page.MenuItem_Login_Option.click();
            await driver.pause(5000);
        });

        it("Username Required Alert Message Validation", async () => 
        {
            await myDemoApp_LogIn_Page.UserName_TextBox.setValue("");
            await myDemoApp_LogIn_Page.Password_TextBox.setValue("");

            await myDemoApp_LogIn_Page.LogIn_Button.click();
            await driver.pause(5000);

            const UN_Required_AletMessage_EV = "Username is required";
            const UN_Required_AletMessage_AV = await myDemoApp_LogIn_Page.UN_Required_AletMessage.getText();
            expect(UN_Required_AletMessage_AV).toBe(UN_Required_AletMessage_EV);
            console.log("Username Required Alert Expected Message Is: "+UN_Required_AletMessage_EV+" Username Required Alert Actual Message Is: "+UN_Required_AletMessage_AV);
        });

        it("Password Required Alert Message Validation", async () => 
        {
            await myDemoApp_LogIn_Page.UserName_TextBox.setValue("HelloUsername");
            await myDemoApp_LogIn_Page.Password_TextBox.setValue("");
            await myDemoApp_LogIn_Page.LogIn_Button.click();
            await driver.pause(5000);

            const PW_Required_AletMessage_EV = "Password is required";
            const PW_Required_AletMessage_AV = await myDemoApp_LogIn_Page.PW_Required_AletMessage.getText();
            expect(PW_Required_AletMessage_AV).toBe(PW_Required_AletMessage_EV);
            console.log("Username Required Alert Expected Message Is: "+PW_Required_AletMessage_EV+" Username Required Alert Actual Message Is: "+PW_Required_AletMessage_AV);
        });

        it("InValid UserName And Password Alert Message Validation", async () => 
        {
            await myDemoApp_LogIn_Page.UserName_TextBox.setValue("HelloUsername");
            await myDemoApp_LogIn_Page.Password_TextBox.setValue("HelloPassword");
            await myDemoApp_LogIn_Page.LogIn_Button.click();
            await driver.pause(5000);

            const GM_Required_AletMessage_EV = "Provided credentials do not match any user in this service.";
            const GM_Required_AletMessage_AV = await myDemoApp_LogIn_Page.GM_Required_AletMessage.getText();
            expect(GM_Required_AletMessage_AV).toBe(GM_Required_AletMessage_EV);
            console.log("InValid UserName And Password Alert Expected Message Is: "+GM_Required_AletMessage_EV+" Username Required Alert Actual Message Is: "+GM_Required_AletMessage_AV);
        });
        
    //});
     
});