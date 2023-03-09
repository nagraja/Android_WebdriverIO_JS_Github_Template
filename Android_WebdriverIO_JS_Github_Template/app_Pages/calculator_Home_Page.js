class calculator_Home_Page
{
    get firstnumber()
    {
        return $('//android.widget.ImageButton[@content-desc=\"5\"]');
    }

    get operator()
    {
        return $('//android.widget.ImageButton[@content-desc=\"multiply\"]');
    }

    get secondnumber()
    {
        return $('//android.widget.ImageButton[@content-desc=\"9\"]');
    }

    get equaloperator()
    {
        return $('//android.widget.ImageButton[@content-desc=\"equals\"]');
    }
}
module.exports = new calculator_Home_Page();