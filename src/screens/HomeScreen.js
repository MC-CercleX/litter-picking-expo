import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  SafeAreaView,
  Pressable,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { SceneMap } from "react-native-tab-view";
import { Styles } from "../styles/stylesheet";
import TextModal from "../components/TextModal";
import TextInputComp from "../components/TextInput";
import { Colors } from "../styles/theme";
import { FontSizes, Fonts } from "../styles/fonts";
import { Icon, Tab, Image, TabView, Divider } from "@rneui/themed";
import { Images } from "../constants/images";
import FlatListComp from "../components/FlatlistComponent";
import HomeTabView from "../navigation/TopTabsNavigator";
import LeaderboardTab from "./Tabs/LeaderboardTab";
import MyGroupTab from "./Tabs/MyGroupTab";

const { height, width } = Dimensions.get("window");
// console.log(height);

const LITTERCONTENT = [
  {
    id: 1,
    litterBody: "Pick up litter, spruce up Singapore",
    distance: "Orchard, 5.3 km away",
    description: "U-pick and front-store, beekeeping, events and more",
    dayTime: "Tuesday 10:00AM",
    status: "Not Resolved",
    image: Images.trash_2  
  },
  {
    id: 2,
    litterBody: "Pick up litter, spruce up Singapore",
    distance: "Orchard, 5.3 km away",
    description: "U-pick and front-store, beekeeping, events and more",
    dayTime: "Tuesday 10:00AM",
    status: "Resolved by @sasi_sk",
    image: Images.trash_3  
  },
  {
    id: 3,
    litterBody: "Pick up litter, spruce up Singapore",
    distance: "Orchard, 5.3 km away",
    description: "U-pick and front-store, beekeeping, events and more",
    dayTime: "Tuesday 10:00AM",
    status: "Not Resolved",
    image: Images.trash_2  
  },
  {
    id: 4,
    litterBody: "Pick up litter, spruce up Singapore",
    distance: "Orchard, 5.3 km away",
    description: "U-pick and front-store, beekeeping, events and more",
    dayTime: "Tuesday 10:00AM",
    status: "Resolved by @sasi_sk",
    image: Images.trash_3  
  },
];

const mapStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

const FirstRoute = () => (
  <View style={Styles.safeAreaView}>
    <TextModal>Heyy</TextModal>
  </View>
);

const SecondRoute = () => <View style={Styles.safeAreaView} />;

const Tabs = createMaterialTopTabNavigator();

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

const MapScreen = ({navigation, route}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);
  const [like, setLike] = useState(false);

  return (
    <SafeAreaView style={Styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.PrimaryColor}/>
      {/* <View style={styles.topContainer}>
        <View style={styles.inputContainer}>
          <View style={[Styles.flexBetween, {}]}>
            <Icon
              size={20}
              name={"search"}
              type={"font-awesome"}
              color={Colors.Black}
              style={{ marginRight: wp("2%") }}
            />
            <TextInputComp
              maxLength={30}
              placeholder={"Search"}
              placeholderTextColor={"#363537"}
              style={{ fontFamily: 'Book' }}
            />
          </View>
          <Pressable style={styles.inputButton}>
            <Icon
              size={15}
              name={"tune-vertical-variant"}
              type={"material-community"}
              color={Colors.Black}
              style={{}}
            />
          </Pressable>
        </View>
      </View> */}

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
         {/* <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: 10.94069,
              longitude: 76.975816,
              latitudeDelta: 0.0043,
              longitudeDelta: 0.0034,
            }}
            provider={PROVIDER_GOOGLE}
            // customMapStyle={mapStyle}
            key={"AIzaSyD1OenwxgJVX_bh1rF_NrX4mWOsMlV6hMc"}
          ></MapView>
        </View> */}
       
        {/* <HomeTabView /> */}


      <View style={styles.draggableIcon} />
      <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
              backgroundColor: Colors.PrimaryColor,
              // height: 3, width: wp('12.5%'), marginLeft: wp('23%') >> Litter
              height: 3, width: index === 0 ? wp('12.5%') : wp('25%'), marginLeft: index === 0 ? wp('23%') : wp('15.5%')
            }}
            // style={{ backgroundColor: 'red', marginVertical: hp('1%'), elevation: 10 }}
            // containerStyle={{ backgroundColor: 'cyan' }}
            // disableIndicator
            // containerStyle={(active) => ({ borderBottomWidth: active ? 1.75 : null, borderBottomColor: Colors.PrimaryColor })}
          >
            <Tab.Item
              title="Litter"
              titleStyle={[styles.tabText, { color: index === 0 ? Colors.PrimaryColor : Colors.Black }]}
              icon={{ name: 'rss-feed', type: 'material', color: index === 0 ? Colors.PrimaryColor : Colors.Black }}
              iconPosition='left'
            />
            <Tab.Item
              title="Leaderboard"
              titleStyle={[styles.tabText, { color: index === 1 ? Colors.PrimaryColor : Colors.Black }]}
              icon={()=> (  
                <Image source={Images.leaderboardIcon} style={{ width: 24, height: 24, tintColor: index === 1 ? Colors.PrimaryColor : Colors.Black }}/>
              )}
              iconPosition='left'
            />
          </Tab>
          <Divider style={{ marginTop: hp('1.5%'), elevation: 3 }}/>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ flex: 1 }}>
              <FlatListComp 
              scrollEnabled={true}
              flatlistStyle={{ marginTop: 30 }}
                data={LITTERCONTENT}
                renderItem={({ item, index })=> (
                  <Pressable onPress={()=>{navigation.navigate('LitterDetailScreen', { item: item })}} style={styles.litterCard}>
                      <ImageBackground source={item?.image} style={{ width: '100%', height: 240, borderRadius: 8 }}  imageStyle={{ borderRadius: 8 }}>
                        <View style={[Styles.flexBetween, item?.status === 'Not Resolved' ? { alignItems: 'flex-start' } : { flexDirection: 'column-reverse', alignItems: 'flex-end', height: 239.75 }]}>
                        <View style={[styles.statusTag, { backgroundColor: item?.status === 'Not Resolved' ? Colors.RoseMadder : Colors.DarkMintGreen }]}>
                          <TextModal style={styles.statusTagText}>{item?.status}</TextModal>
                        </View>
                        {like == false ? 
                        <Image onPress={()=>{setLike(true)}} source={Images.unlike} style={{ width: 26, height: 22, margin: 10 }}/> :
                        <Image onPress={()=>{setLike(false)}} source={Images.like} style={{ width: 26, height: 22, margin: 10 }}/>}
                        </View>
                      </ImageBackground>
                    <View style={{ padding: 15 }}>
                      <TextModal style={styles.litterBodyStyle}>{item?.litterBody}</TextModal>
                      <TextModal style={styles.distanceDescription}>{item?.distance}</TextModal>
                      <TextModal style={[styles.distanceDescription, { width: wp('70%') }]} numberOfLines={1}>{item?.description}</TextModal>
                      <View style={{ height: 7 }}/>
                      <TextModal style={[styles.statusStyle, { color: item?.status === 'Not Resolved' ? Colors.RoseMadder : Colors.DarkMintGreen }]}>{item?.dayTime}</TextModal>
                    </View>
                  </Pressable>
                )}
                keyExtractor={(item) => item?.id}
                ItemSeparatorComponent={()=> (
                  <View style={{ height: 17.5 }}/>
                )}
              />
            </TabView.Item>
            <TabView.Item style={{ width: "100%" }}>
              <Tabs.Navigator
                screenOptions={{
                  tabBarStyle: styles.tabbarstyle,
                  tabBarIndicatorStyle: styles.tabbarindicator,
                  tabBarLabelStyle: styles.tabbarLabel,
                  tabBarActiveTintColor: Colors.White,
                  tabBarInactiveTintColor: Colors.Black,
                  tabBarPressColor: Colors.White,
                  swipeEnabled: false,
                }}
              >
                <Tabs.Screen
                options={{
                  tabBarLabel: 'Leaderboard',
                }}
                name="RewardStore" component={LeaderboardTab} />
                <Tabs.Screen
                options={{
                  tabBarLabel: 'My group',
                }}
                name="ChallengeBoard" component={MyGroupTab} />
              </Tabs.Navigator>
            </TabView.Item>
          </TabView>
      {/* <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={{ flex: 1 }}
          /> */}
          


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: wp("4%"),
    borderRadius: 8,
    backgroundColor: Colors.White,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: hp("2%"),
    justifyContent: "space-between",
  },
  topContainer: {
    backgroundColor: Colors.White,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 3,
  },
  mapStyle: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    width: "100%",
    height: 500,
  },
  inputButton: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "#DFDFE2",
    borderRadius: 64,
    justifyContent: "center",
  },
  draggableIcon: {
    width: wp("17%"),
    height: 6,
    backgroundColor: "#D9D9D9",
    alignSelf: "center",
    borderRadius: 8,
    marginVertical: hp("1%"),
  },
  tabText: {
    fontSize: FontSizes.Primary_Large,
    fontFamily: 'Book',
    color: "#363537",
  },
  litterCard: {
    borderColor: "#F4F4F5",
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: wp("4%"),
    backgroundColor: Colors.White,
  },
  litterBodyStyle: {
    fontSize: FontSizes.Primary_Large,
    fontFamily: 'Bold',
    color: "#363537",
  },
  distanceDescription: {
    fontSize: FontSizes.Primary_Medium,
    fontFamily: 'Book',
    color: "#363537",
  },
  statusStyle: {
    fontSize: FontSizes.Primary_Large,
    fontFamily: 'Book',
  },
  tabbarstyle: {
    marginHorizontal: wp("7%"),
    borderRadius: 27.5,
    marginTop: 25,
    elevation: 0,
    borderWidth: 1,
    borderColor: '#D9D9D9'
  },
  tabbarindicator: {
    backgroundColor: Colors.PrimaryColor,
    height: 39,
    marginBottom: 4,
    borderRadius: 23.5,
    width: '46.5%',
    marginLeft: 5
  },
  tabbarLabel: {
    fontFamily: 'Bold',
    fontSize: FontSizes.Primary_Small + 1,
    textTransform: 'none',
  },
  statusTag: {
    paddingVertical: 5,
    paddingHorizontal: 17,
    // alignSelf: 'flex-start',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  statusTagText: {
    fontFamily: 'Medium', fontSize: FontSizes.Primary_Medium, color: Colors.White,
  },
});

export default MapScreen;
