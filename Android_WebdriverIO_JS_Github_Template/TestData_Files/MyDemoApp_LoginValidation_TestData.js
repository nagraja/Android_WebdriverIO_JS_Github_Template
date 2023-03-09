exports.testcases = [
    {
        TCnumber_Value: '1',
        TCname_Value: 'Username Required Alert Message Validation',
        UserName_Value: '',
        Password_Value: '',
        AlertMessage_Value: 'Username is required',
    },
    {
        TCnumber_Value: '2',
        TCname_Value: 'Password Required Alert Message Validation',
        UserName_Value: '',
        Password_Value: 'HelloPassword',
        AlertMessage_Value: 'Username is required',
    },
    {
        TCnumber_Value: '3',
        TCname_Value: 'Password Required Alert Message Validation',
        UserName_Value: 'HelloUserName',
        Password_Value: '',
        AlertMessage_Value: 'Password is required',
    },
    {
        TCnumber_Value: '4',
        TCname_Value: 'Incorrect Username & Password Alert Message Validation',
        UserName_Value: 'HelloUserName',
        Password_Value: 'HelloPassword',
        AlertMessage_Value: 'Provided credentials do not match any user in this service.',
    }
]