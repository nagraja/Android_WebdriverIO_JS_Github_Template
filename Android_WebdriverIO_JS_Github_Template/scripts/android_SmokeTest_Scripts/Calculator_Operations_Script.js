const calculator_Home_Page = require('../../app_Pages/calculator_Home_Page.js');

describe('Calculator Operators Test', function () 
{
    it('test', async () => {
        await calculator_Home_Page.firstnumber.click();
        await calculator_Home_Page.operator.click();
        await calculator_Home_Page.secondnumber.click();
        await calculator_Home_Page.equaloperator.click();
        const result = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.TextView').getText();
        console.log("Hello There This is End of the Test", result);

    });
   
        /*
        testcases.foreach(function (tc) 
        {
            var tc_Value = tc.TestCase_Name;
            console.log("Test Case Name Is: ", tc_Value);
            it(tc_Value, async () => {
                console.log("Hello There This is Beginning of the Test");
                await $('//android.widget.ImageButton[@content-desc=\"' + tc.FirstNumber_Value + '\"]').click();
                await $('//android.widget.ImageButton[@content-desc=\"' + tc.Operator_Value + '\"]').click();
                await $('//android.widget.ImageButton[@content-desc=\"' + tc.SecondNumber_Value + '\"]').click();
                await $('//android.widget.ImageButton[@content-desc=\"equals\"]').click();

                const result = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.TextView').getText();
                console.log("Hello There This is End of the Test", result);

            });
        });
        */
});


/*
describe('Multiplication Test', () =>
{
    var operation_Value = "multiply";
    var firstnumber_Value = 9;
    var secondnumber_Value = 7;
    var operation_Value = "minus";

    it('Should Provide the result', async () =>
    {
        console.log("Hello There This is Beginning of the Test");
        await $('//android.widget.ImageButton[@content-desc=\"'+ firstnumber_Value +'\"]').click();
        await $('//android.widget.ImageButton[@content-desc=\"'+ operation_Value +'\"]').click();
        await $('//android.widget.ImageButton[@content-desc=\"'+ secondnumber_Value +'\"]').click();
        await $('//android.widget.ImageButton[@content-desc=\"equals\"]').click();

        const result = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.TextView').getText();
        console.log("Hello There This is End of the Test", result);
    });
});
*/