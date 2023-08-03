import React from 'react';
import { StyleSheet, View, ImageBackground, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from 'expo-linear-gradient';
import { Divider, Icon, Image } from '@rneui/themed';
import TextModal from '../components/TextModal';
import { Styles } from '../styles/stylesheet';
import { Images } from '../constants/images';
import { FontSizes, FontWeight } from '../styles/fonts';
import { Colors } from '../styles/theme';
import FlatListComp from '../components/FlatlistComponent';

const STATUS = [
    {
        id: 1,
        statusLabel: 'Not Resolved',
        litterImage: Images.trash_3,
    },
    {
        id: 2,
        statusLabel: 'Resolved',
        litterImage: Images.trash_2,
    },
    {
        id: 3,
        statusLabel: 'Resolved',
        litterImage: Images.trash_2,
    },
    {
        id: 4,
        statusLabel: 'Resolved',
        litterImage: Images.trash_3,
    },
    {
        id: 5,
        statusLabel: 'Resolved',
        litterImage: Images.trash_2,
    },
    {
        id: 6,
        statusLabel: 'Resolved',
        litterImage: Images.trash_3,
    },
];

const ViewProfile = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
    <View style={[Styles.flexBetween, styles.iconsView]}>
        <Icon name="angle-left" type="font-awesome" size={30} color={Colors.Black} style={{  }} onPress={()=>{navigation.goBack()}} />
        <Icon name="md-share-social-outline" type="ionicon" size={22} color={'transparent'} style={{  }} />
    </View>
      <LinearGradient
      colors={['#6F2DA8', '#D45AFF']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={[
          styles.linearGradient,
          { alignSelf: 'center', marginTop: 20 }, // <-- Overwrites the preceding style property
      ]}>
      <View style={[styles.innerContainer, {  }]}>
          <ImageBackground source={Images.greenCity} imageStyle={{ width: 60, height: 60, borderRadius: 200 }} style={{ bottom: 5, alignItems: 'center' }}>
              <Image source={Images.profileEmoji_1} style={{ width: 50, height: 50, marginTop: 1 }}/>
          </ImageBackground>
      </View>
      </LinearGradient>
      <View style={{ alignItems: 'center', marginTop: 15 }}>
          <TextModal style={styles.profileName}>Sasi</TextModal>
          <View style={{ height: 5 }}/>
          <TextModal style={styles.profileTag}>@Sasi0712</TextModal>
      </View>
      <View style={[Styles.flexBetween, { marginHorizontal: wp('20%'), marginTop: hp('2%') }]}>
        <View style={{ alignItems: 'center' }}>
          <TextModal style={[styles.profileTag, { color: Colors.PrimaryColor }]}>98</TextModal>
          <View style={{ height: hp('0.5%') }}/>
          <TextModal style={styles.contribution}>Contributions</TextModal>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={[Styles.commonAlign, { marginBottom: hp('0.5%') }]}>
            <TextModal style={[styles.profileTag, { color: Colors.Black }]}>300</TextModal>
            <View style={{ width: 5 }}/>
            <Image source={Images.coinIcon} style={{ width: 22, height: 22 }}/>
          </View>
          <TextModal style={styles.contribution}>CERC coins</TextModal>
        </View>
      </View>
            <View style={{ height: hp('2%') }}/>
            <TextModal style={styles.caption}>“On the mission to make🌍world without🗑️waste”</TextModal>
      <Divider width={3} color='#F5F5F5' style={{ marginTop: 20 }}/>
      <ScrollView showsVerticalScrollIndicator={false} style={{ alignSelf: 'center', marginTop: 20 }}>
          <FlatListComp
              scrollEnabled={true}
              data={STATUS}
              numColumns={2}
              renderItem={({ item, index })=> (
                  <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                      <ImageBackground style={{ width: 160, height: 160, borderRadius: 7 }} source={item?.litterImage} imageStyle={{ width: 160, height: 160, borderRadius: 7 }}>
                          <View style={[styles.statusTag, { backgroundColor: item?.statusLabel === 'Not Resolved' ? Colors.Sunshade : Colors.DarkMintGreen }]}>
                              <TextModal style={styles.statusTagText}>{item?.statusLabel}</TextModal>
                          </View>
                      </ImageBackground>
                  </View>
              )}
              keyExtractor={(item) => item?.id}
              ItemSeparatorComponent={()=> { 
                  return (
                      <View style={{ height: 10 }}/>
                  )}
              }
          />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ViewProfile;

const styles = StyleSheet.create({
  iconsView: {
      marginHorizontal: wp('5%'),
      paddingVertical: hp('1.5%')
  },
  linearGradient: {
    height: 70,
    width: 70,
    borderRadius: 75, // <-- Outer Border Radius
    
  },
  innerContainer: {
    borderRadius: 75, // <-- Inner Border Radius
    flex: 1,
    margin: 5, // <-- Border Width
    backgroundColor: '#fff',
    justifyContent: 'center',

  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#cc2b5e',
    backgroundColor: 'transparent',
  },
  profileName: {
    fontFamily: 'Bold', fontSize: FontSizes.Secondary_Medium, color: '#263238',
  },
  profileTag: {
    fontFamily: 'Book', fontSize: FontSizes.Primary_Large, color: '#9E9E9E',
  },
  caption: {
    fontFamily: 'Book', fontSize: FontSizes.Primary_Large, color: '#263238', fontWeight: FontWeight.Light, textAlign: 'center'
  },
  addScore: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: '#D9D9D9',
    alignSelf: 'center',
    marginTop: 20
  },
  addScoreText: {
    fontFamily: 'Book', fontSize: FontSizes.Primary_Small, color: '#1F1F43',
  },
  statusTag: {
    paddingVertical: 5,
    paddingHorizontal: 17,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  statusTagText: {
    fontFamily: 'Medium', fontSize: FontSizes.Primary_Medium, color: Colors.White,
  },
  contribution: {
    fontFamily: 'Book', fontSize: FontSizes.Primary_Medium, color: '#ABABAB',
  },
});