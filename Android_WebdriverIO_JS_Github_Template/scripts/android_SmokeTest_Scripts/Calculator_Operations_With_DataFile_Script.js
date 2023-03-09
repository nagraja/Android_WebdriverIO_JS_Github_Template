//const calculator_Home_Page = require('/Users/nag.mothukuri/Desktop/WebdriverIO_Appium_Projects/Android_JS_Project/app_Pages/calculator_Home_Page.js');
//const testcases_data = require('/Users/nag.mothukuri/Desktop/WebdriverIO_Appium_Projects/Android_JS_Project/TestData_Files/Calculator_TestData.js')

const calculator_Home_Page = require('../../app_Pages/calculator_Home_Page');
const testcases_data = require('../../TestData_Files/Calculator_TestData')


describe('Calculator Operators With Data File Test', function () 
{    
    testcases_data.testcases.forEach(function (tc)
    {
               
        it(tc.TestCase_Name, async () => 
        {
            console.log("Hello There This is Beginning of the Test: ", tc.TestCase_Name);
            await $('//android.widget.ImageButton[@content-desc=\"' + tc.FirstNumber_Value + '\"]').click();
            await $('//android.widget.ImageButton[@content-desc=\"' + tc.Operator_Value + '\"]').click();
            await $('//android.widget.ImageButton[@content-desc=\"' + tc.SecondNumber_Value + '\"]').click();
            await $('//android.widget.ImageButton[@content-desc=\"equals\"]').click();
            const result = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.TextView').getText();
            console.log("Hello There This is End of the Test and the Result Is: ", result);
        });
        
    });
     
});