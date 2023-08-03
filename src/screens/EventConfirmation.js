import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LottieView from "lottie-react-native";
import TextModal from '../components/TextModal';
import { Styles } from '../styles/stylesheet';
import { Colors } from '../styles/theme';
import { Button, Icon } from '@rneui/themed';
import { FontSizes, FontWeight } from '../styles/fonts';
import { Images } from '../constants/images';

const EventConfirmation = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.PrimaryColor}/>
        <View style={[Styles.flexBetween, styles.iconsView]}>
            <Icon name="angle-left" type="font-awesome" size={30} color={Colors.Black} style={{  }} onPress={()=>{navigation.goBack()}} />
            <TextModal style={styles.headLabel}>Confirmation</TextModal>
            <Icon name="md-share-social-outline" type="ionicon" size={22} color={'transparent'} style={{  }} />
        </View>
        <View style={{ flex: 1 }}>
        <View style={Styles.justify}>
            <View style={Styles.justify}>
                <LottieView loop autoPlay source={Images.eventConfirmGif} style={{ width: 393, height: 393 }}/>
                <View style={{ position: 'absolute' }}>
                    <TextModal style={styles.partyIcon}>🎉</TextModal>
                    <View style={{ height: hp('2%') }}/>
                    <TextModal style={styles.eventHead}>You’re going!</TextModal>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TextModal style={styles.headLabel}>Run marathon</TextModal>
                    <View style={{ height: hp('1%') }}/>
                <TextModal style={styles.detailsText}>Sunday, 9 October 2023 | 5:00 AM GMT</TextModal>
            </View>
        </View>
        <View style={{ height: hp('3%') }}/>
        <Button
            buttonStyle={{
            borderWidth: 1,
            borderRadius: 6,
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderColor: Colors.White,
            backgroundColor: Colors.PrimaryColor,
            marginHorizontal: wp('4%')
            }}
            title={'Add to calendar'}
            titleStyle={{
            fontFamily: 'Medium',
            fontSize: FontSizes.Secondary_Medium,
            color: Colors.White,
            fontWeight: FontWeight.Light,
            }}
            onPress={()=>{navigation.navigate('')}}
        />
        </View>
        <View style={[Styles.flexBetween, styles.freeShareView]}>
            <TextModal style={styles.freeLabel}>You’re going!</TextModal>
            <Button
            icon={(
                <Icon name="ios-share" type="material" size={20} color={'white'} style={{ marginRight: wp('1%') }} />
            )}
              buttonStyle={{
                borderWidth: 1,
                borderRadius: 6,
                paddingHorizontal: 20,
                paddingVertical: 6,
                backgroundColor: Colors.PrimaryColor,
                borderColor: Colors.White,
              }}
              title={'Share'}
              titleStyle={{
                fontFamily: 'Bold',
                fontSize: FontSizes.Primary_Large,
                color: Colors.White,
              }}
              onPress={()=>{}}
            />
        </View>
    </SafeAreaView>
  );
};

export default EventConfirmation;

const styles = StyleSheet.create({
    iconsView: {
        marginHorizontal: wp('5%'),
        paddingVertical: hp('1.5%')
    },
    headLabel: {
      fontSize: FontSizes.Secondary_Medium,
      fontFamily: 'Medium',
      color: Colors.Black,
    },
    partyIcon: {
      fontSize: 80,
      fontFamily: 'Bold',
      textAlign: 'center'
    },
    eventHead: {
        fontSize: FontSizes.Tertiary_Medium,
        fontFamily: 'Bold',
        color: Colors.Black,
    },
    detailsText: {
      fontSize: FontSizes.Primary_Large,
      fontFamily: 'Book',
      color: '#B3B3B3',
    },
    freeShareView: {
        paddingHorizontal: wp('5%'), 
        paddingVertical: hp('1%'),
        backgroundColor: Colors.White,
        elevation: 10,
    },
    freeLabel: {
      fontSize: FontSizes.Primary_Medium,
      fontFamily: 'Medium',
      color: Colors.Black,
    },
});