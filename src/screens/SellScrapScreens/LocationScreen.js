import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextModal from '../../components/TextModal';
import { Styles } from '../../styles/stylesheet';
import { Colors } from '../../styles/theme';
import { Button, Divider, Icon, Image } from '@rneui/themed';
import { FontSizes } from '../../styles/fonts';
import { Images } from '../../constants/images';

const ADDRESSTYPE = [
    {
        id: 1,
        type: 'Home',
    },
    {
        id: 2,
        type: 'Work',
    },
    {
        id: 3,
        type: 'Other',
    },
];

const LocationScreen = ({navigation}) => {
    const refRBSheet = useRef();
    const refRBSheet2 = useRef();
    const refRBSheetDate = useRef();
    const [addressType, setAddressType] = useState(null);
    const [text, setText] = useState(
        {
            completeAddress: 'Pollachi Main Rd, Coimbatore, India',
            floor: '',
            landmark: ''
        }
    );
    const [saveAddress, setSaveAddress] = useState('');

    const handleChangeText = (key, value) => {
      setText(prevState => ({
        ...prevState,
        [key]: value
      }));
    };

    const isDisabled = text.completeAddress == '' || text.floor == '' || text.landmark == '';
    // const addressFormat = `${text.completeAddress}, ${text.floor}, ${text.landmark}`;

    // CALENDAR
  const current = new Date();
  const date = `${current.getFullYear()}-0${current.getMonth()+1}-0${current.getDate()}`;
  const [selected, setSelected] = useState('');

  const renderArrow = (direction) => {
    const iconStyle = {
      // Define your custom icon style here
    };

    const iconName = direction === 'left' ? 'chevron-left' : 'chevron-right'; // Adjust the icon names based on your icon library

    return <Icon name={iconName} size={30} color={"black"} style={{ marginLeft: direction === 'left' ? -10 : null, marginRight: direction === 'right' ? -10 : null}}/>;
  };

  LocaleConfig.locales['en'] = {
    monthNames: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    today: 'Today'
  };
  LocaleConfig.defaultLocale = 'en';

  return (
    <SafeAreaView>
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
        <View style={Styles.progressChipActive}></View>
      </View>
    </View>
    <View style={{ marginTop: hp('3%') }}>
        <View style={{ alignItems: 'center' }}>
            <TextModal style={styles.headLabel}>Select your location and date{'\n'}for Scrap pickup</TextModal>
        </View>
        <Pressable onPress={()=>{refRBSheet.current.open()}} style={[styles.selectView, Styles.flexBetween, { marginTop: hp('4%') }]}>
            <View style={Styles.commonAlign}>
                <Icon name="my-location" type="material" size={20} color={Colors.PrimaryColor} />
                <View style={{ width: wp('3%') }}/>
                <View>
                    <TextModal style={styles.optionLabel}>Location</TextModal>
                    <View style={{ height: 4 }}/>
                    <TextModal style={styles.text2}>{text?.completeAddress}</TextModal>
                </View>
            </View>
            <Icon name="chevron-right" type="material-community" size={20} color={Colors.PrimaryColor} />
        </Pressable>
        <Pressable onPress={()=>{refRBSheetDate.current.open()}} style={[styles.selectView, Styles.flexBetween, { marginTop: hp('3%') }]}>
            <View style={Styles.commonAlign}>
                <Icon name="calendar-month-outline" type="material-community" size={20} color={Colors.PrimaryColor} />
                <View style={{ width: wp('3%') }}/>
                <View>
                    <TextModal style={styles.optionLabel}>Pickup date</TextModal>
                    <View style={{ height: 4 }}/>
                    <TextModal style={styles.text2}>17 July 2023</TextModal>
                </View>
            </View>
            <Icon name="chevron-down" type="material-community" size={20} color={Colors.PrimaryColor} />
        </Pressable>
        <View style={{ marginHorizontal: wp('6%'), marginTop: hp('2%') }}>
            <TextModal style={styles.detailsText}>This Pickup time between 10am - 6pm.{'\n'}Pickup executive will call you before coming</TextModal>
        </View>
        <Button 
          disabledStyle={{ backgroundColor: '#B3B3B3' }}
          disabledTitleStyle={{ color: Colors.White }}
          onPress={()=>{navigation.navigate('PickupSummaryScreen')}}
          title={'Next'}
          titleStyle={styles.buttonTitle}
          buttonStyle={[styles.button, { alignSelf: 'center', marginTop: hp('4.5%') }]}
        />
        <View>
            <Image source={Images.locationbottomimage} style={{ width: '100%', height: 226 }}/>
        </View>
    </View>
    <RBSheet
    ref={refRBSheet}
    closeOnDragDown={true}
    closeOnPressMask={false}
    animationType='fade'
    customStyles={{
        wrapper: {
        backgroundColor: "rgba(38, 50, 56, 0.70)",
        },
        draggableIcon: {
        backgroundColor: "transparent"
        },
        container: {
        height: 500,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        },
    }}
    >
        <View style={[Styles.flexBetween, { marginHorizontal: wp('5%') }]}>
            <TextModal style={styles.rbHeadLabel}>Select an address</TextModal>
            <Icon onPress={()=>{refRBSheet.current.close()}} name="close" type="material-community" size={26} color={Colors.Black} />
        </View>
        <Divider width={1} style={styles.dividerStyle}/>
        <Pressable onPress={()=>{refRBSheet2.current.open()}} style={[Styles.commonAlign, { marginHorizontal: wp('5%'), marginVertical: hp('1.5%') }]}>
            <Icon name="add" type="material" size={22} color={Colors.PrimaryColor} />
            <View style={{ width: wp('2%') }}/>
            <TextModal style={styles.addAddressLabel}>Add address</TextModal>
        </Pressable>
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
    </RBSheet>
    <RBSheet
    ref={refRBSheet2}
    closeOnDragDown={true}
    closeOnPressMask={false}
    animationType='fade'
    customStyles={{
        wrapper: {
        backgroundColor: "rgba(38, 50, 56, 0.70)",
        },
        draggableIcon: {
        backgroundColor: "transparent"
        },
        container: {
        height: 500,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        },
    }}
    >
        <View style={[Styles.flexBetween, { marginHorizontal: wp('5%') }]}>
            <TextModal style={styles.rbHeadLabel}>Enter address details</TextModal>
            <Icon onPress={()=>{refRBSheet2.current.close()}} name="close" type="material-community" size={26} color={Colors.Black} />
        </View>
        <Divider width={1} style={styles.dividerStyle}/>
        <View style={{ marginHorizontal: wp('5%'), marginTop: hp('1.75%') }}>
            <TextModal style={styles.addressOptionHead}>Save address as*</TextModal>
            <View style={[Styles.commonAlign, { marginTop: hp('1.25%') }]}>
                {ADDRESSTYPE.map((item, index) => (
                    <Pressable key={index} onPress={()=>{setAddressType(item?.id)}} 
                    style={[styles.addressOptionView, { borderColor: addressType == item.id ? Colors.PrimaryColor : '#B3B3B3', backgroundColor: addressType == item.id ? '#FBF6FF' : Colors.White }]}
                    >
                        <TextModal style={[styles.addressOptionHead, { color: Colors.Black }]}>{item?.type}</TextModal>
                    </Pressable>
                ))}
            </View>
            <View style={{ marginTop: hp('3%') }}>
                <TextInput
                mode='outlined'
                label={'Complete address *'}
                // label={(
                //     <TextModal style={styles.addressOptionHead}>Complete address
                //     <TextModal style={[styles.addressOptionHead, { color: '#FF0036' }]}> *</TextModal>
                //     </TextModal>
                // )}
                placeholder=" "
                value={text.completeAddress}
                // onChangeText={text => setText(text)}
                onChangeText={value => handleChangeText('completeAddress', value)}
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
                label={'Floor (optional)'}
                placeholder=" "
                value={text.floor}
                // onChangeText={text => setText(text)}
                onChangeText={value => handleChangeText('floor', value)}
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
                <TextInput
                mode='outlined'
                label={'Nearby landmark (optional)'}
                placeholder=" "
                value={text.landmark}
                // onChangeText={text => setText(text)}
                onChangeText={value => handleChangeText('landmark', value)}
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
            </View>
            <Button
            disabled={isDisabled}
            disabledStyle={{ backgroundColor: '#B3B3B3' }}
            disabledTitleStyle={{ color: Colors.White }}
            onPress={()=>{refRBSheet2.current.close()}}
            title={'Save address'}
            titleStyle={styles.buttonTitle}
            buttonStyle={[styles.button, { alignSelf: 'center', marginTop: hp('6%'), }]}
            />
        </View>
    </RBSheet>
    <RBSheet
    ref={refRBSheetDate}
    closeOnDragDown={true}
    closeOnPressMask={false}
    animationType='fade'
    customStyles={{
        wrapper: {
        backgroundColor: "rgba(38, 50, 56, 0.70)",
        },
        draggableIcon: {
        backgroundColor: "transparent"
        },
        container: {
        height: 530,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        },
    }}
    >
        <View style={[Styles.flexBetween, { marginHorizontal: wp('5%') }]}>
            <TextModal style={styles.rbHeadLabel}>Select pickup date</TextModal>
            <Icon onPress={()=>{refRBSheetDate.current.close()}} name="close" type="material-community" size={26} color={Colors.Black} />
        </View>
        <Divider width={1} style={styles.dividerStyle}/>
          <Calendar
          renderArrow={renderArrow}
          // {
          //   direction === 'left'
          //   ? <Icon onPress={() => {}} name="arrow-back-ios" type="material" size={20} color={Colors.Black} />
          //   : <Icon onPress={() => {}} name="arrow-right-ios" type="material" size={20} color={Colors.Black} />
          // }
          theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#7B827E',
              selectedDayBackgroundColor: '#6F2DA8',
              selectedDayTextColor: '#fff',
              todayTextColor: '#fff',
              dayTextColor: '#000000',
              textDisabledColor: '#6C7470',
              todayBackgroundColor: '#6F2DA8',
              textDayFontFamily: 'Book',
              textMonthFontFamily: 'Bold',
              textDayHeaderFontFamily: 'Bold',
              arrowColor: Colors.Black,
              'stylesheet.calendar.main': {
                dayContainer: {
                  borderColor: '#D1D3D4',
                  borderWidth: 1,
                  flex:1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 1,
                  backgroundColor: selected ? 'purple' : 'white',
                  
                },
                emptyDayContainer: {
                  borderColor: '#D1D3D4',
                  borderWidth: 1,
                  flex:1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 7.5,
                },
                week: {
                  marginTop: 0,
                  marginBottom: 0,
                  flexDirection: 'row',
                },}
          }}
          style={{
            backgroundColor: '#6F2DA821',
            margin: 20,
            paddingBottom: 5,
            marginTop: hp('1%'),
            borderLeftWidth: wp('4%'),
            borderRightWidth: wp('4%'),
            borderBottomWidth: hp('2%'),
            borderColor: '#6F2DA821',
            borderRadius: 8,
          }}
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markingType={'custom'}
            markedDates={{
              [selected]: {
                customStyles: {
                  container: {
                    backgroundColor: '#6F2DA8',
                    borderRadius: 0,
                    width: '100%'
                  },
                  text: {
                    color: 'white'
                  }
                }
              },
            }}
          />
          <Button
          disabledStyle={{ backgroundColor: '#B3B3B3' }}
          disabledTitleStyle={{ color: Colors.White }}
          onPress={()=>{refRBSheetDate.current.close()}}
          title={'Save date'}
          titleStyle={styles.buttonTitle}
          buttonStyle={[styles.button, { alignSelf: 'center', marginTop: hp('1%'), }]}
          />
    </RBSheet>
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  headLabel: {
    fontFamily: "Medium",
    fontSize: FontSizes.Tertiary_Small,
    color: "#1C1B1F",
    textAlign: "center",
    lineHeight: 30,
  },
  selectView: {
    borderWidth: 1,
    borderColor: "#C7C7C7",
    marginHorizontal: hp("3%"),
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 7,
  },
  optionLabel: {
    fontFamily: "Medium",
    fontSize: FontSizes.Primary_Large,
    color: Colors.PrimaryColor,
  },
  rbHeadLabel: {
    fontFamily: "Medium",
    fontSize: FontSizes.Tertiary_Small,
    color: Colors.Black,
  },
  dividerStyle: {
    marginHorizontal: wp("5%"),
    marginVertical: hp("2%"),
  },
  addAddressLabel: {
    fontFamily: "Medium",
    fontSize: FontSizes.Primary_Large,
    color: Colors.PrimaryColor,
  },
  mainContainer: {
    marginHorizontal: wp("5%"),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 7,
    justifyContent: "space-between",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("1.5%"),
    backgroundColor: "white",
    marginVertical: hp("1%"),
    borderWidth: 1,
    borderColor: "#C7C7C7",
    marginTop: hp("2%"),
  },
  text1: {
    fontFamily: "Medium",
    color: Colors.PrimaryColor,
    fontSize: FontSizes.Primary_Large,
    marginBottom: hp("0.5%"),
  },
  text2: {
    fontFamily: "Book",
    color: Colors.Black,
    fontSize: FontSizes.Primary_Medium - 1,
  },
  addressOptionHead: {
    fontFamily: "Medium",
    color: "#B3B3B3",
    fontSize: FontSizes.Primary_Medium,
  },
  addressOptionView: {
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: wp('4%'),
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
  detailsText: {
    fontSize: FontSizes.Primary_Large,
    fontFamily: 'Book',
    color: '#B3B3B3',
    lineHeight: 20
  },
});