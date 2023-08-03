import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapView from 'react-native-maps';
import { Styles } from '../styles/stylesheet';
import TextModal from '../components/TextModal';
import { Button, Icon, Image } from '@rneui/themed';
import { Colors } from '../styles/theme';
import { Images } from '../constants/images';
import { FontSizes } from '../styles/fonts';

const LitterDetails = ({ navigation, route }) => {
    const { item } = route?.params;
    const [like, setLike] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    
  return (
    <SafeAreaView style={Styles.safeAreaView}>
        <View style={[Styles.flexBetween, styles.iconsView]}>
            <Icon name="angle-left" type="font-awesome" size={30} color={Colors.Black} style={{  }} onPress={()=>{navigation.goBack()}} />
            <Icon name="md-share-social-outline" type="ionicon" size={22} color={Colors.Black} style={{  }} />
        </View>
        <ScrollView>
        <ImageBackground source={item?.image} imageStyle={{ width: '100%', height: 310 }} style={{  }}>
            <View style={{ height: 310, flexDirection: 'column', justifyContent: 'space-between', padding: 15 }}>
                <View style={{ alignSelf: 'flex-end' }}>
                    <Image onPress={() => setModalVisible(true)} source={Images.expandContent} style={{ width: 30, height: 30 }}/>
                </View>
                <View style={[Styles.flexBetween]}>
                    {like == false ? 
                    <Image onPress={()=>{setLike(true)}} source={Images.unlike} style={{ width: 26, height: 22 }}/> :
                    <Image onPress={()=>{setLike(false)}} source={Images.like} style={{ width: 26, height: 22 }}/>
                }
                <View style={styles.photoCount}>
                    <TextModal style={styles.countStyle}>1/3</TextModal>
                </View>
                </View>
            </View>
        </ImageBackground>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2.5%') }}>
            <TextModal style={styles.abouthead}>{item?.litterBody}</TextModal>
        </View>
        <View style={[Styles.flexBetween, { marginHorizontal: wp('5%'), marginTop: hp('1.25%') }]}>
        <View style={[Styles.commonAlign, { }]}>
            <Icon
            name="location-pin"
            type="material"
            size={20}
            color={Colors.Black}
            />
            <View style={{ width: wp('2%') }} />
            <TextModal style={styles.eventDateTime}>{item?.distance}</TextModal>
        </View>
            <TextModal style={styles.eventDateTime}>24 July</TextModal>
        </View>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%'), marginBottom: hp('2.75%') }}>
            <TextModal style={styles.contentbody}>I was walked on the orchard street. I saw these litter on the road. This will affect the health of the people who walking around the street.</TextModal>
        </View>
        <View style={[Styles.commonAlign, { paddingHorizontal: wp('5%'), backgroundColor: Colors.White, elevation: 5, paddingVertical: hp('1.75%')}]}>
            <Image source={Images.profileAvatar} style={{ width: 40, height: 40, borderRadius: 20 }}/>
            <View style={{ marginLeft: wp('3%') }}>
                <TextModal style={styles.userName}>Sasikumar s</TextModal>
                <View style={{ height: hp('0.5%') }} />
                <View style={{ borderBottomWidth: 1, borderBottomColor: Colors.PrimaryColor, width: '80%' }}>
                <TextModal onPress={()=>{navigation.navigate('ViewProfileScreen')}} style={styles.pressableText}>View profile</TextModal>
                </View>
            </View>
        </View>
        <View style={[Styles.flexBetween, { marginHorizontal: wp('5%'), marginTop: hp('3%') }]}>
            <TextModal style={styles.mapHead}>Litter posted at</TextModal>
        </View>
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
        </ScrollView>
        <View style={styles.bottomView}>
            <Button
            disabledStyle={{ backgroundColor: '#B3B3B3' }}
            disabledTitleStyle={{ color: Colors.White }}
            onPress={()=>{navigation.navigate('UploadResolvedScreen')}}
            title={(
                <View style={Styles.commonAlign}>
                    <TextModal style={{
                        fontFamily: 'Bold',
                        fontSize: FontSizes.Primary_Large,
                        color: Colors.White,
                    }}>Resolve and Get </TextModal>
                    <Image source={Images.coinIcon} style={{ width: 16, height: 16 }}/>
                    <TextModal style={{
                        fontFamily: 'Bold',
                        fontSize: FontSizes.Primary_Large,
                        color: Colors.White,
                    }}> 10</TextModal>
                </View>
            )}
            buttonStyle={{
            backgroundColor: Colors.PrimaryColor,
            borderRadius: 6,
            alignSelf: 'center'
            }}
            />
        </View>
        <Modal
        animationType="slide"
        visible={modalVisible}
        >
          <SafeAreaView style={Styles.safeAreaView}>
            <View style={[Styles.flexBetween, styles.iconsView]}>
                <Icon name="angle-left" type="font-awesome" size={30} color={Colors.Black} style={{  }} onPress={() => setModalVisible(!modalVisible)} />
                <Icon name="md-share-social-outline" type="ionicon" size={22} color={'transparent'} style={{  }} />
            </View>
            <View style={{ marginTop: hp('12%') }}>
                {/* <ImageBackground source={item?.image} imageStyle={{ width: '100%', height: 460 }} style={{  }}>
                    <View style={styles.photoCount}>
                        <TextModal style={styles.countStyle}>1/3</TextModal>
                    </View>
                </ImageBackground> */}
                <Image source={item?.image} style={{ width: '100%', height: 460 }}/>
                <View style={[styles.photoCount, { position: 'absolute', margin: 20, bottom: 0, right: 0 }]}>
                    <TextModal style={styles.countStyle}>1/3</TextModal>
                </View>
            </View>
          </SafeAreaView>
        </Modal>
    </SafeAreaView>
  );
};

export default LitterDetails;

const styles = StyleSheet.create({
    iconsView: {
        marginHorizontal: wp('5%'),
        paddingVertical: hp('1.5%')
    },
    photoCount: {
        backgroundColor: Colors.White,
        borderRadius: 10,
        padding: 10,
    },
    countStyle: {
        fontFamily: 'Book',
        fontSize: FontSizes.Primary_Small,
        color: Colors.Black,
    },
    abouthead: {
        fontSize: FontSizes.Secondary_Medium,
        fontFamily: 'Bold',
        color: Colors.Black,
    },
    eventDateTime: {
        fontSize: FontSizes.Primary_Medium,
        fontFamily: 'Book',
        color: Colors.Black,
    },
    contentbody: {
        fontSize: FontSizes.Secondary_Small,
        fontFamily: 'Book',
        color: Colors.Black,
        lineHeight: 22
    },
    userName: {
        fontSize: FontSizes.Primary_Large,
        fontFamily: 'Book',
        color: Colors.Black,
    },
    pressableText: {
        fontSize: FontSizes.Primary_Small,
        fontFamily: 'Medium',
        color: Colors.PrimaryColor,
        // borderBottomWidth: 1,
        // borderBottomColor: Colors.PrimaryColor,
    },
    mapHead: {
        fontSize: FontSizes.Primary_Medium,
        fontFamily: 'Medium',
        color: Colors.Black,
    },
    container: {
    //   flex: 1,  
        marginHorizontal: hp('2.5%'),
        borderRadius: 7,
        overflow: 'hidden',
        marginVertical: hp('2%'),
    },
    map: {
      width: '100%',
      height: 160,
      borderRadius: 7,
      overflow: 'hidden'
    },
    bottomView: { paddingHorizontal: wp('5%'), paddingVertical: 15, borderTopWidth: 2, borderTopColor: Colors.PrimaryColor },
});