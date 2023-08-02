import { Camera, CameraType } from 'expo-camera';
import React, { useState, useRef } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RBSheet from "react-native-raw-bottom-sheet";
import LottieView from "lottie-react-native";
import { Images } from '../constants/images';
import { Button, Icon, Image } from '@rneui/themed';
import { Colors } from '../styles/theme';
import { Styles } from '../styles/stylesheet';
import TextModal from '../components/TextModal';
import { FontSizes } from '../styles/fonts';
import { StatusBar } from 'expo-status-bar';

const CameraScreen = ({ navigation }) => {
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();
  const cameraRef = useRef(null);
  const [text, setText] = React.useState("");
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isFlashOn, setIsFlashOn] = useState(Camera.Constants.FlashMode.off);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri); // Use this URI to display or save the image
    }
  };

  const toggleFlash = () => {
    setIsFlashOn(
      isFlashOn === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.torch
        : Camera.Constants.FlashMode.off
    );
  };

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={'transparent'}/>
      <Camera style={styles.camera} flashMode={isFlashOn} type={type}>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View> */}
        <View
        style={{
        position: 'absolute',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(38, 50, 56, 0.80)'
        }}
        >
        <View style={{ margin: 4 }}>
            <Icon onPress={()=>{navigation.goBack()}} name='close' type='material' size={24} color={Colors.White} />
        </View>
        <View style={{ margin: 4 }}>
            <Icon onPress={()=>{toggleFlash();}} name='flash' type='ionicon' size={24} color={isFlashOn === Camera.Constants.FlashMode.off ? Colors.White : '#FFC700'} />
        </View>
      </View>
        <View
        style={{
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
        }}
      >
      <Pressable style={styles.selectFromGalleryView}>
          <Icon name='add-photo-alternate' type='material' size={24} color={Colors.White} />
      </Pressable>
        <ImageBackground source={Images.captureButtonBorder} imageStyle={{ width: 84, height: 84 }} style={{ marginRight: 14, bottom: 5 }}>
          <View
          style={{
          alignSelf: 'center',
          flex: 1,
          alignItems: 'center'
          }}
          >
              <Pressable
              onPress={()=>{
                // takePicture();
                refRBSheet.current.open();
              }}
              style={{
              width: 70,
              height: 70,
              // bottom: 0,
              left: 7,
              top: 7,
              borderRadius: 50,
              backgroundColor: '#fff',
              justifyContent: 'center'
              }}
              >
                <Icon name='photo-camera' type='material' size={30} color="#A33BFD" />
              </Pressable>
          </View>
        </ImageBackground>
            <Pressable onPress={()=>{toggleCameraType();}} style={styles.selectFromGalleryView}>
                <Icon name='autorenew' type='material' size={24} color={Colors.White} />
            </Pressable>
      </View>
      </Camera>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "transparent"
          },
          container: {
            height: 600,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          },
        }}
      >
      <View style={[Styles.flexBetween, { marginHorizontal: wp('6%'), marginVertical: hp('1%') }]}>
        <Icon onPress={() => {refRBSheet.current.close();}} name="arrow-back-ios" type="material" size={24} color={"black"} />
        <TextModal style={styles.sheetHead}>Let’s Begin 💪</TextModal>
        <Icon onPress={() => {refRBSheet.current.close();}} name="close" type="material" size={24} color={"black"} />
      </View>
      <View style={styles.capturedImage}>
        <Image source={Images.trash_2} style={{ width: 291, height: 167, borderRadius: 7, }}/>
      </View>
      <View style={{ marginHorizontal: wp('13%'), marginVertical: hp('3%') }}>
        <TextInput
          mode='outlined'
          label="Add description"
          placeholder=" "
          value={text}
          onChangeText={text => setText(text)}
          outlineStyle={{
            borderColor: '#B3B3B3',
            fontFamily: 'Medium',
          }}
          activeOutlineColor='#B3B3B3'
          style={{
            backgroundColor: 'white',
            fontFamily: 'Medium',
          }}
        />
      </View>
      <View style={styles.mainContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="my-location" type="material" size={20} color={Colors.PrimaryColor} />
          <View style={{left: wp('2%')}}>
              <TextModal style={styles.text1}>Use your current location</TextModal>
              <TextModal style={styles.text2}>Pollachi Main Rd, Coimbatore, India</TextModal>
          </View>
          </View>
          <Icon name="chevron-right" type="material" size={24} color={Colors.Black} />
      </View>
      <View style={{ flex: 1 }}/>
      <View>
        <Button 
          onPress={()=>{refRBSheet.current.close(); refRBSheet2.current.open()}}
          title={'Finish'}
          titleStyle={styles.finishButtonTitle}
          buttonStyle={styles.finishButton}
        />
      </View>
      </RBSheet>
      <RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(38, 50, 56, 0.70)",
          },
          draggableIcon: {
            backgroundColor: "transparent"
          },
          container: {
            height: 600,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          },
        }}
      >
      <ImageBackground style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <LottieView loop autoPlay source={Images.litterPostedGif} style={{ width: 393, height: 393 }}/>
        <TextModal style={styles.postedTextStyle}>Wow!{'\n'}Your litter is posted</TextModal>
      </ImageBackground>
      <View>
        <Button 
          onPress={()=>{}}
          title={'Share with friends'}
          titleStyle={styles.finishButtonTitle}
          buttonStyle={[styles.finishButton, { width: wp('60%'), alignSelf: 'center' }]}
          icon={()=>(
            <Icon style={{ marginRight: 15 }} name="share" type="material" size={20} color={Colors.White} />
          )}
          iconPosition='left'
        />
      </View>
      <View style={{ marginBottom: hp('6%') }}>
        <TextModal onPress={()=>{navigation.navigate('Map')}} style={styles.doneStyle}>Done</TextModal>
      </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  selectFromGalleryView: {
    backgroundColor: 'rgba(38, 50, 56, 0.80)',
    padding: 5,
    borderRadius: 12,
  },
  sheetHead: {
    fontSize: FontSizes.Tertiary_Small,
    fontFamily: 'Medium',
    color: Colors.Black,
  },
  capturedImage: {
    alignItems: 'center',
    marginTop: hp('7%')
  },
  mainContainer: {
      marginHorizontal: wp('13%'),
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 7,
      justifyContent: 'space-between',
      paddingHorizontal: wp('3%'),
      paddingVertical: hp('1.5%'),
      backgroundColor: 'white',
      marginVertical: hp('1%'),
      borderWidth: 1,
      borderColor: '#F0EFF4',
  },
  text1: {fontFamily: 'Medium', color: Colors.PrimaryColor, fontSize: FontSizes.Primary_Large, marginBottom: hp('0.5%')},
  text2: {fontFamily: 'Book', color: Colors.Black, fontSize: FontSizes.Primary_Medium - 1},
  finishButtonTitle: {
    fontSize: FontSizes.Secondary_Small,
    fontFamily: 'Medium',
    color: Colors.White,
  },
  finishButton: {
    backgroundColor: Colors.PrimaryColor,
    marginHorizontal: wp('13%'),
    marginBottom: hp('2%'),
    borderRadius: 20,
  },
  postedTextStyle: {
    fontSize: FontSizes.Tertiary_Large + 4,
    fontFamily: 'Bold',
    color: Colors.Black,
    textAlign: 'center',
    position: 'absolute'
  },
  doneStyle: {
    fontSize: FontSizes.Secondary_Small,
    fontFamily: 'Medium',
    color: '#B3B3B3',
    textAlign: 'center',
  },
});

export default CameraScreen;