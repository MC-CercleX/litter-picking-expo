import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FAB } from 'react-native-paper';
import TextModal from '../../components/TextModal';
import { Styles } from '../../styles/stylesheet';
import { Colors } from '../../styles/theme';
import { Images } from '../../constants/images';
import { Icon, Image } from '@rneui/themed';
import { FontSizes } from '../../styles/fonts';
import FlatListComp from '../../components/FlatlistComponent';

const DATA = [
    {
        id: 1,
        profileImage: Images.profileAvatar,
        postCount: 20,
        userName: 'Vishnu Vardhaan',
        points: 5075,
    },
    {
        id: 2,
        profileImage: Images.profileAvatar,
        postCount: 9,
        userName: 'Divya Shetty',
        points: 4985,
    },
    {
        id: 3,
        profileImage: Images.profileAvatar,
        postCount: 8,
        userName: 'Ashish Arora',
        points: 4642,
    },
    {
        id: 4,
        profileImage: Images.profileAvatar,
        postCount: 8,
        userName: 'Yogesh Patgunan',
        points: 3874,
    },
    {
        id: 5,
        profileImage: Images.profileAvatar,
        postCount: 8,
        userName: 'Naveen Prasad',
        points: 3567,
    },
    {
        id: 6,
        profileImage: Images.profileAvatar,
        postCount: 8,
        userName: 'Fade',
        points: 3478,
    },
    {
        id: 7,
        profileImage: Images.profileAvatar,
        postCount: 8,
        userName: 'Vidhya M',
        points: 3387,
    },
];

const LeaderboardTab = () => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
        <FlatListComp
        data={DATA}
        renderItem={({ item, index }) => (
            <View style={styles.leaderboardView}>
                {item?.id <= 3 ? <View style={styles.serialTrophyView}>
                    <Image source={item?.id === 1 ? Images.lb1st : item?.id === 2 ? Images.lb2nd : item?.id === 3 ? Images.lb3rd : null} style={{ width: 24, height: 24 }}/>
                </View> :
                <View style={styles.serialView}>
                    <View style={{ width: 22, height: 22, borderRadius: 20, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}/>
                    <TextModal style={styles.serialNumView}>{item?.id}</TextModal>
                </View>}
                <View style={[styles.userView, Styles.commonAlign]}>
                    <View style={{ marginRight: wp('2.5%') }}>
                    <Image source={item?.profileImage} style={{ width: 34, height: 34, borderRadius: 20 }}/>
                    <View style={{ position: 'absolute', left: 20, alignItems: 'center' }}>
                        <Image source={Images.lbcountbadge} style={{ width: 16, height: 16 }}/>
                        <TextModal style={styles.badgeNumStyle}>{item?.postCount}</TextModal>
                    </View>
                    </View>
                    <TextModal style={styles.userNameStyle}>{item?.userName}</TextModal>
                </View>
                <View style={[styles.pointsView, Styles.commonAlign]}>
                    <Image source={Images.coinIcon} style={{ width: 16, height: 16 }}/>
                    <View style={{ width: wp('2%') }} />
                    <TextModal style={styles.userNameStyle}>{item?.points}</TextModal>
                </View>
            </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (
            <View style={{ height: hp('2.25%') }}/>
        )}
        />
        <FAB
          style={styles.fab}
          onPress={() => {}}
          label='Map'
          customSize={40}
          icon={()=>(
            <Icon type='ionicon' name="ios-map" size={20} color="#8A8A8E"/>
          )}
        />
    </SafeAreaView>
  );
};

export default LeaderboardTab;

const styles = StyleSheet.create({
    leaderboardView: {
        marginHorizontal: wp('5%'),
        alignItems: 'center',
        flexDirection: 'row',
    },
    serialTrophyView: {
        backgroundColor: Colors.White,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        elevation: 4,
        paddingTop: 12.31,
        paddingLeft: 12.34,
        paddingBottom: 10.69,
        paddingRight: 11.66,
    },
    serialView: {
        backgroundColor: Colors.White,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        elevation: 4,
        paddingTop: 13.18,
        paddingLeft: 13.31,
        paddingBottom: 11.82,
        paddingRight: 12.69,
    },
    userView: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 0.5,
        borderTopColor: '#D9D9D9',
        borderBottomColor: '#D9D9D9',
        borderRightColor: '#D9D9D9',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        width: '61.5%'
    },
    pointsView: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 0.5,
        borderTopColor: '#D9D9D9',
        borderBottomColor: '#D9D9D9',
        borderRightColor: '#D9D9D9',
        borderLeftColor: '#D9D9D9',
        paddingTop: 15,
        paddingBottom: 14,
        paddingHorizontal: 16,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
    },
    userNameStyle: {
      fontSize: FontSizes.Primary_Medium,
      fontFamily: 'Book',
      color: Colors.Black,
    },
    badgeNumStyle: {
      fontSize: FontSizes.Primary_Small - 3,
      fontFamily: 'Book',
      color: Colors.White,
      bottom: 13.75
    },
    serialNumView: { 
        position: 'absolute', 
        alignSelf: 'center', 
        top: 17.5,  
        fontSize: FontSizes.Primary_Small - 2,
        fontFamily: 'Book',
        color: 'rgba(0, 0, 0, 0.65)',
    },
    fab: {
      position: 'absolute',
      margin: 16,
      bottom: 0,
      borderRadius: 8,
      alignSelf: 'center',
      backgroundColor: Colors.White,
      width: '22%'
    },
});