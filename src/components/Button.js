import {View, StyleSheet, TouchableOpacity} from 'react-native';
import TextComp from './Text';

const CustomeButton = function ({btnText,func}) {
  return (
      <TouchableOpacity  onPress={func}>
    <View style={styles.CustomeButtonStyle}>
        {/* <Text style={{color: 'white', fontSize: 34}}>{props.btnTxt}</Text> */}
        <TextComp text={btnText} fontSize={16}></TextComp>
    </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CustomeButtonStyle: {
    backgroundColor: 'red',
    // marginTop: 20,
    // marginBottom: 10,
    height: 50,
    margin:4,
    alignItems: 'center',
    justifyContent:'center',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
export default CustomeButton;
