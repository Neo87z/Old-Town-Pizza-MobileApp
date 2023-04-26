 ### Project Requirements
    node: v10.24.1
    npm: v6.14.12
    ionic: v3.9.2
    cordova: 9.0.0
### Build Apk
    Debug: `ionic cordova run android --prod` OR `ionic cordova build android --prod`
    Release: `ionic cordova build android --prod --release --buildConfig=build.json` OR `ionic cordova build android --prod --release -- -- --packageType=bundle`