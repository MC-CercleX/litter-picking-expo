import React from 'react';
import { StyleSheet, View, ImageBackground, Pressable, ScrollView } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from 'react-native-safe-area-context';
import TextModal from '../components/TextModal';
import { Styles } from '../styles/stylesheet';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from '@rneui/themed';
import { Images } from '../constants/images';
import { FontSizes, FontWeight, Fonts } from '../styles/fonts';
import FlatListComp from '../components/FlatlistComponent';
import { Colors } from '../styles/theme';

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

const ProfileScreen = () => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
        <LinearGradient
        colors={['#6F2DA8', '#D45AFF']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={[
            styles.linearGradient,
            { alignSelf: 'center', marginTop: 20 }, // <-- Overwrites the preceding style property
        ]}>
        <View style={[styles.innerContainer, {  }]}>
            <ImageBackground source={Images.greenCity} imageStyle={{ width: 140, height: 140, borderRadius: 200 }} style={{ bottom: 15, alignItems: 'center' }}>
                <Image source={Images.profileEmoji_1} style={{ width: 90, height: 90, marginTop: 20 }}/>
            </ImageBackground>
        </View>
        </LinearGradient>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TextModal style={styles.profileName}>Sasi</TextModal>
            <View style={{ height: 10 }}/>
            <TextModal style={styles.profileTag}>@Sasi0712</TextModal>
            <View style={{ height: 10 }}/>
            <TextModal style={styles.caption}>“On the mission to make🌍world without🗑️waste”</TextModal>
        </View>
        <Pressable style={[Styles.commonAlign, styles.addScore]}>
            <Image source={Images.CO2cloud} style={{ width: 30, height: 20 }}/>
            <View style={{ width: 5 }}/>
            <TextModal style={styles.addScoreText}>+ add your CO2 score</TextModal>
        </Pressable>
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
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 150,
    width: 150,
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
    fontFamily: 'Book', fontSize: FontSizes.Primary_Medium + 1, color: '#263238', fontWeight: FontWeight.Light,
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
  }
});

export default ProfileScreen;