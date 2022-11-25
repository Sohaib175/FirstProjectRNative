import {StyleSheet, Text} from 'react-native';

const TextComp = function ({
  text,
  fontSize = 12,
  underline,
  fontWeight = 'normal',
  color = 'white',
}) {
  return (
    <Text

    
      style={{
        fontSize: fontSize,
        color: color,
        textDecorationLine: underline ?? 'none',
        fontWeight: fontWeight
      }}>
      {text}
    </Text>
  );
};
//   const TextComp = props => {
//     // console.log(fontSize);
//     props.text;
//     return (
//       <Text
//         style={{}}>
//         {props.text}
//       </Text>
//     );
//   };

// const style = StyleSheet.create({
//   textStyle: {
//     // fontSize: props.fontSize,
//     // color: this.txtColor,
//   },
// });
export default TextComp;
