import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextModal from '../../components/TextModal';
import { Styles } from '../../styles/stylesheet';
import { Colors } from '../../styles/theme';
import { Button, Icon, Image } from '@rneui/themed';
import { FontSizes } from '../../styles/fonts';
import { Images } from '../../constants/images';

const ScrapUploadScreen = ({ navigation }) => {
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
        <View style={Styles.progressChipActive}></View>
        <View style={Styles.progressChipActive}></View>
        <View style={Styles.progressChip}></View>
      </View>
    </View>
    <View style={{ marginTop: hp('3%') }}>
        <View style={{ alignItems: 'center' }}>
            <TextModal style={styles.headLabel}>Upload scrap items pictures</TextModal>
            <View style={{ height: hp('2%') }}/>
            <TextModal style={styles.subHeadLabel}>This will help us identify your scrap items{'\n'}better.</TextModal>
        </View>
        <View style={[Styles.flexBetween, { marginHorizontal: wp('6.5%'), marginTop: hp('3%') }]}>
            <Pressable onPress={()=>{}} style={styles.dashedView}>
                <Icon name="upload" type="feather" size={38} color={Colors.PrimaryColor} />
            </Pressable>
            <Pressable onPress={()=>{navigation.navigate('CameraScreen')}} style={styles.dashedView}>
                <Icon name="camera-plus-outline" type="material-community" size={38} color={Colors.PrimaryColor} style={{ transform: [{ scaleX: -1 }] }}/>
            </Pressable>
        </View>
        <View style={styles.uploadedImageView}>
            <Image source={Images.trash_3} style={{ width: 342, height: 130, borderRadius: 6 }}/>
            <Pressable onPress={()=>{}} style={styles.deleteIconView}>
                <Icon name="trash-can-outline" type="material-community" size={15} color={Colors.White} />
            </Pressable>
        </View>
        <ImageBackground  source={Images.uploadscreenframe} imageStyle={{ width: '100%', height: 292 }} style={{  }}>
        <Button 
          onPress={()=>{navigation.navigate('LocationScreen')}}
          title={'Next'}
          titleStyle={styles.buttonTitle}
          buttonStyle={[styles.button, { alignSelf: 'center' }]}
        />
        </ImageBackground>
    </View>
    </SafeAreaView>
  );
};

export default ScrapUploadScreen;

const styles = StyleSheet.create({
    headLabel: {
      fontFamily: "Medium",
      fontSize: FontSizes.Tertiary_Small,
      color: '#1C1B1F',
      textAlign: "center",
    },
    subHeadLabel: {
      fontFamily: "Book",
      fontSize: FontSizes.Primary_Large,
      color: '#B3B3B3',
      textAlign: "left",
      lineHeight: 20
    },
    dashedView: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: Colors.PrimaryColor,
        borderRadius: 6,
        paddingHorizontal: 59,
        paddingVertical: 38,
        backgroundColor: '#F8F0FF'
    },
    uploadedImageView: {
        // marginHorizontal: wp('6.5%'),
        marginTop: hp('2%'),
        alignSelf: 'center',
        flexDirection: 'row-reverse'
    },
    deleteIconView: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: 24, height: 24,
        borderRadius: 25,
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 5,
        bottom: 5
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
      marginTop: hp('24.5%'),
      marginBottom: hp('3%')
    },
});