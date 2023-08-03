import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Styles } from '../../styles/stylesheet';
import { Button, Image } from '@rneui/themed';
import { Images } from '../../constants/images';
import TextModal from '../../components/TextModal';
import { FontSizes } from '../../styles/fonts';
import { Colors } from '../../styles/theme';
import FlatListComp from '../../components/FlatlistComponent';
import { LinearGradient } from 'expo-linear-gradient';
import GradientText from '../../components/GradientText';

const OPTIONS = [
    {
        id: 1,
        headLabel: 'Welcome',
        point: 30,
        image: Images.giftIcon
    },
    {
        id: 2,
        headLabel: '10 litter post',
        point: 100,
        image: Images.giftIcon
    },
    {
        id: 3,
        headLabel: 'Refer Friend',
        point: 120,
        image: Images.giftIcon
    },
    {
        id: 4,
        headLabel: '50 litter post',
        point: 600,
        image: Images.giftIcon
    },
    {
        id: 5,
        headLabel: '100 litter post',
        point: 1600,
        image: Images.giftIcon
    },
];

const Option = ({ headLabel, points, optionImage, marginRight, marginLeft, marginTop, marginBottom }) => (
    <View style={{ alignItems: 'center', marginRight: marginRight, marginLeft: marginLeft, marginTop: marginTop, marginBottom: marginBottom }}>
        <Image source={optionImage} style={{ width: 64, height: 64 }}/>
        <View style={{ height: 5 }}/>
        <TextModal style={styles.head}>{headLabel}</TextModal>
        <View style={{ height: 5 }}/>
        <TextModal style={styles.subHead}>{points} Points</TextModal>
    </View>
);

const ChallengeBoardTab = () => {
  return (
    <View style={Styles.safeAreaView}>
        <View style={[{  marginTop: hp('3%'), alignSelf: 'center' }]}>
            <FlatListComp
            flatlistStyle={{  }}
                numColumns={3}
                data={OPTIONS}
                renderItem={({ item, index })=>(
                    <Option headLabel={item?.headLabel} points={item?.point} optionImage={item?.image} margin={30} marginLeft={30} marginRight={30} marginBottom={10} marginTop={10}/>
                )}
                keyExtractor={(item) => item?.id}
                ItemSeparatorComponent={()=>(
                    <View style={{  }}/>
                )}
            />
            <ImageBackground source={Images.inviteFrame} imageStyle={{ width: 349, height: 100, borderRadius: 6 }} style={{ marginBottom: hp('22%'), marginLeft: 13, padding: 13 }}>
                <View>
                    <TextModal style={styles.frameHead}>We value friendship</TextModal>
                    <View style={{ height: 4 }}/>
                    <TextModal style={styles.frameSubHead}>Invite a friend. using the code,{'\n'}you will both receive
                    <GradientText colors={['rgba(249, 159, 27, 1)', 'rgba(255, 212, 0, 1)']} style={[styles.frameSubHead, {  }]}> 120 CERC coins !</GradientText>
                    </TextModal>
                    <View style={{ height: 8 }}/>
                    <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}} 
                    style={styles.inviteButton} 
                    colors={['rgba(249, 159, 27, 1)', 'rgba(255, 212, 0, 1)']}
                    >
                        <TextModal style={styles.inviteButtonTitle}>INVITE</TextModal>
                    </LinearGradient>
                </View>
            </ImageBackground>
        </View>
        {/* <View style={[Styles.flexBetween, { marginHorizontal: wp('9%'), marginTop: hp('4%') }]}>
            <Option headLabel='Welcome' points={30}/>
            <Option headLabel='10 litter post' points={100}/>
            <Option headLabel='Refer Friend' points={120}/>
        </View>
        <View style={[Styles.flexBetween, { marginHorizontal: wp('9%'), marginTop: hp('4%') }]}>
            <Option headLabel='50 litter post' points={600}/>
            <Option headLabel='100 litter post' points={1600}/>
            <></>
        </View> */}
    </View>
  );
};

export default ChallengeBoardTab;

const styles = StyleSheet.create({
    head: {
      fontFamily: 'Book',
      fontSize: FontSizes.Primary_Small,
      color: Colors.Black,
    },
    subHead: {
      fontFamily: 'Medium',
      fontSize: FontSizes.Primary_Small,
      color: Colors.Black,
    },
    inviteButtonTitle: {
      fontFamily: 'Bold',
      fontSize: FontSizes.Primary_Small - 2,
      color: Colors.White,
    },
    inviteButton: {
        paddingVertical: 4,
        paddingHorizontal: 18,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    frameHead: {
      fontFamily: 'Bold',
      fontSize: FontSizes.Primary_Small,
      color: Colors.White,
    },
    frameSubHead: {
      fontFamily: 'Book',
      fontSize: FontSizes.Primary_Small - 2,
      color: Colors.White,
    //   lineHeight: 14,
    },
});