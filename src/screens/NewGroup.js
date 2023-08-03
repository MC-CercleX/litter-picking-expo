import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Styles } from '../styles/stylesheet';
import TextModal from '../components/TextModal';
import { Colors } from '../styles/theme';
import { Button, Icon, Image } from '@rneui/themed';
import { FontSizes } from '../styles/fonts';
import { Images } from '../constants/images';
import FlatListComp from '../components/FlatlistComponent';

const GROUPS = [
  {
    id: 1,
    group: 'Rathinam IT batch 23',
    image: Images.greenCity,
  },
  {
    id: 2,
    group: 'Rathinam CS batch 23',
    image: Images.greenCity,
  },
  {
    id: 3,
    group: 'Kovai warriors',
    image: Images.greenCity,
  },
  {
    id: 4,
    group: 'Namma Green Kovai',
    image: Images.greenCity,
  },
  {
    id: 5,
    group: 'Rathinam ECE batch 23',
    image: Images.greenCity,
  },
  {
    id: 6,
    group: 'Rathinam EEE batch 23',
    image: Images.greenCity,
  },
  {
    id: 7,
    group: 'Rathinam Mech batch 23',
    image: Images.greenCity,
  },
  {
    id: 8,
    group: 'Rathinam Civil batch 23',
    image: Images.greenCity,
  },
];

const NewGroup = ({navigation}) => {
  return (
    <SafeAreaView style={[Styles.safeAreaView, { backgroundColor: '#F5F5F5' }]}>
    <StatusBar />
    <View style={styles.searchView}>
      <TextModal style={styles.searchViewHead}>Search or create a new group!</TextModal>
      <View style={{ height: hp('2.5%') }} />
      <View style={Styles.flexBetween}>
        <View 
        style={[styles.inputContainer, Styles.commonAlign]}>
        <Icon name="search" type="font-awesome" size={20} color='#B3B3B3' style={{ marginHorizontal: wp('3%') }} />
        <TextInput
        cursorColor={Colors.PrimaryColor}
        placeholder='Group name'
        placeholderTextColor='#B3B3B3'
        style={[styles.buttonTitle, { color: Colors.Black }]}
        />
        </View>
        <View style={{ width: 12 }} />
        <Button
        disabledStyle={{ backgroundColor: '#B3B3B3' }}
        disabledTitleStyle={{ color: Colors.White }}
        onPress={()=>{}}
        title={'Search'}
        titleStyle={styles.buttonTitle}
        buttonStyle={[styles.button, {  }]}
        />
      </View>
    </View>
    <FlatListComp 
    data={GROUPS}
    renderItem={({ item, index }) => (
      <View style={[styles.joinGrpView, Styles.flexBetween]}>
        <View style={Styles.commonAlign}>
          <Image source={item?.image} style={{ width: 34, height: 34 }} />
          <View style={{ width: 12 }} />
          <TextModal style={styles.groupName}>{item?.group}</TextModal>
        </View>
        <Button
        disabledStyle={{ backgroundColor: '#B3B3B3' }}
        disabledTitleStyle={{ color: Colors.White }}
        onPress={()=>{}}
        title={'Join'}
        buttonStyle={styles.joinButton}
        titleStyle={[styles.searchViewHead, { fontSize: FontSizes.Primary_Small, }]}
        />
      </View>
    )}
    keyExtractor={item => item.id}
    />
    <View style={styles.bottomView}>
        <Button
        disabledStyle={{ backgroundColor: '#B3B3B3' }}
        disabledTitleStyle={{ color: Colors.White }}
        onPress={()=>{navigation.navigate('CreateNewGroup')}}
        title={'Create new group'}
        buttonStyle={{
          backgroundColor: Colors.PrimaryColor,
          borderRadius: 6,
        }}
        titleStyle={{
          fontFamily: 'Bold',
          fontSize: FontSizes.Primary_Large,
          color: Colors.White,
        }}
        />
    </View>
    </SafeAreaView>
  );
};

export default NewGroup;

const styles = StyleSheet.create({
  searchView: {
    backgroundColor: Colors.PrimaryColor,
    // paddingHorizontal: 57.5,
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 10,
  },
  searchViewHead: {
    fontSize: FontSizes.Primary_Large,
    fontFamily: 'Medium',
    color: Colors.White,
  },
  buttonTitle: {
    fontSize: FontSizes.Primary_Medium,
    fontFamily: 'Book',
    color: Colors.White,
  },
  button: {
    backgroundColor: '#27AE60',
    borderRadius: 4,
    // width: wp('90%'),
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: '50%',
    backgroundColor: Colors.White,
    height: '100%',
    borderRadius: 4,
  },
  joinGrpView: {
    marginHorizontal: wp('5%'),
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.White,
    marginTop: hp('1.75%')
  },
  joinButton: {
    backgroundColor: '#27AE60',
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
  bottomView: { paddingHorizontal: wp('5%'), paddingVertical: 15, borderTopWidth: 1, borderTopColor: Colors.PrimaryColor },
});