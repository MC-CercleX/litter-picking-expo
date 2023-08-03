import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import TextModal from '../../components/TextModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Styles } from '../../styles/stylesheet';
import { Button, Icon, Image } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../styles/theme';
import { FontSizes } from '../../styles/fonts';
import { Images } from '../../constants/images';
import { ImageBackground } from 'react-native';
import FlatListComp from '../../components/FlatlistComponent';

const TYPES = [
    {
        id: 1,
        type: 'Paper',
        materials: 'Newspapers, cartons, books',
        image: Images.paperArt,
    },
    {
        id: 2,
        type: 'Plastic',
        materials: 'Oil container, Bottles',
        image: Images.paperArt,
    },
    {
        id: 3,
        type: 'Metal',
        materials: 'Utensils, coolers, drums etc.',
        image: Images.paperArt,
    },
    {
        id: 4,
        type: 'Ewaste',
        materials: 'Computers, keyboards etc.',
        image: Images.paperArt,
    },
    {
        id: 5,
        type: 'Battery',
        materials: 'Car, UPS, bike etc.',
        image: Images.paperArt,
    },
    {
        id: 6,
        type: 'Other Items',
        materials: 'Beer bottles, machines etc.',
        image: Images.paperArt,
    },
];

const ScrapSelection = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(null);

  return (
    <SafeAreaView style={Styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.PrimaryColor}/>
    <View style={{ backgroundColor: Colors.PrimaryColor, paddingBottom: 10 }}>
      <View style={styles.headerView}>
        <Icon onPress={()=>{navigation.goBack()}} name="chevron-left" type="material-community" size={30} color={Colors.White} />
        <TextModal style={styles.headerLabelStyle}>Sell Scrap</TextModal>
        <Icon name="chevron-right" type="material-community" size={30} color={'transparent'} />
      </View>
      <View style={Styles.progressWrapper}>
        <View style={Styles.progressChipActive}></View>
        <View style={Styles.progressChip}></View>
        <View style={Styles.progressChip}></View>
      </View>
    </View>
    <ScrollView style={{ marginTop: hp('3%') }}>
        <View>
            <TextModal style={styles.headLabel}>Let's hear about{'\n'}What would you like to sell?</TextModal>
        </View>
        <View style={{ alignSelf: 'center', flex: 1 }}>
            <FlatListComp
            data={TYPES}
            numColumns={2}
            renderItem={({ item, index })=>(
                <Pressable onPress={()=>{setIsChecked(item?.id)}} style={{ marginTop: 20, marginHorizontal: wp('3%') }}>
                    <View style={[styles.optionsCard, { borderColor: isChecked === item?.id ? Colors.DarkMintGreen : '#B3B3B3', }]}>
                        <Image source={item?.image} style={{ width: 60, height: 60 }}/>
                        <View style={{ height: 6 }}/>
                        <TextModal style={styles.typeLabelStyle}>{item?.type}</TextModal>
                    </View>
                    <View style={{ position: 'absolute', alignSelf: 'flex-end', top: 6, right: 6 }}>
                        <Image source={isChecked === item?.id ? Images.checked : Images.unchecked} style={{ width: 16, height: 16 }}/>
                    </View>
                    <View style={{ height: 6 }}/>
                    <TextModal style={styles.materialStyle}>{item?.materials}</TextModal>
                </Pressable>
            )}
            keyExtractor={(item) => item?.id}
            />
        </View>
        <Button 
          disabled={!isChecked}
          disabledStyle={{ backgroundColor: '#B3B3B3' }}
          disabledTitleStyle={{ color: Colors.White }}
          onPress={()=>{navigation.navigate('ScrapUploadScreen')}}
          title={'Next'}
          titleStyle={styles.buttonTitle}
          buttonStyle={[styles.button, { alignSelf: 'center' }]}
        />
    </ScrollView>
    </SafeAreaView>
  );
};

export default ScrapSelection;

const styles = StyleSheet.create({
    headerView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: wp("3%"),
      marginBottom: 15,
      marginTop: 15,
    },
    headerLabelStyle: {
      fontFamily: "Medium",
      fontSize: FontSizes.Secondary_Medium,
      color: Colors.White,
    },
    headLabel: {
      fontFamily: "Medium",
      fontSize: FontSizes.Tertiary_Small,
      color: '#1C1B1F',
      textAlign: "center",
      lineHeight: 29.5
    },
    optionsCard: {
        borderWidth: 2,
        paddingVertical: 9,
        alignItems: 'center',
        width: 110,
        borderRadius: 6,
    },
    typeLabelStyle: {
      fontFamily: "Book",
      fontSize: FontSizes.Primary_Large,
      color: '#1F1F43',
    },
    materialStyle: {
      fontFamily: "Book",
      fontSize: FontSizes.Primary_Medium,
      color: '#B3B3B3',
      width: 100,
      lineHeight: 18
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
      marginTop: hp('6%'),
      marginBottom: hp('3%')
    },
});