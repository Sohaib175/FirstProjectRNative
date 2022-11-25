import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const CustomeTextInput = ({placeHolder, getVal, maxLen,keyboardType,isPass}) => {
  return (
    <TextInput
      placeholder={placeHolder}
      maxLength={maxLen}
      onChangeText={text => getVal(text)}
      keyboardType={keyboardType}      // text={val}
      secureTextEntry={isPass}
      style={styles.TExtFieldStyle}></TextInput>
  );
};

const styles = StyleSheet.create({
  TExtFieldStyle: {
    color: 'black',
    borderRadius: 26,
    height: 50,
    margin: 4,
    backgroundColor: 'white',
  },
});
export default CustomeTextInput;
