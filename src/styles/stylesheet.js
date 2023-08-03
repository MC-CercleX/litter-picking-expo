import React from 'react';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FontSizes } from './fonts';
import { Colors } from './theme';

export const Styles = StyleSheet.create({
    safeAreaView: { flex: 1, backgroundColor: '#FFFFFF' },
    flexBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    commonAlign: { flexDirection: 'row', alignItems: 'center' },
    justify: { alignItems: 'center', justifyContent: 'center' },
    progressWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 5,
      marginHorizontal: wp('5%')
    },
    progressChip: {
      backgroundColor: "#320F52",
      borderRadius: 5,
      padding: 3,
      width: "26%",
      marginVertical: 5,
    },
    progressChipActive: {
      backgroundColor: "limegreen",
      borderRadius: 5,
      padding: 3,
      width: "26%",
      marginVertical: 5,
    },
    progressChipCompleted: {
      backgroundColor: "limegreen",
      borderRadius: 5,
      padding: 3,
      width: "100%",
      marginVertical: 5,
    },
    headerView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: wp("3%"),
      marginBottom: 15,
      marginTop: 15,
    },
    headerLabelStyle: {
      fontFamily: "Medium",
      fontSize: FontSizes.Secondary_Medium,
      color: Colors.White,
    },
})