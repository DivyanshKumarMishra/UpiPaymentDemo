/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import RNUpiPayment from 'react-native-upi-payment';

const App = () => {
  function successCallback(data) {
    console.log('success', data);
  }

  function failureCallback(data) {
    console.log('failure', data);
  }

  const styles = StyleSheet.create({
    button: {
      width: '80%',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#1a6ab0',
    },
    text: {
      fontSize: 23,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
      }}>
      <Text style={{fontSize: 30, color: '#4d5257'}}>UPI Payment Page</Text>
      <Pressable
        style={styles.button}
        onPress={() =>
          RNUpiPayment.initializePayment(
            {
              vpa: 'susmitha336allu@okicici', // or can be john@ybl or mobileNo@upi
              payeeName: 'Susmitha',
              amount: '1',
              transactionRef: 'aasf-332-aoei-fn',
              // uuid: '23',
              // usc_no: '6',
            },
            successCallback,
            failureCallback,
          )
        }>
        <Text style={styles.text}>Pay with UPI</Text>
      </Pressable>
    </View>
  );
};

export default App;
