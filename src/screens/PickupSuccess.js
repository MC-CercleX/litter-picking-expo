import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.PrimaryColor, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ alignSelf: 'flex-start', marginTop: hp('3%') }}>
          <Image source={Images.animatedtruckleft} style={{ width: 195.1, height: 142.35 }}/>
        </View>
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
        <Button
        disabledStyle={{ backgroundColor: '#B3B3B3' }}
        disabledTitleStyle={{ color: Colors.White }}
        onPress={()=>{navigation.navigate('Map')}}
        title={'BACK TO HOME'}
        titleStyle={styles.buttonTitle}
        buttonStyle={[styles.button, { alignSelf: 'center', marginTop: hp('6%'), marginBottom: hp('9%') }]}
        />
        <View style={{ alignSelf: 'flex-start', marginLeft: wp('5%') }}>
          <Image source={Images.thumbsup_man} style={{ width: 137.6, height: 178 }}/>
        </View>
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