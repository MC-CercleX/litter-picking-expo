import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextModal from '../components/TextModal';
import { Colors } from '../styles/theme';
import { Button, Icon, Image } from '@rneui/themed';
import { FontSizes } from '../styles/fonts';
import { Images } from '../constants/images';

const PickupSuccess = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const slideFromLeftAnim = useRef(new Animated.Value(-300)).current;
  const slideFromBottomAnim = useRef(new Animated.Value(1000)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideFromLeftAnim, {
        toValue: 0,
        duration: 500, // Adjust the duration as needed
        useNativeDriver: false, // This must be set to false for layout animation
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, // Animation duration
        useNativeDriver: true,
      }),
      Animated.timing(slideFromBottomAnim, {
        toValue: 0,
        duration: 750,
        useNativeDriver: false,
      }),
  ]).start();
  }, [slideFromLeftAnim, fadeAnim, slideFromBottomAnim]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.PrimaryColor, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.View style={{ alignSelf: 'flex-start', marginTop: hp('3%'), left: slideFromLeftAnim }}>
          <Image source={Images.animatedtruckleft} style={{ width: 195.1, height: 142.35 }}/>
        </Animated.View>
        <View style={styles.checkView}>
            <Icon name="check" type="material" size={24} color={Colors.White} />
        </View>
        <View style={{ marginBottom: hp('2%'), marginTop: hp('3.5%') }}>
        <TextModal style={[styles.successText, { fontFamily: 'Book' }]}>We're pleased to inform you that{'\n'}
        <TextModal style={[styles.successText, { fontFamily: 'Bold' }]}>we will be coming for your{'\n'}Scrap pickup.</TextModal>
        </TextModal>
        </View>
        <View>
            <TextModal style={[styles.successText, { fontFamily: 'Book', fontSize: FontSizes.Primary_Medium, }]}>17 July 2023</TextModal>
        </View>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Button
          disabledStyle={{ backgroundColor: '#B3B3B3' }}
          disabledTitleStyle={{ color: Colors.White }}
          onPress={()=>{navigation.navigate('Map')}}
          title={'BACK TO HOME'}
          titleStyle={styles.buttonTitle}
          buttonStyle={[styles.button, { alignSelf: 'center', marginTop: hp('6%'), marginBottom: hp('9%') }]}
          />
        </Animated.View>
        <Animated.View style={{ alignSelf: 'flex-start', marginLeft: wp('5%'), top: slideFromBottomAnim }}>
          <Image source={Images.thumbsup_man} style={{ width: 137.6, height: 178 }}/>
        </Animated.View>
    </SafeAreaView>
  );
};

export default PickupSuccess;

const styles = StyleSheet.create({
    checkView: {
        backgroundColor: Colors.AppleGreen,
        width: 54, height: 54,
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: hp('7%')
    },
    successText: {
        color: Colors.White,
        textAlign: 'center',
        fontSize: FontSizes.Secondary_Medium,
        lineHeight: 26
    },
    buttonTitle: {
      fontSize: FontSizes.Secondary_Small,
      fontFamily: 'Medium',
      color: Colors.White,
    },
    button: {
      backgroundColor: '#FA6400',
      borderRadius: 7,
      width: wp('45%'),
      paddingVertical: hp('1%'),
      marginBottom: hp('3%')
    },
});