#!/bin/bash

echo Test Type: $1
TestType_Value=$1


####Test Type Check Starts####
if [[ -z $TestType_Value ]]
#if (( $TestType_Value == "" ))
then
    read -p 'Enter Test Type (ST or FT) Please: ' TT_Value
    Script_Location=~/Desktop/Android_WebDriverIO_JS_Project_For_Github/Android_WebdriverIO_JS_Github_Template
else
    echo Hello Do Not Enter
    TT_Value=${TestType_Value}
    Script_Location=~/.jenkins/workspace/Android_WebDriverIO_JS_Project_From_GitHub_Job/Android_WebdriverIO_JS_Github_Template
    echo TestType Value From command line is: $TT_Value
fi
####Test Type Check Ends#####

#echo Script Location is: $Script_Location


echo Hello Today Date is $(date)

sleep 15s

#cd ~/Library/Android/sdk/emulator 
emulator -list-avds

sleep 15s

#cd ~/Library/Android/sdk/emulator 
emulator -avd Pixel4_V11_For_Testing &

sleep 15s

echo "This statement is after sleep"

cd ${Script_Location} 
tt_v=ST npm run wdio


echo Done script execution
sleep 10s


adb devices  #displaying all connected emulator/mobile devices

sleep 15s
adb -s emulator-5554 emu kill # trying to kill/close emulator

sleep 15s
#adb -s emulator-5556-11 emu kill # trying to kill/close emulator

sleep 30s
echo Emulator closed successfully

###closing all terminal windows Starts
killall Terminal
###closing all terminal windows Ends
