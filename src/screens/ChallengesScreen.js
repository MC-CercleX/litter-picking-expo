import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextModal from "../components/TextModal";
import { Styles } from "../styles/stylesheet";
import { FontSizes, Fonts } from "../styles/fonts";
import { Image } from "@rneui/themed";
import { Images } from "../constants/images";
import { ChallengesCard1, ChallengesCard2, ChallengesCard3 } from '../components/cards/card_1';
import FlatListComp from "../components/FlatlistComponent";
import { Colors } from "../styles/theme";

const CALCULATEFP = [
    {
        id: 1,
        label: 'Carbon footprint',
        subLabel: 'Calculate your carbon footprint and learn how you can reduce your impact',
        picture: Images.carbonFootprint,
    },
    {
        id: 2,
        label: 'Plastic footprint',
        subLabel: 'Calculate your Plastic footprint and learn how you can reduce your impact',
        picture: Images.plasticFootprint,
    },
];

const EVENTSRECOMMENDATIONS = [
    {
        id: 1,
        label: 'Run marathon',
        subLabel: 'Sport has the power to bring people together',
        picture: Images.carbonFootprint,
        dayTime: '9 Oct 2023',
    },
    {
        id: 2,
        label: 'Waste awareness event',
        subLabel: 'The Sustainable Bright Spots programme is aimed at encouraging residents to keep their housing estates clean',
        picture: Images.plasticFootprint,
        dayTime: '9 Oct 2023',
    },
];

const OUTSIDECHALLENGES = [
    {
        id: 1,
        label: 'Tzu Chi’s Eco-Awareness',
        subLabel: 'Join us in cleaning up the city.',
        picture: Images.carbonFootprint,
        dayTime: '9 Oct 2023',
        location: 'Bucharest',
        points: '108 Points',
        status: 'Join the Challange'
    },
    {
        id: 2,
        label: 'Jalan Kayu Eco-Awareness',
        subLabel: 'Join us in cleaning up the city.',
        picture: Images.plasticFootprint,
        dayTime: '9 Oct 2023',
        location: 'Bucharest',
        points: '108 Points',
        status: 'Joined the Challange'
    },
];

const GOODHABITCHALLENGES = [
    {
        id: 1,
        label: 'Use recycled bag',
        subLabel: 'Create a unique emotional story that describes better than words',
        picture: Images.carbonFootprint,
        points: '300 Points',
        status: 'Join Challenge',
    },
    {
        id: 2,
        label: 'Environment friendly travel',
        subLabel: 'Create a unique emotional story that describes better than words',
        picture: Images.plasticFootprint,
        points: '1320 Points',
        status: 'Join Challenge',
    },
];

const NOOFUSERS = [
    {
        id: 1,
        userImg: Images.profileEmoji_1,
    },
    {
        id: 2,
        userImg: Images.profileEmoji_1,
    },
    {
        id: 3,
        userImg: Images.profileEmoji_1,
    },
    {
        id: 4,
        userImg: Images.profileEmoji_1,
    },
    {
        id: 5,
        userImg: Images.profileEmoji_1,
    },
];

const ChallengesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={styles.headerView}>
        <Image source={Images.giftIcon} style={[styles.giftIconStyle, { tintColor: 'transparent' }]} />
        <TextModal style={styles.headerLabelStyle}>Challenges</TextModal>
        <Image onPress={()=>{navigation.navigate('RewardScreen')}} source={Images.giftIcon} style={styles.giftIconStyle} />
      </View>
      <ScrollView>
      <View style={{ marginHorizontal: 22, marginTop: 10 }}>
        <TextModal style={styles.headerLabelStyle2}>Calculate your footprint</TextModal>
      </View>
      <View>
      <FlatListComp 
        horizontal
        data={CALCULATEFP}
        renderItem={({ item, index })=> (
            <ChallengesCard1 
                contentHead={item?.label}
                contentSubtext={item?.subLabel}
                buttonTitle={'Calculate'}
                cardPicture={item?.picture}
                CYFP
            />
        )}
        keyExtractor={(item) => item?.id}

      />
      </View>
      <View style={[Styles.flexBetween, { marginHorizontal: 22, marginTop: 20 }]}>
        <TextModal style={styles.headerLabelStyle2}>Events and Recommendations</TextModal>
        <TextModal style={styles.seeAllLabelStyle}>See all</TextModal>
      </View>
      <View>
      <FlatListComp 
        horizontal
        data={EVENTSRECOMMENDATIONS}
        renderItem={({ item, index })=> (
            <ChallengesCard1 
                onERPress={()=>{navigation.navigate('EventScreen', { item: item, type: 'E&R' })}}
                contentHead={item?.label}
                contentSubtext={item?.subLabel}
                buttonTitle={item?.dayTime}
                cardPicture={item?.picture}
                ER
                DATA={NOOFUSERS}
            />
        )}
        keyExtractor={(item) => item?.id}

      />
      </View>
      <View style={[Styles.flexBetween, { marginHorizontal: 22, marginTop: 20 }]}>
        <TextModal style={styles.headerLabelStyle2}>Get outside Challenges</TextModal>
        <TextModal style={styles.seeAllLabelStyle}>See all</TextModal>
      </View>
      <View>
      <FlatListComp 
        horizontal
        data={OUTSIDECHALLENGES}
        renderItem={({ item, index })=> (
            <ChallengesCard2 
                contentHead={item?.label}
                contentSubtext={item?.subLabel}
                buttonTitle={item?.status}
                cardPicture={item?.picture}
                ER
                DATA={NOOFUSERS}
                dayDate={item?.dayTime}
                location={item?.location}
                buttonborderColor={item?.status === 'Join the Challange' ? Colors.HalloweenOrange : Colors.JadeGreen}
                buttonbackgroundColor={item?.status === 'Join the Challange' ? Colors.HalloweenOrange : Colors.JadeGreen}
                points={item?.points}
            />
        )}
        keyExtractor={(item) => item?.id}

      />
      </View>
      <View style={[Styles.flexBetween, { marginHorizontal: 22, marginTop: 20 }]}>
        <TextModal style={styles.headerLabelStyle2}>Good Habit Challenges</TextModal>
        <TextModal style={styles.seeAllLabelStyle}>See all</TextModal>
      </View>
      <View>
      <FlatListComp 
        horizontal
        data={GOODHABITCHALLENGES}
        renderItem={({ item, index })=> (
            <ChallengesCard3
                contentHead={item?.label}
                contentSubtext={item?.subLabel}
                buttonTitle={item?.status}
                cardPicture={item?.picture}
                dayDate={item?.dayTime}
                location={item?.location}
                buttonborderColor={item?.status === 'Join the Challenge' ? Colors.HalloweenOrange : Colors.JadeGreen}
                buttonbackgroundColor={item?.status === 'Join the Challenge' ? Colors.HalloweenOrange : Colors.JadeGreen}
                points={item?.points}
                CYFP
            />
        )}
        keyExtractor={(item) => item?.id}

      />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChallengesScreen;

const styles = StyleSheet.create({
  headerLabelStyle: {
    fontFamily: 'Bold',
    fontSize: FontSizes.Tertiary_Small,
    color: "#3A3C3F",
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp("4%"),
    marginVertical: 10,
  },
  giftIconStyle: {
    width: 40,
    height: 40,
  },
  headerLabelStyle2: {
    fontFamily: 'Bold',
    fontSize: FontSizes.Secondary_Small,
    color: "#2F394B",
  },
  seeAllLabelStyle: {
    fontFamily: 'Bold',
    fontSize: FontSizes.Primary_Small,
    color: "#9CA5B2",
  },
});
