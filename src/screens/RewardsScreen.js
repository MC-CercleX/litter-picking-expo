import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TextModal from '../components/TextModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Styles } from '../styles/stylesheet';
import { Colors } from '../styles/theme';
import { Icon, Image } from '@rneui/themed';
import { Images } from '../constants/images';
import { FontSizes } from '../styles/fonts';
import RewardStoreTab from './Tabs/RewardStoreTab';
import ChallengeBoardTab from './Tabs/ChallengeBoardTab';

const Tab = createMaterialTopTabNavigator();

const RewardsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.PrimaryColor}/>
      <View style={{ backgroundColor: Colors.PrimaryColor, paddingBottom: 10 }}>
        <View style={styles.headerView}>
          <Icon onPress={()=>{navigation.goBack()}} name="arrow-left" type="material-community" size={22} color={Colors.White} />
          <TextModal style={styles.headerLabelStyle}>Rewards</TextModal>
          <Icon name="arrow-right" type="material-community" size={22} color={'transparent'} />
        </View>
        <View style={[Styles.flexBetween, { marginHorizontal: wp('3%'), marginBottom: 2.5, marginTop: 4 }]}>
          <Image source={Images.leftLinearLine} style={styles.iconStyle}/>
          <TextModal style={[styles.headerLabelStyle, { fontSize: FontSizes.Primary_Medium }]}>CERC Coins Earned</TextModal>
          <Image source={Images.rightLinearLine} style={styles.iconStyle}/>
        </View>
        <View style={[Styles.commonAlign, { alignSelf: 'center' }]}>
          <TextModal style={styles.coinsLabel}>30</TextModal>
          <View style={{ width: 4 }}/>
          <Image source={Images.coinIcon} style={{ width: 22, height: 22 }}/>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabbarstyle,
          tabBarIndicatorStyle: styles.tabbarindicator,
          tabBarLabelStyle: styles.tabbarLabel,
          tabBarActiveTintColor: Colors.White,
          tabBarInactiveTintColor: Colors.Black,
          tabBarPressColor: Colors.White,
          swipeEnabled: false,
        }}
      >
        <Tab.Screen
        options={{
          tabBarLabel: 'Reward Store',
        }}
        name="RewardStore" component={RewardStoreTab} />
        <Tab.Screen
        options={{
          tabBarLabel: 'Challenge Board',
        }}
        name="ChallengeBoard" component={ChallengeBoardTab} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default RewardsScreen;

const styles = StyleSheet.create({
  headerLabelStyle: {
    fontFamily: 'Medium',
    fontSize: FontSizes.Secondary_Medium,
    color: Colors.White,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp("3%"),
    marginVertical: 10,
  },
  iconStyle: {
    width: 110,
    height: 4,
  },
  coinsLabel: {
    fontFamily: 'Medium',
    fontSize: FontSizes.Tertiary_Large,
    color: Colors.SunYellow,
  },
  tabbarstyle: {
    marginHorizontal: wp("7%"),
    borderRadius: 27.5,
    marginTop: 25,
    elevation: 0,
    borderWidth: 1,
    borderColor: '#D9D9D9'
  },
  tabbarindicator: {
    backgroundColor: Colors.PrimaryColor,
    height: 39,
    marginBottom: 4,
    borderRadius: 23.5,
    width: '46.5%',
    marginLeft: 5
  },
  tabbarLabel: {
    fontFamily: 'Bold',
    fontSize: FontSizes.Primary_Small + 1,
    textTransform: 'none',
  },
});