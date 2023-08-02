import React from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextModal from '../../components/TextModal';
import { Styles } from '../../styles/stylesheet';
import { Button, Icon, Image } from '@rneui/themed';
import { Colors } from '../../styles/theme';
import { Images } from '../../constants/images';
import { FontSizes } from '../../styles/fonts';

const ProductDetails = ({ navigation, route }) => {
    const { item, type } = route?.params;
    // console.log(type);

  return (
    <SafeAreaView style={Styles.safeAreaView}>
        <View style={[Styles.flexBetween, styles.iconsView]}>
            <Icon name="angle-left" type="font-awesome" size={30} color={Colors.Black} style={{  }} onPress={()=>{navigation.goBack()}} />
            <Icon name="md-share-social-outline" type="ionicon" size={22} color={Colors.Black} style={{  }} />
        </View>
        <ScrollView>
        <Image source={item?.image} style={{ width: '100%', height: 400 }}/>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%') }}>
            <TextModal style={styles.headLabel}>₹{item?.offer} OFF - Merch Offer</TextModal>
            <View style={{ height: hp('1.5%') }}/>
            <View style={[Styles.commonAlign, styles.pointsView]}>
                <Image source={Images.coinIcon} style={{ width: 23, height: 23 }}/>
                <View style={{ width: 4 }}/>
                <TextModal style={styles.pointsLabel}>{item?.points}</TextModal>
            </View>
            <View style={{ height: hp('1.5%') }}/>
            <TextModal style={styles.descriptionLabel}>Buy Official Marvel Black Panther Logo Oversized T-shirt & get ₹{item?.offer} OFF</TextModal>
        </View>
        <View style={styles.detailView}>
            <View style={[Styles.flexBetween]}>
                <TextModal style={styles.descriptionLabel}>Details</TextModal>
                <TextModal style={[styles.descriptionLabel, { color: '#2D73CB' }]}>Null Shop</TextModal>
            </View>
            <View style={{ height: 6 }}/>
            <View style={[Styles.flexBetween]}>
                <TextModal style={styles.descriptionLabel}>Valid Until</TextModal>
                <TextModal style={[styles.descriptionLabel, { color: '#3A3C3F' }]}>31 Jul 2022</TextModal>
            </View>
        </View>
        <Pressable style={{ marginHorizontal: wp('5%'), marginTop: hp('2%') }}>
            <TextModal style={styles.headLabel}>How to redeem</TextModal>
        </Pressable>
        <View style={styles.shadowView}>
            <TextModal style={styles.alertLabel}>Insufficient CERC Coins !</TextModal>
            <Button
            disabledStyle={{ backgroundColor: '#B3B3B3' }}
            disabledTitleStyle={{ color: Colors.White }}
            onPress={()=>{navigation.navigate('')}}
            title={(
                <View style={Styles.commonAlign}>
                    <TextModal style={styles.buttonTitle}>GET REWARD FOR </TextModal>
                    <Image source={Images.coinIcon} style={{ width: 23, height: 23 }}/>
                    <TextModal style={styles.buttonTitle}> 300</TextModal>
                </View>
            )}
            titleStyle={styles.buttonTitle}
            buttonStyle={[styles.button, { alignSelf: 'center' }]}
            />
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
    iconsView: {
        marginHorizontal: wp('5%'),
        paddingVertical: hp('1.5%')
    },
    pointsView: {
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
        borderRadius: 12,
        alignSelf: 'flex-start'
    },
    pointsLabel: {
        fontFamily: 'Medium',
        fontSize: FontSizes.Secondary_Small,
        color: Colors.White, paddingRight: 4,
    },
    detailView: {
        borderWidth: 1,
        borderColor: '#B3B3B3',
        paddingVertical: 10,
        paddingHorizontal: 17.5,
        marginHorizontal: wp('5%'),
        borderRadius: 6,
        marginTop: hp('2.5%')
    },
    buttonTitle: {
      fontSize: FontSizes.Secondary_Small,
      fontFamily: 'Medium',
      color: Colors.White,
    },
    button: {
      backgroundColor: '#FA6400',
      borderRadius: 7,
      width: wp('90%'),
      paddingVertical: hp('1.5%'),
      marginTop: 5,
    },
    shadowView: {
        marginTop: hp('2%'), 
        alignItems: 'center',
        elevation: 10,
        backgroundColor: Colors.White,
        paddingVertical: hp('2%'),
    },
    headLabel: {
        fontFamily: 'Bold',
        fontSize: FontSizes.Primary_Large,
        color: '#3A3C3F',
    },
    descriptionLabel: {
        fontFamily: 'Book',
        fontSize: FontSizes.Primary_Medium,
        color: '#7A7A7A',
    },
    alertLabel: {
        fontFamily: 'Medium',
        fontSize: FontSizes.Primary_Medium,
        color: Colors.PrimaryColor,
    },
});