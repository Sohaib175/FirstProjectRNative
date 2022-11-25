import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import TextComp from './Text';

const TextButton = props => {
  let a = props.underLine;
  return (
    <View style={style.textButtonStyle}>
      <TouchableOpacity style={style.textButtonStyle}>
        <TextComp
          text={props.label}
          color="red"
          underline={a ?? 'none'}></TextComp>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  textButtonStyle: {
    alignItems: 'center',
    // alignSelf:'center',
    // alignContent:'flex-end'
  },
});

export default TextButton;
