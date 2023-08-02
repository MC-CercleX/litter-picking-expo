import React from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Icon, Image } from '@rneui/themed';
import TextModal from '../../components/TextModal';
import { Styles } from '../../styles/stylesheet';
import { Images } from '../../constants/images';
import { FontSizes } from '../../styles/fonts';
import { Colors } from '../../styles/theme';
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

const MyGroupTab = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
            <Image source={Images.mygroupjoinimg} style={{ width: 327, height: 322, borderRadius: 6 }} />
            <TextModal style={styles.description}>Join a Group and challenge{'\n'}with your friends get new rewards</TextModal>
            <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}} 
            style={styles.inviteButton} 
            colors={['rgba(249, 159, 27, 1)', 'rgba(255, 212, 0, 1)']}
            >
                <TextModal onPress={()=>{navigation.navigate('NewGroupScreen')}} style={styles.inviteButtonTitle}>JOIN NEW GROUP!</TextModal>
            </LinearGradient>
        </View>
      <View style={styles.peopleView}>
      <View style={[styles.joinGrpView, Styles.flexBetween]}>
        <View style={Styles.commonAlign}>
          <Image source={Images.greenCity} style={{ width: 34, height: 34 }} />
          <View style={{ width: 12 }} />
          <TextModal style={styles.groupName}>Rathinam CS batch 23</TextModal>
        </View>
        <Button
        disabledStyle={{ backgroundColor: '#B3B3B3' }}
        disabledTitleStyle={{ color: Colors.White }}
        onPress={()=>{}}
        title={'Leave'}
        buttonStyle={styles.joinButton}
        titleStyle={[styles.searchViewHead, { fontSize: FontSizes.Primary_Small, }]}
        />
      </View>
        <Button
        disabledStyle={{ backgroundColor: '#B3B3B3' }}
        disabledTitleStyle={{ color: Colors.White }}
        onPress={()=>{}}
        title={'Invite to group'}
        buttonStyle={{
          backgroundColor: '#27AE60',
          borderRadius: 6,
          marginTop: hp('2.5%'),
          paddingVertical: hp('1.5%')
        }}
        titleStyle={{
          fontFamily: 'Bold',
          fontSize: FontSizes.Primary_Large,
          color: Colors.White,
          marginLeft: 80,
          marginRight: 100
        }}
        icon={()=>(
          <Icon type='material' name="person-add-alt-1" size={24} color={Colors.White} style={{  }} />
        )}
        iconPosition='left'
        />
        <FlatListComp
        flatlistStyle={{ marginTop: hp('2.5%'), }}
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
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyGroupTab;

const styles = StyleSheet.create({
    description: {
      fontSize: FontSizes.Primary_Large + 1,
      fontFamily: 'Bold',
      color: Colors.White,
      position: 'absolute',
      textAlign: 'center',
      lineHeight: 22,
      marginTop: hp('3%')
    },
    inviteButtonTitle: {
      fontFamily: 'Bold',
      fontSize: FontSizes.Primary_Small + 1,
      color: Colors.White,
    },
    inviteButton: {
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 4,
        position: 'absolute',
        marginTop: hp('10.5%'),
    },
    joinGrpView: {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: '#F4E7FF',
      elevation: 10
    },
    joinButton: {
      backgroundColor: '#F74345',
      borderRadius: 2,
      // width: wp('90%'),
      paddingVertical: 5,
      paddingHorizontal: 12,
    },
    groupName: {
      fontSize: FontSizes.Primary_Medium,
      fontFamily: 'Medium',
      color: Colors.Black,
    },
    peopleView: {
      backgroundColor: '#F5F5F5',
      marginHorizontal: wp('5%'),
      marginTop: hp('1.75%'),
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    },
    leaderboardView: {
      marginRight: wp('10%'),
      marginLeft: wp('5%'),
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
      backgroundColor: Colors.White,
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
        backgroundColor: Colors.White,
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
});