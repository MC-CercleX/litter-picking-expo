import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Styles } from '../../styles/stylesheet';
import TextModal from '../../components/TextModal';
import { Colors } from '../../styles/theme';
import { FontSizes } from '../../styles/fonts';
import { Image } from '@rneui/themed';
import { Images } from '../../constants/images';
import FlatListComp from '../../components/FlatlistComponent';

const TSHIRT = [
    {
        id: 1,
        points: 200,
        offer: 200,
        image: Images.sampleTshirt,
    },
    {
        id: 2,
        points: 200,
        offer: 200,
        image: Images.sampleTshirt,
    },
    {
        id: 3,
        points: 200,
        offer: 200,
        image: Images.sampleTshirt,
    },
    {
        id: 4,
        points: 200,
        offer: 200,
        image: Images.sampleTshirt,
    },
];

const SHOES = [
    {
        id: 1,
        points: 200,
        offer: 200,
        image: Images.sampleShoe,
    },
    {
        id: 2,
        points: 200,
        offer: 200,
        image: Images.sampleShoe,
    },
    {
        id: 3,
        points: 200,
        offer: 200,
        image: Images.sampleShoe,
    },
    {
        id: 4,
        points: 200,
        offer: 200,
        image: Images.sampleShoe,
    },
];

const HOODIE = [
    {
        id: 1,
        points: 200,
        offer: 200,
        image: Images.sampleHoodie,
    },
    {
        id: 2,
        points: 200,
        offer: 200,
        image: Images.sampleHoodie,
    },
    {
        id: 3,
        points: 200,
        offer: 200,
        image: Images.sampleHoodie,
    },
    {
        id: 4,
        points: 200,
        offer: 200,
        image: Images.sampleHoodie,
    },
];

const Card = ({ brandHead, brandSubhead, data, navigation, type }) => (
    <>
        <View style={[Styles.commonAlign, { marginTop: 22.5 }]}>
            <View style={styles.indicator}/>
            <View style={{ marginHorizontal: 15, width: wp('88%') }}>
                <View style={[Styles.flexBetween, {  }]}>
                    <TextModal style={styles.brandHeadLabel}>{brandHead}</TextModal>
                    <TextModal onPress={()=>{}} style={styles.seeAll}>See all</TextModal>
                </View>
                <View style={{ height: 5 }}/>
                <TextModal style={styles.brandSubheadLabel}>{brandSubhead}</TextModal>
            </View>
        </View>
        <FlatListComp 
            flatlistStyle={{ marginLeft: 17, marginTop: 2.5 }}
            horizontal
            data={data}
            renderItem={({ item, index })=> (
                <Pressable onPress={()=>{navigation.navigate('ProductDetailsScreen', { item: item, type: type })}} style={{ margin: 7.5 }}>
                    <ImageBackground source={item?.image} imageStyle={{ width: 100, height: 110, borderRadius: 6 }} style={{ width: 100, height: 110, borderRadius: 6, alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={[Styles.commonAlign, styles.pointsView]}>
                            <Image source={Images.coinIcon} style={{ width: 13, height: 13 }}/>
                            <View style={{ width: 4 }}/>
                            <TextModal style={styles.pointsLabel}>{item?.points}</TextModal>
                        </View>
                        <View style={styles.offerView}>
                            <TextModal style={styles.offerLabel}>₹{item?.offer} OFF</TextModal>
                        </View>
                    </ImageBackground>
                </Pressable>
            )}
            keyExtractor={(item) => item?.id}
        />
    </>
);

const RewardStoreTab = ({ navigation, route }) => {
  return (
    <View style={Styles.safeAreaView}>
        <ScrollView>
            <Card navigation={navigation} type='tshirt' data={TSHIRT} brandHead='Null T-shirt store' brandSubhead='Grab the cool recycled uni-sex t-shirt'/>
            <Card navigation={navigation} type='hoodie' data={HOODIE} brandHead='Null Hoddles store' brandSubhead='Grab the cool recycled uni-sex Hoddles'/>
            <Card navigation={navigation} type='shoes' data={SHOES} brandHead='Null Recycled shoes' brandSubhead='Grab the cool recycled comfortable shoes'/>
        </ScrollView>
    </View>
  );
};

export default RewardStoreTab;

const styles = StyleSheet.create({
    indicator: {
        backgroundColor: Colors.PrimaryColor,
        width: 10, height: 28,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
    },
    brandHeadLabel: {
      fontFamily: 'Medium',
      fontSize: FontSizes.Primary_Small + 1,
      color: Colors.Black,
    },
    brandSubheadLabel: {
        fontFamily: 'Medium',
        fontSize: FontSizes.Primary_Small - 2,
        color: '#B3B3B3',
    },
    seeAll: {
        fontFamily: 'Book',
        fontSize: FontSizes.Primary_Small,
        color: Colors.PrimaryColor,
        borderBottomWidth: 1,
        borderBottomColor: Colors.PrimaryColor,
    },
    pointsView: {
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
        borderRadius: 12,
        marginTop: 4, marginLeft: 4,
        alignSelf: 'flex-start'
    },
    pointsLabel: {
        fontFamily: 'Medium',
        fontSize: FontSizes.Primary_Small - 2,
        color: Colors.White, paddingRight: 4,
    },
    offerLabel: {
        fontFamily: 'Bold',
        fontSize: FontSizes.Primary_Small - 2,
        color: Colors.White,
    },
    offerView: {
        backgroundColor: Colors.Sunshade,
        paddingVertical: 3,
        paddingHorizontal: 7,
        borderBottomLeftRadius: 6,
        borderTopRightRadius: 6,
        alignSelf: 'flex-start'
    },
});