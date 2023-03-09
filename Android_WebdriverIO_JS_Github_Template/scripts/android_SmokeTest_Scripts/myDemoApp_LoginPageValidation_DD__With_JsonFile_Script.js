//myDemoApp_LoginPageValidation_DD__With_JsonFile_Script.js - DD=DataDriven

const testcases_data = require('../../TestData_Files/MyDemoApp_LoginValidation_TestData.js');
const myDemoApp_Home_Page = require('../../app_Pages/myDemoApp_Home_Page');
const myDemoApp_LogIn_Page = require('../../app_Pages/myDemoApp_LogIn_Page');
var AletMessage_AV;

var today = new Date(),
TimeStamp_V = today.getMonth() + 1 + '_' + today.getDate() + '_' + today.getFullYear() + '_' + today.getHours()+'h'+today.getMinutes()+'m';

console.log("Time Stamp Value Is: "+TimeStamp_V);

describe('MyDemo App Test', function () 
{    
    testcases_data.testcases.forEach(function (tc)
    {
        it("TestCase: "+tc.TCnumber_Value+", Name Is: "+tc.TCname_Value, async () => 
        {
            await myDemoApp_Home_Page.MenuItem_Option.click();
            await driver.pause(5000);

            await myDemoApp_Home_Page.MenuItem_Login_Option.click();
            await driver.pause(5000);
            
            await myDemoApp_LogIn_Page.UserName_TextBox.setValue(tc.UserName_Value);
            await myDemoApp_LogIn_Page.Password_TextBox.setValue(tc.Password_Value);

            await myDemoApp_LogIn_Page.LogIn_Button.click();
            await driver.pause(5000);

            const AletMessage_EV = tc.AlertMessage_Value;    
            switch(tc.TCnumber_Value)
            {
                case '1':
                        AletMessage_AV = await myDemoApp_LogIn_Page.UN_Required_AletMessage.getText();
                        break;
                case '2':
                        AletMessage_AV = await myDemoApp_LogIn_Page.UN_Required_AletMessage.getText();
                        break;
                case '3':
                        AletMessage_AV = await myDemoApp_LogIn_Page.PW_Required_AletMessage.getText();
                        break;
                case '4':
                        AletMessage_AV = await myDemoApp_LogIn_Page.GM_Required_AletMessage.getText();
                default:
            }
         
            expect(AletMessage_AV).toBe(AletMessage_EV);
            console.log("Username Required Alert Expected Message Is: "+AletMessage_EV+" Username Required Alert Actual Message Is: "+AletMessage_AV);
        });
    });
     
});