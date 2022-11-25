
import React from 'react';
import {View} from 'react-native';
import './src/components/TextField';
import LoginScreen from './src/LoginScreen';
import WelcomeScreen from './src/WelcomeScreen';


const App = () => {
  return ( 
    // <WelcomeScreen></WelcomeScreen>
  <LoginScreen></LoginScreen>
  ); 
};
export default App;



//-------------------------------------------


// import React from "react";
// import { Image, SafeAreaView, Text, View } from "react-native";

// const App=()=>{
//   return(
//     <SafeAreaView style={{flex:1}}>
//       <View style={{backgroundColor:'red',flex:0.2}}></View>
//       <View style={{backgroundColor:'white',flex:0.08}}></View>
//       <View style={{flex:0.6,alignItems:"center"}}>
//         <Image
//         source={require('./assets/loginBG.png')}
//         style={{width: 90,height: 90,}}
//         />
//       </View>
//       <View style={{backgroundColor:'blue',flex:0.2}}></View>
//     </SafeAreaView>
//   );
// }

// export default App;
