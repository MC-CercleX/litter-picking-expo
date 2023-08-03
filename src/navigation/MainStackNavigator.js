import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from "./BottomTabsNavigator";
import RewardsScreen from "../screens/RewardsScreen";
import ScrapSelection from "../screens/SellScrapScreens/ScrapSelection";
import ScrapUploadScreen from "../screens/SellScrapScreens/ScrapUploadScreen";
import CameraScreen from "../screens/CameraScreen";
import LocationScreen from "../screens/SellScrapScreens/LocationScreen";
import PickupSummary from "../screens/SellScrapScreens/PickupSummary";
import PickupSuccess from "../screens/PickupSuccess";
import ProductDetails from "../screens/NullStoreScreens/ProductDetails";
import EventScreen from "../screens/EventScreen";
import EventConfirmation from "../screens/EventConfirmation";
import NewGroup from "../screens/NewGroup";
import CreateNewGroup from "../screens/CreateNewGroup";
import LitterDetails from "../screens/LitterDetails";
import UploadResolved from "../screens/UploadResolved";
import ResolveSuccess from "../screens/ResolveSuccess";
import ViewProfile from "../screens/ViewProfile";
import { ConnectionOff, Erroroccured_1, Erroroccured_2, LocationError } from "../screens/ErrorScreens/ConnectionOff";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
      <Stack.Screen name="RewardScreen" component={RewardsScreen} />
      <Stack.Screen name="ScrapSelectionScreen" component={ScrapSelection} />
      <Stack.Screen name="ScrapUploadScreen" component={ScrapUploadScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="LocationScreen" component={LocationScreen} />
      <Stack.Screen name="PickupSummaryScreen" component={PickupSummary} />
      <Stack.Screen name="PickupSuccessScreen" component={PickupSuccess} />
      <Stack.Screen name="ProductDetailsScreen" component={ProductDetails} />
      <Stack.Screen name="EventScreen" component={EventScreen} />
      <Stack.Screen name="EventConfirmScreen" component={EventConfirmation} />
      <Stack.Screen name="NewGroupScreen" component={NewGroup} />
      <Stack.Screen name="CreateNewGroup" component={CreateNewGroup} />
      <Stack.Screen name="LitterDetailScreen" component={LitterDetails} />
      <Stack.Screen name="UploadResolvedScreen" component={UploadResolved} />
      <Stack.Screen name="ResolveSuccessScreen" component={ResolveSuccess} />
      <Stack.Screen name="ViewProfileScreen" component={ViewProfile} />

      {/************ Error Screens ************/}
      <Stack.Screen name="ConnectionOff" component={ConnectionOff} />
      <Stack.Screen name="Erroroccured_1" component={Erroroccured_1} />
      <Stack.Screen name="Erroroccured_2" component={Erroroccured_2} />
      <Stack.Screen name="LocationError" component={LocationError} />
    </Stack.Navigator>
  );
};

export default MainStack;
