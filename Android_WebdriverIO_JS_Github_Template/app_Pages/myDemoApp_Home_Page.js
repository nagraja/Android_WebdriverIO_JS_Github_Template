class myDemoApp_Home_Page
{
    get MenuItem_Option()
    {
        return $('~open menu');
    }

    get MenuItem_Login_Option()
    {
        return $('//android.view.ViewGroup[@content-desc="menu item log in"]');
    }
 
}
module.exports = new myDemoApp_Home_Page();