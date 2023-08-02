import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TextInput } from 'react-native-paper';
import TextModal from '../components/TextModal';
import { Styles } from '../styles/stylesheet';
import { Button, Icon, Image } from '@rneui/themed';
import { Colors } from '../styles/theme';
import { FontSizes } from '../styles/fonts';
import TextInputComp from '../components/TextInput';
import { Images } from '../constants/images';

const CreateNewGroup = ({navigation}) => {
    const [showType, setShowType] = useState(false);
    const [type, setType] = useState('');
    const [text, setText] = useState(
        {
            groupName: '',
            description: ''
        }
    );

    const handleChangeText = (key, value) => {
      setText(prevState => ({
        ...prevState,
        [key]: value
      }));
    };

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={styles.headerView}>
        <Icon onPress={()=>{navigation.goBack()}} name="arrow-left" type="material-community" size={24} color={Colors.White} />
        <TextModal style={styles.headerLabelStyle}>Create A New Group</TextModal>
        <Icon name="arrow-left" type="material-community" size={24} color={'transparent'} />
      </View>
      <Pressable onPress={()=>{}} style={styles.uploadImageContainer}>
        <Icon name="camera-plus-outline" type="material-community" size={30} color={Colors.PrimaryColor} style={{ transform: [{ scaleX: -1 }] }}/>
      </Pressable>
      {/* <TextInputComp 
      cursorColor={Colors.PrimaryColor}
      style={[styles.inputContainerStyle, styles.inputText]}
      placeholder={'Group Name*'}
      placeholderTextColor={'#B3B3B3'}
      /> */}
            <View style={{ marginTop: hp('3%'), marginHorizontal: wp('12%'), flex: 1 }}>
                <TextInput
                mode='outlined'
                label={'Group Name*'}
                // label={(
                //     <TextModal style={styles.addressOptionHead}>Complete address
                //     <TextModal style={[styles.addressOptionHead, { color: '#FF0036' }]}> *</TextModal>
                //     </TextModal>
                // )}
                placeholder=" "
                placeholderTextColor={'#B3B3B3'}
                value={text.groupName}
                // onChangeText={text => setText(text)}
                onChangeText={value => handleChangeText('groupName', value)}
                outlineStyle={{
                    borderColor: '#B3B3B3',
                    fontFamily: 'Medium',
                    borderRadius: 6
                }}
                activeOutlineColor='#263238'
                style={{
                    backgroundColor: 'white',
                    fontFamily: 'Medium',
                }}
                contentStyle={{
                    fontFamily: 'Medium',
                }}
                />
                <TextInput
                mode='outlined'
                label={'Description'}
                placeholder=" "
                placeholderTextColor={'#B3B3B3'}
                value={text.description}
                onChangeText={value => handleChangeText('description', value)}
                outlineStyle={{
                    borderColor: '#B3B3B3',
                    fontFamily: 'Medium',
                    borderRadius: 6
                }}
                activeOutlineColor='#263238'
                style={{
                    backgroundColor: 'white',
                    fontFamily: 'Medium',
                    marginTop: hp('1.5%')
                }}
                contentStyle={{
                    fontFamily: 'Medium',
                }}
                />
                <View style={Styles.commonAlign}>
                    <TextInput
                    editable={false}
                    mode='outlined'
                    label={'Type*'}
                    placeholder=" "
                    placeholderTextColor={'#B3B3B3'}
                    value={type}
                    onChangeText={text => setType(text)}
                    outlineStyle={{
                        borderLeftColor: '#B3B3B3',
                        borderTopColor: '#B3B3B3',
                        borderBottomColor: '#B3B3B3',
                        borderRightColor: 'white',
                        fontFamily: 'Medium',
                        borderRadius: 6,
                        borderLeftWidth: 1,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                    }}
                    activeOutlineColor='#263238'
                    style={{
                        backgroundColor: 'white',
                        fontFamily: 'Medium',
                        marginTop: hp('1.5%'),
                        width: '87%'
                    }}
                    contentStyle={{
                        fontFamily: 'Medium',
                    }}
                    />
                    <Icon onPress={()=>{setShowType(!showType)}} name="chevron-down" type="material-community" size={24} color={Colors.Black} style={{ top: hp('1%'), marginLeft: wp('2%') }}/>
                </View>
                {showType === true ? <View>
                    <Pressable onPress={()=>{setType('Open to all')}} style={styles.inputContainerStyle}>
                        <TextModal style={styles.inputText}>Open to all</TextModal>
                    </Pressable>
                    <Pressable onPress={()=>{setType('Invite only')}} style={styles.inputContainerStyle}>
                        <TextModal style={styles.inputText}>Invite only</TextModal>
                    </Pressable>
                </View> : null}
            </View>
            <View style={styles.bottomView}>
                <Button
                disabledStyle={{ backgroundColor: '#B3B3B3' }}
                disabledTitleStyle={{ color: Colors.White }}
                onPress={()=>{navigation.pop(2)}}
                title={(
                    <View style={Styles.commonAlign}>
                        <TextModal style={{
                            fontFamily: 'Bold',
                            fontSize: FontSizes.Primary_Large,
                            color: Colors.White,
                        }}>Create </TextModal>
                        <Image source={Images.coinIcon} style={{ width: 16, height: 16 }}/>
                        <TextModal style={{
                            fontFamily: 'Bold',
                            fontSize: FontSizes.Primary_Large,
                            color: Colors.White,
                        }}> 100</TextModal>
                    </View>
                )}
                buttonStyle={{
                backgroundColor: Colors.PrimaryColor,
                borderRadius: 6,
                alignSelf: 'center'
                }}
                />
            </View>
    </SafeAreaView>
  )
}

export default CreateNewGroup;

const styles = StyleSheet.create({
    headerView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: wp("4%"),
      paddingVertical: hp('3%'),
      backgroundColor: Colors.PrimaryColor
    },
    headerLabelStyle: {
      fontFamily: "Medium",
      fontSize: FontSizes.Primary_Large,
      color: Colors.White,
    },
    uploadImageContainer: {
        backgroundColor: '#F0DEFF',
        width: 60, height: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: hp('7%'),
        marginBottom: hp('1.5%')
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderColor: '#B3B3B3',
        borderRadius: 6,
        marginTop: hp('2.5%'),
        paddingVertical: 14,
        paddingHorizontal: 14
    },
    inputText: {
      fontSize: FontSizes.Primary_Medium,
      fontFamily: 'Medium',
      color: Colors.Black,
    },
    bottomView: { paddingHorizontal: wp('5%'), paddingVertical: 15, borderTopWidth: 1, borderTopColor: Colors.PrimaryColor },
});