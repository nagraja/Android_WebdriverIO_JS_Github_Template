class myDemoApp_Login_Page
{
    get UserName_TextBox()
    {
        return $('//*[@content-desc="Username input field"]');
    }

    get Password_TextBox()
    {
        return $('//*[@content-desc="Password input field"]');
    }
 
    get LogIn_Button()
    {
        return $('//*[@content-desc="Login button"]');
    }

    get UN_Required_AletMessage()
    {
        return $('//*[@content-desc="Username-error-message"]/android.widget.TextView');
    }

    get PW_Required_AletMessage()
    {
        return $('//*[@content-desc="Password-error-message"]/android.widget.TextView');
    }

    get GM_Required_AletMessage()
    {
        return $('//*[@content-desc="generic-error-message"]/android.widget.TextView');
    }

}
module.exports = new myDemoApp_Login_Page();