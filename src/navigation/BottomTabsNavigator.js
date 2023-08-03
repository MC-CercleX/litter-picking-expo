import React from 'react';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/HomeScreen';
import { Icon, Image } from '@rneui/themed';
import { Fonts } from '../styles/fonts';
import { Colors } from '../styles/theme';
import { Images } from '../constants/images';
import ProfileScreen from '../screens/ProfileScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import CameraScreen from '../screens/CameraScreen';
import SellScrapHome from '../screens/SellScrapScreens/SellScrapHome';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
        headerShown: false,
        tabBarStyle: {
            height: 60,
            paddingVertical: 8,
            backgroundColor: Colors.White,
            borderTopWidth: 0,
            elevation: 0,
        },
        tabBarLabelStyle: {
            marginBottom: 10,
            fontFamily: 'Medium'
        },
        tabBarActiveTintColor: Colors.PrimaryColor,
        tabBarInactiveTintColor: '#B3B3B3',
        }}
    >
      <Tab.Screen 
        name="Map" 
        component={MapScreen}
        options={{ 
            title: "Map",
            tabBarIcon: ({ color }) => (
                <Icon type="material" name="location-on" color={color} size={25} />
            ),
            tabBarItemStyle: {  }
        }} 
      />
      <Tab.Screen
        name="Challenges" 
        component={ChallengesScreen}
        options={{ 
            title: "Challenges",
            tabBarIcon: ({ color, focused }) => (
                // <Icon type="foundation" name="mountains" color={color} size={25} />
                <Image source={Images.challengesIcon} style={{ width: 18.44, height: 21, tintColor: focused ? Colors.PrimaryColor: '#B3B3B3' }}/>
            ),
            tabBarItemStyle: { 
            }
        }}  
      />
      <Tab.Screen
        name="Capture"
        component={CameraScreen}
        options={{ 
            title: "Capture",
            tabBarIcon: ({ color }) => (
                <Icon type="material" name="photo-camera" color={color} size={25} />
            ),
            tabBarItemStyle: {  },
            tabBarStyle: { display: "none" },
        }}  
      />
      <Tab.Screen
        name="Notification"
        component={SellScrapHome}
        options={{ 
            title: "Sell Scrap",
            tabBarIcon: ({ color, focused }) => (
                // <Icon type="ionicon" name="SellScrap" color={color} size={25} />
                <Image source={Images.sellScrapIcon} style={{ width: 24, height: 21, tintColor: focused ? Colors.PrimaryColor: '#B3B3B3' }}/>
            ),
            tabBarItemStyle: {  },
            tabBarStyle: { display: "none" },
        }}  
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
            title: "Profile",
            tabBarIcon: ({ color }) => (
                <Icon type="ionicon" name="person-sharp" color={color} size={25} />
            ),
            tabBarItemStyle: {  }
        }}  
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({
});

