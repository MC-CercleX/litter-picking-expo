import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextModal from '../../components/TextModal';
import { Styles } from '../../styles/stylesheet';
import { Colors } from '../../styles/theme';
import { Images } from '../../constants/images';
import { Button, Icon, Image } from '@rneui/themed';
import { FontSizes } from '../../styles/fonts';

const SellScrapHome = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.PrimaryColor}/>
    <View style={{ backgroundColor: Colors.PrimaryColor, paddingBottom: 10 }}>
      <View style={styles.headerView}>
        <Icon onPress={()=>{navigation.goBack()}} name="chevron-left" type="material-community" size={30} color={Colors.White} />
        <TextModal style={styles.headerLabelStyle}>Sell Scrap</TextModal>
        <Icon name="chevron-right" type="material-community" size={30} color={'transparent'} />
      </View>
    </View>
    <View style={{ flex: 1 }}>
        <View style={styles.labelView}>
            <TextModal style={styles.headLabel}>Looking to sell your scrap items hassle-free?</TextModal>
            <View style={{ height: hp('2%') }}/>
            <TextModal style={styles.subheadLabel}>Quick and Easy Process</TextModal>
        </View>
        <View style={[Styles.flexBetween, { marginTop: hp('5%'), marginHorizontal: wp("4%") }]}>
            <Image source={Images.timer} style={{ width: 56, height: 56 }}/>
            <View style={{ width: 7.5 }}/>
            <TextModal style={styles.imageLabel}>Need to sell your Scrap?{'\n'}We've got you covered. Our easy raise pickup process allows you to raise your raise pickup in just one minute!</TextModal>
        </View>
        <View style={[Styles.flexBetween, { marginTop: hp('3.75%'), marginHorizontal: wp("4%") }]}>
            <Image source={Images.timer} style={{ width: 56, height: 56 }}/>
            <View style={{ width: 7.5 }}/>
            <TextModal style={styles.imageLabel}>Selling your scrap has never been this effortless. Say goodbye to the hassle of transporting and finding buyers for your{'\n'}scrap items</TextModal>
        </View>
        <View style={[Styles.flexBetween, { marginTop: hp('3.75%'), marginHorizontal: wp("4%") }]}>
            <Image source={Images.timer} style={{ width: 56, height: 56 }}/>
            <View style={{ width: 7.5 }}/>
            <TextModal style={styles.imageLabel}>So why wait?  selling your scrap items today and experience a seamless and rewarding transaction process!</TextModal>
        </View>
    </View>
        <Button 
          onPress={()=>{navigation.navigate('ScrapSelectionScreen')}}
          title={'Sell It Now'}
          titleStyle={styles.buttonTitle}
          buttonStyle={[styles.button, { alignSelf: 'center' }]}
        />
    </SafeAreaView>
  );
};

export default SellScrapHome;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp("3%"),
    marginBottom: 15,
    marginTop: 35,
  },
  headerLabelStyle: {
    fontFamily: "Medium",
    fontSize: FontSizes.Secondary_Medium,
    color: Colors.White,
  },
  labelView: {
    alignItems: "center",
    marginHorizontal: wp("5%"),
    marginTop: hp("4%"),
  },
  headLabel: {
    fontFamily: "Bold",
    fontSize: FontSizes.Tertiary_Large + 2,
    color: Colors.PrimaryColor,
    textAlign: "center",
    lineHeight: 38,
  },
  subheadLabel: {
    fontFamily: "Bold",
    fontSize: FontSizes.Secondary_Medium,
    color: Colors.Black,
  },
  imageLabel: {
    fontFamily: "Medium",
    fontSize: FontSizes.Primary_Medium,
    color: Colors.Black,
    lineHeight: 18,
    textAlign: 'left',
    width: '84%'
  },
  buttonTitle: {
    fontSize: FontSizes.Secondary_Small,
    fontFamily: 'Medium',
    color: Colors.White,
  },
  button: {
    backgroundColor: Colors.PrimaryColor,
    marginBottom: hp('6%'),
    borderRadius: 7,
    width: wp('90%'),
    paddingVertical: hp('2%')
  },
});