#!/bin/zsh
eval "adb tcpip 5556"
eval "adb connect 192.168.1.196:5556"
eval "adb -s 192.168.1.196:5556 install /Users/mespinozas/Code/mdd-ui-generation/gallery/evernoteCloneKnockout/platforms/android/build/outputs/apk/android-debug.apk"
