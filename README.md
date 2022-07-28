# UpiPaymentDemo

1. Create a React Native app
2. Package installation. [Click here](https://www.npmjs.com/package/react-native-upi-payment) to go to the official package page.

       npm install react-native-upi-payment     
3. Open `android/settings.gradle` add the following

       include ':react-native-upi-payment'
       project(':react-native-upi-payment').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-upi-payment/android')
4. Open `android/app/build.gradle` add the following in the dependencies section

       dependencies {
        implementation project(':react-native-upi-payment')
       }
5. Open `android/app/src/main/java/MainApplication.java`

        import com.upi.payment.UpiPaymentPackage;
6. Open `node_modules/react-native-upi-payment/android/build.gradle` and change 

        dependencies {
            compile "com.facebook.react:react-native:+"  // From node_modules
            compile 'com.google.code.gson:gson:2.8.0'
        }
        
        ------------TO------------
        
        dependencies {
            implementation "com.facebook.react:react-native:+"  // From node_modules
            implementation 'com.google.code.gson:gson:2.8.0'
        }
7. Payment function which is triggered op pressing the `Pay with UPI` button inside `App.js`.

        RNUpiPayment.initializePayment({
          vpa: 'john@upi', // or can be john@ybl or mobileNo@upi
          payeeName: 'John Doe',
          amount: '1',
          transactionRef: 'aasf-332-aoei-fn'
        }, successCallback, failureCallback);

