import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomeButton from './components/Button';
import TextComp from './components/Text';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/welcomeBG.png')}
        style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image
              source={require('../assets/tick.png')}
              style={styles.logo.image}
            />
          </View>
          <View style={{flex: 1}}>
            <TextComp
              text={'YOU HAVE LOGIN SUCCESSFULLY'}
              color="gray"
              fontSize={40}
              fontWeight={'700'}></TextComp>
          </View>
          <View style={{flex: 1.5}}></View>
          <View style={{flex: 1, width: '100%'}}>
            <CustomeButton btnText="Continue"></CustomeButton>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 2,
    justifyContent: 'center',
    image: {
      width: 100,
      height: 100,
    },
  },
});

export default WelcomeScreen;
