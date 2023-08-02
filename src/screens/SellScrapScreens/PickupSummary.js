import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextModal from '../../components/TextModal';
import { Styles } from '../../styles/stylesheet';
import { Colors } from '../../styles/theme';
import { Button, Icon } from '@rneui/themed';
import { FontSizes } from '../../styles/fonts';
import { TextInput } from 'react-native-paper';

const SUMMARYDATA = [
    {
        id: 1,
        head: 'Order number',
        data: '16689EVD63'
    },
    {
        id: 2,
        head: 'Scrap category',
        data: 'Newspaper'
    },
    {
        id: 3,
        head: 'Address - Home',
        data: 'Pollachi Main Rd, Coimbatore, India'
    },
    {
        id: 4,
        head: 'Pickup',
        data: 'Tomorrow,17 July 2023'
    },
];

const PickupSummary = ({navigation}) => {
    const [text, setText] = React.useState("");
    
  return (
    <SafeAreaView style={Styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.PrimaryColor}/>
    <View style={{ backgroundColor: Colors.PrimaryColor, paddingBottom: 10 }}>
      <View style={Styles.headerView}>
        <Icon onPress={()=>{navigation.goBack()}} name="chevron-left" type="material-community" size={30} color={Colors.White} />
        <TextModal style={Styles.headerLabelStyle}>Sell Scrap</TextModal>
        <Icon name="chevron-right" type="material-community" size={30} color={'transparent'} />
      </View>
      <View style={Styles.progressWrapper}>
        <View style={Styles.progressChipCompleted}></View>
      </View>
    </View>
    <View style={{ marginTop: hp('3%') }}>
        <View style={{ alignItems: 'center', marginBottom: hp('2%') }}>
            <TextModal style={styles.headLabel}>Pickup summary</TextModal>
        </View>
        {SUMMARYDATA.map((item, index) => (
            <View style={{ marginHorizontal: wp('6%'), marginTop: hp('5%') }} key={index}>
                <TextModal style={styles.optionHead}>{item?.head}</TextModal>
                <View style={{height: hp('1%')}}/>
                <TextModal style={styles.optionSubLabel}>{item?.data}</TextModal>
            </View>
        ))}
    </View>
    <View style={{ marginHorizontal: wp('6%'), marginTop: hp('5%') }}>
        <TextModal style={styles.optionHead}>Any instructions</TextModal>
        <View style={{height: hp('1%')}}/>
        <TextInput
          mode='outlined'
          placeholder=" "
          value={text}
          onChangeText={text => setText(text)}
          outlineStyle={{
            borderColor: Colors.Black,
            fontFamily: 'Medium',
          }}
          activeOutlineColor='#B3B3B3'
          style={{
            backgroundColor: 'white',
            fontFamily: 'Medium',
          }}
        />
    </View>
            <Button
            disabledStyle={{ backgroundColor: '#B3B3B3' }}
            disabledTitleStyle={{ color: Colors.White }}
            onPress={()=>{navigation.navigate('PickupSuccessScreen')}}
            title={'Rise pickup request'}
            titleStyle={styles.buttonTitle}
            buttonStyle={[styles.button, { alignSelf: 'center', marginTop: hp('6%'), }]}
            />
    </SafeAreaView>
  );
};

export default PickupSummary;

const styles = StyleSheet.create({
    headLabel: {
      fontFamily: "Medium",
      fontSize: FontSizes.Tertiary_Small,
      color: "#1C1B1F",
      textAlign: "center",
      lineHeight: 30,
    },
    optionHead: {
      fontFamily: "Medium",
      color: "#B3B3B3",
      fontSize: FontSizes.Primary_Medium,
    },
    optionSubLabel: {
      fontSize: FontSizes.Primary_Large,
      fontFamily: 'Book',
      color: '#1F1F43',
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
      paddingVertical: hp('2%'),
      marginBottom: hp('3%')
    },
});