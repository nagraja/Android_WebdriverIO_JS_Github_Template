//myDemoApp_LoginPageValidation_DD_RW_Excel_TCsheet_Script.js - DD=DataDrive, RW=ReadWrite, TC=TestCases

const myDemoApp_Home_Page = require('../../app_Pages/myDemoApp_Home_Page');
const myDemoApp_LogIn_Page = require('../../app_Pages/myDemoApp_LogIn_Page');
var AletMessage_AV;

const xl_obj = require('../../configuration_scripts/Excel_Read_Write');
const Excel_Obj  = require('exceljs');
const fs = require('fs');
const { error } = require('console');
const { default: AllureReporter } = require('@wdio/allure-reporter');
const workbook = new Excel_Obj.Workbook();
const TC_WB = new Excel_Obj.Workbook();
var TT_Value = process.env.tt_v  //TT_Value = TestType_Value, tt_v=testtype_value

var IFP_Value; //IFP_Value = InputFilePath_Value
var OFP_Value; //OFP_Value = OutputFilePath_Value
var rc_value;  //rc_value = RowCount_value
var cc_value;  //cc_value = ColumnCount_value
var TestCaseNumber_Value;

//Timestamp Generation for Reports/Results Folder Starts
    var today = new Date(),
    TimeStamp_V = today.getMonth() + 1 + '_' + today.getDate() + '_' + today.getFullYear() + '_' + today.getHours()+'h'+today.getMinutes()+'m';
    console.log("Time Stamp Value Is: "+TimeStamp_V);
//Timestamp Generation for Reports/Results Folder Starts

//InputFilePath and OutputFilePath assignement Starts
    IFP_Value = './TestData_Files/myDemoApp_LoginPageValidation_DD_With_Excel_Script_I_DF.xlsx';
    OFP_Value = './SmokeTest_Reports/'+TT_Value+'_'+TimeStamp_V+'_Result/'+TT_Value+'_O_DF.xlsx';
//InputFilePath and OutputFilePath assignement Ends

describe('MyDemo App Test', function () 
{    
    //Navigate to Login Screen for Each Test Cases Execution Starts
        beforeEach(async function () 
        {
            await driver.pause(3000);
            await myDemoApp_Home_Page.MenuItem_Option.click();
            await driver.pause(3000);
            await myDemoApp_Home_Page.MenuItem_Login_Option.click();
            await driver.pause(3000);
        });
    //Navigate to Login Screen for Each Test Cases Execution Starts
    
    //Test Case Starts
        it("TestTestTest", async () => 
        {
            await workbook.xlsx.readFile(IFP_Value).then(async() => 
            {
                const worksheet = await workbook.getWorksheet('test');
                rc_value = await worksheet.rowCount;
                console.log("Row Count Is: " + rc_value);
                cc_value = await worksheet.columnCount;
                console.log("Column Count Is: " + cc_value);
                
                //This for Loop is to Loop through all the Rows in Input FIle Starts
                    for(let i=2;i<=rc_value;i++)
                    {
                        //Adding worksheet for each TestCase and Writing TestCase Column Names and Corresponding Value to Newly Created TestCase worksheet Starts
                            var TestCaseNumber_Value = await xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'TestCaseNumber_V');
                            console.log("TestCaseNumber Value Is: " + TestCaseNumber_Value);
                            await workbook.addWorksheet('TC_'+TestCaseNumber_Value);
                            const TC_WS = await workbook.getWorksheet('TC_'+TestCaseNumber_Value);
                            var EV_CNV = 2;
                            for (var cni=1; cni<cc_value+1; cni++)
                            {
                                var Column_Name = await worksheet.getRow(1).getCell(cni).value;
                                var Column_Value = await worksheet.getRow(i).getCell(cni).value;
                                console.log("Column Name Is: "+Column_Name+" And Corresponding Value Is: "+Column_Value);
                                TC_WS.getRow(1).getCell(cni).value = Column_Name;
                                TC_WS.getRow(2).getCell(cni).value = Column_Value;
                                EV_CNV = EV_CNV+1;
                            }
                        //Adding worksheet for each TestCase and Writing TestCase Column Names and Corresponding Value to Newly Created TestCase worksheet Ends
                        AllureReporter.addStep("Entering UserName");
                        //Reading Test Case Input Data from Excel Start
                            var TC_ExecutionFlag_Value = await xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'TC_ExecutionFlag_V');
                            console.log("Execution Flag Value Is: " + TC_ExecutionFlag_Value);
                            //var TestCaseNumber_Value = await xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'TestCaseNumber_V');
                            //console.log("TestCaseNumber Value Is: " + TestCaseNumber_Value);
                            var TestCaseName_Value = await xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'TestCaseName_V');
                            console.log("TestCaseName Value Is: " + TestCaseName_Value);
                        //Reading Test Case Input Data from Excel Start
                        //Reading Test Data from Excel Starts
                            var UN_V = xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'UserName_V');
                            console.log("UserName Value Is: "+UN_V);
                            var PWD_V = xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'Password_V');
                            console.log("Password Value Is: "+PWD_V);
                        //Reading Test Data from Excel Ends

                        //Entering UserName In UserName TextBox Starts
                            await myDemoApp_LogIn_Page.UserName_TextBox.setValue(UN_V);
                        //Entering UserName In UserName TextBox Ends

                        //Entering Password In Password TextBox Starts
                            await myDemoApp_LogIn_Page.Password_TextBox.setValue(PWD_V);
                        //Entering Password In Password TextBox Ends

                        //Pressing Login Button Starts
                            await myDemoApp_LogIn_Page.LogIn_Button.click();
                            await driver.pause(3000);
                        //Pressing Login Button Ends
                        
                        let AletMessage_EV = await xl_obj.readCellValueFromExcel(worksheet, i, cc_value, 'AlertMessage_EV');
                        console.log("Expected Alert message Is: "+AletMessage_EV);
                            
                        //Geeting Alert Actual Message From Screen Starts
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
                        //Geeting Alert Actual Message From Screen Ends

                        //Validation of Alert Message Starts
                            expect(AletMessage_AV).toBe(AletMessage_EV);
                                
                            if (AletMessage_AV == AletMessage_EV)
                            {
                                //console.log("Username Required Alert Expected Message Is: " + AletMessage_EV + " Username Required Alert Actual Message Is: " + AletMessage_AV);
                                await xl_obj.writeResultIntoExcel(worksheet, i, cc_value, 'AlertMessage_AV', AletMessage_AV);
                                await xl_obj.writeResultIntoExcel(worksheet, i, cc_value, 'TestCaseStatus_V', 'PASSED');
                                await xl_obj.writeResultIntoExcel(TC_WS, 2, cc_value, 'AlertMessage_AV', AletMessage_AV);
                                await xl_obj.writeResultIntoExcel(TC_WS, 2, cc_value, 'TestCaseStatus_V', 'PASSED');
                                await workbook.xlsx.writeFile(OFP_Value);
                            }
                            else
                            {
                                //console.log("Username Required Alert Expected Message Is: " + AletMessage_EV + " Username Required Alert Actual Message Is: " + AletMessage_AV);
                                await xl_obj.writeResultIntoExcel(worksheet, i, cc_value, 'AlertMessage_AV', AletMessage_AV);
                                await xl_obj.writeResultIntoExcel(worksheet, i, cc_value, 'TestCaseStatus_V', 'FAILED');
                                await xl_obj.writeResultIntoExcel(TC_WS, 2, cc_value, 'AlertMessage_AV', AletMessage_AV);
                                await xl_obj.writeResultIntoExcel(TC_WS, 2, cc_value, 'TestCaseStatus_V', 'FAILED');
                                await workbook.xlsx.writeFile(OFP_Value);
                            }
                        //Validation of Alert Message Ends
                        
                    }
                //This for Loop is to Loop through all the Rows in Input FIle Ends
            });
        }); 
    //Test Case Ends
});