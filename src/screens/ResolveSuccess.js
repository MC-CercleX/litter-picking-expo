import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from '../styles/stylesheet';
import TextModal from '../components/TextModal';
import { StatusBar } from 'expo-status-bar';
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Images } from '../constants/images';
import { Button, Image } from '@rneui/themed';
import { FontSizes, FontWeight } from '../styles/fonts';
import { Colors } from '../styles/theme';

const ResolveSuccess = ({navigation}) => {
  const [showCoin, setShowCoin] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideFromBottomAnim = useRef(new Animated.Value(1000)).current;

  // useEffect(() => {
  //   animatedValue.value = withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) }, () => {setShowCoin(true);});
  // }, []);

  useEffect(() => {
    Animated.parallel([
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
  const timer = setTimeout(() => {
    setShowCoin(1);
  }, 2000);

  // Clean up the timer when the component unmounts or when the effect runs again
  return () => clearTimeout(timer);
  }, [fadeAnim, slideFromBottomAnim]);

  return (
    <SafeAreaView style={[Styles.safeAreaView, { justifyContent: 'center' }]}>
        <View style={[Styles.justify]}>
            {showCoin == 0 ? <View>
                <Image source={Images.rewardsGif} style={{ width: 120, height: 120 }}/>
            </View> :
            <Animated.View style={{ opacity: fadeAnim }}>
                <Image source={Images.coinIcon} style={{ width: 80, height: 80 }}/>
            </Animated.View>}
            <View style={{ marginVertical: hp('3%') }}>
              <Animated.View style={{ top: slideFromBottomAnim }}>
                <TextModal style={styles.mainText}>Congratulations</TextModal>
              </Animated.View>
                <Animated.View style={{ marginTop: hp('2%'), opacity: fadeAnim }}>
                  <TextModal style={styles.pointsText}>You will got 60</TextModal>
                  <View style={{ height: hp('1%') }} />
                  <TextModal style={styles.subLabel}>Within 24hrs your resolved post will verified</TextModal>
                </Animated.View>
            </View>
        </View>
        <Animated.View style={{ opacity: fadeAnim }}>
        <Button
            buttonStyle={{
            borderWidth: 1,
            borderRadius: 6,
            paddingVertical: 6,
            borderColor: Colors.White,
            backgroundColor: Colors.PrimaryColor,
            marginHorizontal: wp('5%')
            }}
            title={'Back to home'}
            titleStyle={{
            fontFamily: 'Medium',
            fontSize: FontSizes.Secondary_Medium,
            color: Colors.White,
            }}
            onPress={()=>{navigation.navigate('Map')}}
        />
        </Animated.View>
    </SafeAreaView>
  );
};

export default ResolveSuccess;

const styles = StyleSheet.create({
    subLabel: {
      fontSize: FontSizes.Primary_Large,
      fontFamily: 'Book',
      color: '#B3B3B3',
      textAlign: 'center'
    },
    pointsText: {
      fontSize: FontSizes.Secondary_Medium,
      fontFamily: 'Medium',
      color: Colors.Black,
      textAlign: 'center'
    },
    mainText: {
      fontSize: FontSizes.Tertiary_Medium,
      fontFamily: 'Bold',
      color: Colors.Black,
      textAlign: 'center'
    },
});