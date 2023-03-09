//myDemoApp_LoginPageValidation_DD_With_Excel_Script.js - DD = DataDriven

const myDemoApp_Home_Page = require('../../app_Pages/myDemoApp_Home_Page');
const myDemoApp_LogIn_Page = require('../../app_Pages/myDemoApp_LogIn_Page');
var AletMessage_AV;

const xl_obj = require('../../configuration_scripts/Excel_Read_Write');
const Excel_Obj  = require('exceljs');
const fs = require('fs');
const { error } = require('console');
const workbook = new Excel_Obj.Workbook();
 
var IFP_Value; //IFP_Value = InputFilePath_Value
var OFP_Value; //OFP_Value = OutputFilePath_Value
var rc_value;  //rc_value = RowCount_value
var cc_value;  //cc_value = ColumnCount_value

var today = new Date(),
TimeStamp_V = today.getMonth() + 1 + '_' + today.getDate() + '_' + today.getFullYear() + '_' + today.getHours()+'h'+today.getMinutes()+'m';
console.log("Time Stamp Value Is: "+TimeStamp_V);


describe('MyDemo App Test', function () 
{    
    
    beforeEach(async function () 
    {
        await driver.pause(3000);
        await myDemoApp_Home_Page.MenuItem_Option.click();
        await driver.pause(3000);
        await myDemoApp_Home_Page.MenuItem_Login_Option.click();
        await driver.pause(3000);
        //browser.ignoreSynchronization = true;
       
    });
    IFP_Value = './TestData_Files/myDemoApp_LoginPageValidation_DD_With_Excel_Script_I_DF.xlsx';
    OFP_Value = './SmokeTest_Reports/ST_'+TimeStamp_V+'_Result/SmokeTest_O_DF.xlsx';
       
    //Copying Input Data File to Output File Starts
    fs.copyFile(IFP_Value, OFP_Value, (err) => {
        if (err)
            throw err;
        console.log('File was copied to destination');
    });
    //Copying Input Data File to Output File Ends

    /*
    workbook.xlsx.readFile(IFP_Value).then(async() => 
        {
            const worksheet = workbook.getWorksheet('test');
            rc_value = worksheet.rowCount;
            console.log("Row Count Is: " + rc_value);
            cc_value = worksheet.columnCount;
            console.log("Column Count Is: " + cc_value);

            let TC_ExecutionFlag_Value = xl_obj.readCellValueFromExcel(worksheet, 4, cc_value, 'TC_ExecutionFlag_V');
            console.log("Execution Flag Value Is: " + TC_ExecutionFlag_Value);
            let TestCaseNumber_Value = xl_obj.readCellValueFromExcel(worksheet, 4, cc_value, 'TestCaseNumber_V');
            console.log("TestCaseNumber Value Is: " + TestCaseNumber_Value);
            let TestCaseName_Value = xl_obj.readCellValueFromExcel(worksheet, 4, cc_value, 'TestCaseName_V');
            console.log("TestCaseName Value Is: " + TestCaseName_Value);


        });
    */

    it("TestTestTest", async () => 
    {
        //Copying Input Data File to Output File Starts
            fs.copyFile(IFP_Value, OFP_Value, (err) => {
                if (err)
                    throw err;
                console.log('File was copied to destination');
            });
        //Copying Input Data File to Output File Ends

        await workbook.xlsx.readFile(IFP_Value).then(async() => 
        {
            const worksheet = await workbook.getWorksheet('test');
            rc_value = await worksheet.rowCount;
            console.log("Row Count Is: " + rc_value);
            cc_value = await worksheet.columnCount;
            console.log("Column Count Is: " + cc_value);
     
            for(let i=2;i<=rc_value;i++)
            {
                var TC_ExecutionFlag_Value = await xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'TC_ExecutionFlag_V');
                console.log("Execution Flag Value Is: " + TC_ExecutionFlag_Value);
                var TestCaseNumber_Value = await xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'TestCaseNumber_V');
                console.log("TestCaseNumber Value Is: " + TestCaseNumber_Value);
                var TestCaseName_Value = await xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'TestCaseName_V');
                console.log("TestCaseName Value Is: " + TestCaseName_Value);
                
                //console.log("We are in the Loop");
                //await driver.pause(3000);
                //await myDemoApp_Home_Page.MenuItem_Option.click();
                //await driver.pause(3000);
                //await myDemoApp_Home_Page.MenuItem_Login_Option.click();
                //await driver.pause(3000);
                            
                var UN_V = xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'UserName_V');
                console.log("UserName Value Is: "+UN_V);
                var PWD_V = xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'Password_V');
                console.log("Password Value Is: "+PWD_V);
                await myDemoApp_LogIn_Page.UserName_TextBox.setValue(UN_V);
                await myDemoApp_LogIn_Page.Password_TextBox.setValue(PWD_V);
                
                await myDemoApp_LogIn_Page.LogIn_Button.click();
                await driver.pause(3000);
                let AletMessage_EV = await xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'AlertMessage_EV');
                console.log("Expected Alert message Is: "+AletMessage_EV);
                  
                
                if(TestCaseNumber_Value == "1"){
                    var AletMessage_AV = await myDemoApp_LogIn_Page.UN_Required_AletMessage.getText();
                }
                if(TestCaseNumber_Value == "2"){
                    var AletMessage_AV = await myDemoApp_LogIn_Page.UN_Required_AletMessage.getText();
                }
                if(TestCaseNumber_Value == "3"){
                    var AletMessage_AV = await myDemoApp_LogIn_Page.PW_Required_AletMessage.getText();
                }
                if(TestCaseNumber_Value == "4"){
                    var AletMessage_AV = await myDemoApp_LogIn_Page.GM_Required_AletMessage.getText();
                }
                
                expect(AletMessage_AV).toBe(AletMessage_EV);
                //expect(AletMessage_AV).toEqual(AletMessage_EV);
                
                if (AletMessage_AV == AletMessage_EV)
                {
                    await xl_obj.writeResultIntoExcel(worksheet, i, cc_value, 'AlertMessage_AV', AletMessage_AV);
                    await xl_obj.writeResultIntoExcel(worksheet, i, cc_value, 'TestCaseStatus_V', 'PASSED');
                    await workbook.xlsx.writeFile(OFP_Value);
                }
                else
                {
                    await xl_obj.writeResultIntoExcel(worksheet, i, cc_value, 'AlertMessage_AV', AletMessage_AV);
                    await xl_obj.writeResultIntoExcel(worksheet, i, cc_value, 'TestCaseStatus_V', 'FAILED');
                    await workbook.xlsx.writeFile(OFP_Value);
                }
                console.log("Username Required Alert Expected Message Is: " + AletMessage_EV + " Username Required Alert Actual Message Is: " + AletMessage_AV);
            }
    });
    }); 
});