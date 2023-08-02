import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

const ResolveSuccess = () => {
  return (
    <SafeAreaView style={[Styles.safeAreaView, { justifyContent: 'center' }]}>
        <View style={[Styles.justify]}>
            {/* <View>
                <Image source={Images.rewardsGif} style={{ width: 120, height: 120 }}/>
            </View> */}
            <View>
                <Image source={Images.coinIcon} style={{ width: 80, height: 80 }}/>
            </View>
            <View style={{ marginVertical: hp('3%') }}>
                <TextModal style={styles.mainText}>Congratulations</TextModal>
                <View style={{ height: hp('2%') }} />
                <TextModal style={styles.pointsText}>You will got 60</TextModal>
                <View style={{ height: hp('1%') }} />
                <TextModal style={styles.subLabel}>Within 24hrs your resolved post will verified</TextModal>
            </View>
        </View>
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
            onPress={()=>{navigation.navigate('')}}
        />
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