import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextModal from '../components/TextModal';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapView from 'react-native-maps';
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors } from '../styles/theme';
import { Styles } from '../styles/stylesheet';
import { Button, Divider, Icon, Image } from '@rneui/themed';
import { FontSizes, FontWeight } from '../styles/fonts';
import { Images } from '../constants/images';
import FlatListComp from '../components/FlatlistComponent';

const NOOFUSERS = [
    {
        id: 1,
        userImg: Images.profileEmoji_1,
    },
    {
        id: 2,
        userImg: Images.profileEmoji_1,
    },
    {
        id: 3,
        userImg: Images.profileEmoji_1,
    },
    {
        id: 4,
        userImg: Images.profileEmoji_1,
    },
    {
        id: 5,
        userImg: Images.profileEmoji_1,
    },
];

const EventScreen = ({ navigation, route }) => {
    const { item, type } = route?.params;
    const refRBSheet = useRef();
    const [count, setCount] = useState(90);
  
    const handleIncrement = () => {
      if (count < 100) {
        setCount((prevCount) => prevCount + 1);
      }
    };

    const handleDecrement = () => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    };

  return (
    <SafeAreaView style={Styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.PrimaryColor}/>
        <View style={[Styles.flexBetween, styles.iconsView]}>
            <Icon name="angle-left" type="font-awesome" size={30} color={Colors.Black} style={{  }} onPress={()=>{navigation.goBack()}} />
            <TextModal style={styles.headLabel}>Event</TextModal>
            <Icon name="md-share-social-outline" type="ionicon" size={22} color={Colors.Black} style={{  }} />
        </View>
        <ScrollView>
        <Image source={item?.picture} style={{ width: '100%', height: 142 }}/>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%') }}>
            <TextModal style={styles.eventHead}>{item?.label}</TextModal>
        </View>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%') }}>
            <View style={Styles.commonAlign}>
                <Icon
                name="calendar-month-outline"
                type="material-community"
                size={24}
                color={Colors.Black}
                />
                <View style={{ width: wp('1.5%') }} />
                <TextModal style={styles.eventDateTime}>Sunday, 9 October 2023 | 5:00 AM GMT</TextModal>
            </View>
            <View style={{ height: hp('1.5%') }} />
            <View style={[Styles.commonAlign, { marginLeft: 2 }]}>
                <Icon
                name="location"
                type="octicon"
                size={24}
                color={Colors.Black}
                />
                <View style={{ width: wp('2%') }} />
                <TextModal style={styles.eventDateTime}>National Stadium, Singapore</TextModal>
            </View>
        </View>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2.5%') }}>
            <TextModal style={styles.abouthead}>About the Event</TextModal>
        </View>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%') }}>
            <TextModal style={[styles.eventDateTime, { lineHeight: 20 }]}>The Go Green Marathon is more than just a race; it is a platform for individuals from all walks of life to come together and contribute to a greener world. As participants, you will be part of a collective effort to raise awareness about environmental issues and promote sustainable living practices.</TextModal>
        </View>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2.5%') }}>
            <TextModal style={[styles.eventDateTime, { lineHeight: 20 }]}>Event Details:{'\n'}Date: Sunday, 9 October 2023{'\n'}Time: 5:00 PM - 8:00 PM GMT{'\n'}Location: National Stadium</TextModal>
        </View>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2.5%') }}>
            <TextModal style={[styles.eventDateTime, { lineHeight: 20 }]}>Whether you're an experienced marathon runner, a casual jogger, or simply enthusiastic about supporting a worthy cause, this event offers something for everyone. Lace up your running shoes, gather your friends and family, and be prepared for an incredible experience filled with camaraderie, inspiration, and the thrill of the race.</TextModal>
        </View>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('0.5%') }}>
            <TextModal style={styles.readless}>Read less</TextModal>
        </View>
        <Divider style={{ marginTop: hp('2%') }} width={6}/>
        <View style={[Styles.flexBetween, { marginHorizontal: wp('5%'), marginVertical: hp('2%') }]}>
            <View>
                <TextModal style={styles.hostStyle}>Hosting</TextModal>
                <View style={{ height: hp('1.5%') }} />
                <View style={Styles.commonAlign}>
                    <Image source={Images.sembwaselogo} style={{ width: 25, height: 25 }}/>
                    <TextModal style={styles.hostByStyle}>SembWaste Pte Ltd</TextModal>
                </View>
            </View>
            <View>
                <TextModal style={styles.hostStyle}>Participance</TextModal>
                <View style={{ height: hp('1.5%') }} />
                <View style={Styles.commonAlign}>
                    <FlatListComp
                        flatlistStyle={{ flexDirection: "row" }}
                        data={NOOFUSERS}
                        horizontal
                        renderItem={({ item, index }) => (
                        <View
                            style={[
                            styles.imageView,
                            {
                                left:
                                index == 1
                                    ? -9
                                    : index == 2
                                    ? -18
                                    : index == 3
                                    ? -27
                                    : index == 4
                                    ? -36
                                    : null,
                            },
                            ]}
                        >
                            <Image
                            source={item?.userImg}
                            style={{ width: 24.23, height: 24.23, borderRadius: 20 }}
                            />
                        </View>
                        )}
                        keyExtractor={(item) => item?.id}
                    />
                    <TextModal style={styles.hostByStyle}>2.5k+ People</TextModal>
                </View>
            </View>
        </View>
        <Divider style={{ marginBottom: hp('2%') }} width={6}/>
        <View style={{ marginHorizontal: wp('5%') }}>
            <TextModal style={styles.abouthead}>Location</TextModal>
        </View>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%') }}>
            <TextModal style={styles.eventDateTime}>National Stadium , 1 Stadium Dr, Singapore</TextModal>
        </View>
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
        <View style={[Styles.flexBetween, { marginHorizontal: wp('5%'), marginVertical: hp('2.5%') }]}>
            <View>
            <TextModal style={styles.inviteheadLabel}>Invite your friends</TextModal>
            <View style={{ height: hp('0.5%') }} />
            <TextModal style={styles.eventDateTime}>and enjoy a shared experience</TextModal>
            </View>
            <Button
              buttonStyle={{
                borderWidth: 1,
                borderRadius: 6,
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderColor: Colors.PrimaryColor,
                backgroundColor: Colors.White,
              }}
              title={'SHARE'}
              titleStyle={{
                fontFamily: 'Book',
                fontSize: FontSizes.Primary_Small,
                color: Colors.PrimaryColor,
                fontWeight: FontWeight.Light,
              }}
              onPress={()=>{}}
            />
        </View>
        </ScrollView>
        <View style={[Styles.flexBetween, styles.freeShareView]}>
            <TextModal style={styles.freeLabel}>Free</TextModal>
            <Button
              buttonStyle={{
                borderWidth: 1,
                borderRadius: 6,
                paddingHorizontal: 20,
                paddingVertical: 6,
                backgroundColor: Colors.PrimaryColor,
                borderColor: Colors.White,
              }}
              title={'Attend'}
              titleStyle={{
                fontFamily: 'Bold',
                fontSize: FontSizes.Primary_Large,
                color: Colors.White,
              }}
              onPress={()=>{refRBSheet.current.open()}}
            />
        </View>
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
            wrapper: {
                backgroundColor: "rgba(28, 27, 31, 0.7)",
            },
            draggableIcon: {
                backgroundColor: "#D9D9D9",
                width: '17.5%'
            },
            container: {
                height: 215,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
            },
            }}
        >
        <View style={{ alignItems: 'center', marginTop: hp('2%') }}>
            <TextModal style={styles.headLabel}>Bringing guest ?</TextModal>
        </View>
        <View style={[Styles.flexBetween, { marginHorizontal: wp('20%'), marginVertical: hp('3%') }]}>
            <Pressable style={styles.counterbuttonStyle}
              onPress={()=>{handleDecrement()}}
            >
                <Icon
                name="minus"
                type="material-community"
                size={24}
                color={Colors.PrimaryColor}
                />
            </Pressable>
            <TextModal style={styles.headLabel}>{count}</TextModal>
            <Pressable style={styles.counterbuttonStyle}
              onPress={()=>{handleIncrement()}}
            >
                <Icon
                name="plus"
                type="material-community"
                size={24}
                color={Colors.PrimaryColor}
                />
            </Pressable>
        </View>
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
              title={'Confirm'}
              titleStyle={{
                fontFamily: 'Medium',
                fontSize: FontSizes.Secondary_Medium,
                color: Colors.White,
                fontWeight: FontWeight.Light,
              }}
              onPress={()=>{navigation.navigate('EventConfirmScreen')}}
            />
        </RBSheet>
    </SafeAreaView>
  );
};

export default EventScreen;

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
    eventHead: {
        fontSize: FontSizes.Tertiary_Medium,
        fontFamily: 'Bold',
        color: Colors.Black,
    },
    eventDateTime: {
        fontSize: FontSizes.Primary_Large,
        fontFamily: 'Book',
        color: Colors.Black,
    },
    abouthead: {
        fontSize: FontSizes.Secondary_Medium,
        fontFamily: 'Bold',
        color: Colors.Black,
    },
    readless: {
        fontSize: FontSizes.Primary_Large,
        fontFamily: 'Medium',
        color: Colors.PrimaryColor,
    },
    imageView: {
        borderWidth: 1,
        borderColor: Colors.White,
        borderRadius: 20,
    },
    hostStyle: {
        fontSize: FontSizes.Primary_Large,
        fontFamily: 'Medium',
        color: Colors.Black,
    },
    hostByStyle: {
        fontSize: FontSizes.Primary_Small - 2,
        fontFamily: 'Book',
        color: Colors.Black,
    },
    container: {
    //   flex: 1,  
        marginHorizontal: hp('2.5%'),
        borderRadius: 7,
        overflow: 'hidden',
        marginTop: hp('2%'),
    },
    map: {
      width: '100%',
      height: 160,
      borderRadius: 7,
      overflow: 'hidden'
    },
    inviteheadLabel: {
        fontSize: FontSizes.Primary_Large,
        fontFamily: 'Medium',
        color: Colors.Black,
    },
    freeLabel: {
      fontSize: FontSizes.Primary_Medium,
      fontFamily: 'Medium',
      color: Colors.Black,
    },
    freeShareView: {
        paddingHorizontal: wp('5%'), 
        paddingVertical: hp('1%'),
        backgroundColor: Colors.White,
        elevation: 10,
    },
    counterbuttonStyle: {
      borderWidth: 1,
      borderRadius: 20,
      width: 40, height: 40,
      backgroundColor: Colors.White,
      borderColor: Colors.PrimaryColor,
      justifyContent: 'center'
    }
});