import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextModal from '../../components/TextModal';
import { Styles } from '../../styles/stylesheet';
import { Image } from '@rneui/themed';
import { Images } from '../../constants/images';
import { FontSizes } from '../../styles/fonts';
import { Colors } from '../../styles/theme';

export const ConnectionOff = () => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
        <View style={[Styles.justify, { flex: 1 }]}>
            <Image source={Images.connectionoff} style={{ width: 393, height: 274 }}/>
            <View style={{ alignItems: 'center', marginTop: hp('6%') }}>
                <TextModal style={styles.headLabel}>Oops, your connection seems off..</TextModal>
                <View style={{ height: hp('1%') }}/>
                <TextModal style={styles.subLabel}>Keep calm, pull to refresh to try again</TextModal>
            </View>
        </View>
    </SafeAreaView>
  );
};

export const Erroroccured_1 = () => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
        <View style={[Styles.justify, { flex: 1 }]}>
            <Image source={Images.erroroccured_1} style={{ width: 298, height: 260 }}/>
            <View style={{ alignItems: 'center', marginTop: hp('6%') }}>
                <TextModal style={styles.headLabel}>An error occurred</TextModal>
            </View>
        </View>
    </SafeAreaView>
  );
};

export const Erroroccured_2 = () => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
        <View style={[Styles.justify, { flex: 1 }]}>
            <Image source={Images.erroroccured_2} style={{ width: 170, height: 260 }}/>
            <View style={{ alignItems: 'center', marginTop: hp('6%') }}>
                <TextModal style={styles.headLabel}>An error occurred</TextModal>
            </View>
        </View>
    </SafeAreaView>
  );
};

export const LocationError = () => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
        <View style={[Styles.justify, { flex: 1 }]}>
            <Image source={Images.locationerror} style={{ width: 200, height: 181.14 }}/>
            <View style={{ alignItems: 'center', marginTop: hp('6%') }}>
                <TextModal style={styles.headLabel}>Sorry for the Paws</TextModal>
                <View style={{ height: hp('1%') }}/>
                <TextModal style={styles.subLabel}>No litter post is available in your location</TextModal>
                <View style={{ height: hp('0.5%') }}/>
                <TextModal style={styles.onPressLabel}>Change the location</TextModal>
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    headLabel: {
      fontSize: FontSizes.Secondary_Medium,
      fontFamily: 'Medium',
      color: Colors.Black,
    },
    subLabel: {
      fontSize: FontSizes.Primary_Large,
      fontFamily: 'Book',
      color: '#B3B3B3',
    },
    onPressLabel: {
      fontSize: FontSizes.Primary_Large,
      fontFamily: 'Book',
      color: Colors.PrimaryColor,
    },
});