import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Styles } from '../styles/stylesheet';
import TextModal from '../components/TextModal';
import { Button, Icon, Image } from '@rneui/themed';
import { Colors } from '../styles/theme';
import { FontSizes } from '../styles/fonts';
import { Images } from '../constants/images';

const UploadResolved = ({navigation}) => {
    const [upload, setUpload] = useState(false);

  return (
    <SafeAreaView style={Styles.safeAreaView}>
    {/* <StatusBar backgroundColor={Colors.PrimaryColor}/> */}
        <View style={[Styles.flexBetween, styles.iconsView]}>
            <Icon name="angle-left" type="font-awesome" size={30} color={Colors.Black} style={{  }} onPress={()=>{navigation.goBack()}} />
            <TextModal style={styles.topViewLabel}>Resolve</TextModal>
            <Icon name="angle-right" type="font-awesome" size={30} color={'transparent'} style={{  }} />
        </View>
        <View style={{ flex: 1 }}>
        <View style={[Styles.justify, { marginTop: hp('10%') }]}>
            <TextModal style={styles.headLabel}>Upload resolved pictures</TextModal>
            <View style={{ height: hp('1.5%') }}/>
            <TextModal style={styles.subLabel}>This will help people see the impact{'\n'}you have made</TextModal>
        </View>
        <View style={[Styles.flexBetween, { marginHorizontal: wp('6.5%'), marginTop: hp('6%') }]}>
            <Pressable onPress={()=>{}} style={{ }}>
                <Image source={Images.trash_3} style={{ width: 162, height: 200, borderRadius: 6 }}/>
                <View style={styles.imageStatusTag}>
                    <TextModal style={styles.tagText}>Before</TextModal>
                </View>
            </Pressable>
            <Pressable onPress={()=>{navigation.navigate('CameraScreen')}} style={styles.dashedView}>
                <Icon name="camera-plus-outline" type="material-community" size={44} color={Colors.PrimaryColor} style={{ transform: [{ scaleX: -1 }] }}/>
            </Pressable>
            {/* <View style={{ }}>
                <Image onPress={()=>{}} source={Images.trash_3} style={{ width: 162, height: 200, borderRadius: 6 }}/>
                <View style={styles.imageStatusTag}>
                    <TextModal style={styles.tagText}>After</TextModal>
                </View>
                <Pressable onPress={()=>{}} style={styles.deleteIconView}>
                    <Icon name="trash-can" type="material-community" size={17} color={'grey'} />
                </Pressable>
            </View> */}
        </View>
        </View>
        <Button
          disabledStyle={{ backgroundColor: '#B3B3B3' }}
          disabledTitleStyle={{ color: Colors.White }} 
          onPress={()=>{navigation.navigate('ResolveSuccessScreen')}}
          title={'Submit'}
          titleStyle={styles.buttonTitle}
          buttonStyle={[styles.button, { alignSelf: 'center' }]}
        />
    </SafeAreaView>
  );
};

export default UploadResolved;

const styles = StyleSheet.create({
    iconsView: {
        marginHorizontal: wp('5%'),
        paddingVertical: hp('1.5%')
    },
    topViewLabel: {
      fontSize: FontSizes.Secondary_Medium,
      fontFamily: 'Book',
      color: Colors.Black,
    },
    headLabel: {
      fontSize: FontSizes.Secondary_Large,
      fontFamily: 'Medium',
      color: Colors.Black,
    },
    subLabel: {
      fontSize: FontSizes.Primary_Large,
      fontFamily: 'Book',
      color: '#B3B3B3',
      textAlign: 'center'
    },
    dashedView: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: Colors.PrimaryColor,
        borderRadius: 6,
        width: 162, height: 200,
        backgroundColor: '#F8F0FF',
        justifyContent: 'center'
    },
    imageStatusTag: {
        backgroundColor: Colors.PrimaryColor,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        paddingVertical: 6,
        position: 'absolute',
        width: '100%',
        alignItems: 'center'
    },
    tagText: {
      fontSize: FontSizes.Primary_Medium,
      fontFamily: 'Medium',
      color: Colors.White,
    },
    deleteIconView: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        width: 24, height: 24,
        borderRadius: 25,
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        bottom: 10,
        right: 10
    },
    buttonTitle: {
      fontSize: FontSizes.Secondary_Small,
      fontFamily: 'Medium',
      color: Colors.White,
    },
    button: {
      backgroundColor: Colors.PrimaryColor,
      marginBottom: hp('6%'),
      borderRadius: 7,
      width: wp('90%'),
      paddingVertical: hp('2%')
    },
});