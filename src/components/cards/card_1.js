import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import TextModal from "../TextModal";
import { Button, Icon, Image } from "@rneui/themed";
import { Images } from "../../constants/images";
import { FontSizes, FontWeight, Fonts } from "../../styles/fonts";
import { Colors } from "../../styles/theme";
import { Styles } from "../../styles/stylesheet";
import FlatListComp from "../FlatlistComponent";
import CircularProgress from "react-native-circular-progress-indicator";

export const ChallengesCard1 = ({
  contentHead,
  contentSubtext,
  buttonTitle,
  onPress,
  cardPicture,
  CYFP,
  ER,
  DATA,
  userPicture,
  onERPress,
}) => {
  return (
    <View style={{ paddingLeft: 22, marginTop: 15 }}>
      <Pressable onPress={onERPress} style={styles.cardStyle}>
        <Image
          source={cardPicture}
          style={{
            width: 275,
            height: 100,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
        <View style={styles.innerCardStyle}>
          <TextModal style={styles.headerLabelStyle}>{contentHead}</TextModal>
          <View style={{ height: 8 }} />
          <TextModal
            style={[styles.subTextStyle, { width: CYFP ? "70%" : null }]}
          >
            {contentSubtext}
          </TextModal>
          <View style={[Styles.flexBetween, { marginTop: 8, width: "100%" }]}>
            <Button
              buttonStyle={{
                borderWidth: 1,
                borderRadius: 27,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderColor: CYFP
                  ? Colors.Sunshade
                  : ER
                  ? Colors.Sunshade
                  : null,
                backgroundColor: CYFP
                  ? Colors.PrimaryColor
                  : ER
                  ? Colors.Sunshade
                  : null,
              }}
              title={buttonTitle}
              titleStyle={{
                fontFamily: 'Book',
                fontSize: FontSizes.Primary_Small - 4,
                color: Colors.White,
                fontWeight: FontWeight.Light,
              }}
              onPress={onPress}
            />
            <View style={{ marginRight: -43 }}>
              <FlatListComp
                flatlistStyle={{ flexDirection: "row" }}
                data={DATA}
                horizontal
                renderItem={({ item, index }) => (
                  <View
                    style={[
                      styles.imageView,
                      {
                        left:
                          index == 1
                            ? -9
                            : index == 2
                            ? -18
                            : index == 3
                            ? -27
                            : index == 4
                            ? -36
                            : null,
                      },
                    ]}
                  >
                    <Image
                      source={item?.userImg}
                      style={{ width: 24.23, height: 24.23, borderRadius: 20 }}
                    />
                  </View>
                )}
                keyExtractor={(item) => item?.id}
              />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export const ChallengesCard2 = ({
  contentHead,
  contentSubtext,
  buttonTitle,
  onPress,
  cardPicture,
  CYFP,
  ER,
  DATA,
  userPicture,
  location,
  dayDate,
  buttonbackgroundColor,
  buttonborderColor,
  points,
}) => {
  return (
    <View style={{ paddingLeft: 22, marginTop: 15 }}>
      <View style={styles.cardStyle}>
        <Image
          source={cardPicture}
          style={{
            width: 275,
            height: 100,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
        <View style={styles.innerCardStyle}>
          <TextModal style={styles.headerLabelStyle}>{contentHead}</TextModal>
          <View style={{ height: 8 }} />
          <TextModal
            style={[styles.subTextStyle, { width: CYFP ? "70%" : null }]}
          >
            {contentSubtext}
          </TextModal>
          <View style={{ height: 8 }} />
          <View style={Styles.commonAlign}>
            <Icon
              name="location"
              type="octicon"
              size={19}
              color={Colors.HalloweenOrange}
            />
            <View style={{ width: 5 }} />
            <TextModal
              style={[styles.subTextStyle, { width: CYFP ? "70%" : null }]}
            >
              {location}
            </TextModal>
          </View>
          <View style={{ height: 4 }} />
          <View style={Styles.commonAlign}>
            <Icon
              name="calendar"
              type="feather"
              size={17}
              color={Colors.HalloweenOrange}
            />
            <View style={{ width: 5 }} />
            <TextModal
              style={[styles.subTextStyle, { width: CYFP ? "70%" : null }]}
            >
              {dayDate}
            </TextModal>
          </View>
          <View style={{ height: 10 }} />
          <TextModal
            style={[styles.pointsLabelStyle, { width: CYFP ? "70%" : null }]}
          >
            {points}
          </TextModal>
          <View style={[Styles.flexBetween, { marginTop: 10, width: "100%" }]}>
            <Button
              buttonStyle={{
                borderWidth: 1,
                borderRadius: 27,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderColor: buttonborderColor,
                backgroundColor: buttonbackgroundColor,
              }}
              title={buttonTitle}
              titleStyle={{
                fontFamily: 'Book',
                fontSize: FontSizes.Primary_Small - 4,
                color: Colors.White,
                fontWeight: FontWeight.Light,
              }}
              onPress={onPress}
            />
            <View style={{ marginRight: -43 }}>
              <FlatListComp
                flatlistStyle={{ flexDirection: "row" }}
                data={DATA}
                horizontal
                renderItem={({ item, index }) => (
                  <View
                    style={[
                      styles.imageView,
                      {
                        left:
                          index == 1
                            ? -9
                            : index == 2
                            ? -18
                            : index == 3
                            ? -27
                            : index == 4
                            ? -36
                            : null,
                      },
                    ]}
                  >
                    <Image
                      source={item?.userImg}
                      style={{ width: 24.23, height: 24.23, borderRadius: 20 }}
                    />
                  </View>
                )}
                keyExtractor={(item) => item?.id}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export const ChallengesCard3 = ({
  contentHead,
  contentSubtext,
  buttonTitle,
  onPress,
  cardPicture,
  CYFP,
  ER,
  DATA,
  userPicture,
  location,
  dayDate,
  buttonbackgroundColor,
  buttonborderColor,
  points,
}) => {
  return (
    <View style={{ paddingLeft: 22, marginTop: 15 }}>
      <View style={styles.cardStyle}>
        <Image
          source={cardPicture}
          style={{
            width: 275,
            height: 100,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
        <View style={styles.innerCardStyle}>
          <TextModal style={styles.headerLabelStyle}>{contentHead}</TextModal>
          <View style={{ height: 8 }} />
          <TextModal
            style={[styles.subTextStyle, { width: CYFP ? "80%" : null }]}
          >
            {contentSubtext}
          </TextModal>
          <View style={[Styles.flexBetween, { marginTop: 1, width: '100%' }]}>
          <TextModal
            style={[styles.pointsLabelStyle, { width: CYFP ? "70%" : null }]}
          >
            {points}
          </TextModal>
          <CircularProgress
            radius={20}
            value={50}
            inActiveStrokeColor={Colors.Sunshade}
            activeStrokeColor={Colors.JadeGreen}
            inActiveStrokeOpacity={0.2}
            progressValueColor={'#2F394B'}
            valueSuffix={'%'}
            progressValueStyle={styles.pointsLabelStyle}
            progressValueFontSize={10}
            valueSuffixStyle={{
              marginLeft: -2,
              marginRight: 1
            }}
            maxValue={100}
            strokeLinecap='square'
            activeStrokeWidth={5}
            inActiveStrokeWidth={5}
          />
          </View>
          <View style={[Styles.flexBetween, { marginTop: 5, width: "100%" }]}>
            <Button
              buttonStyle={{
                borderWidth: 1,
                borderRadius: 27,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderColor: buttonborderColor,
                backgroundColor: buttonbackgroundColor,
              }}
              title={buttonTitle}
              titleStyle={{
                fontFamily: 'Bold',
                fontSize: FontSizes.Primary_Small + 1,
                color: Colors.White,
                fontWeight: FontWeight.Light,
              }}
              onPress={onPress}
            />
            <View style={Styles.commonAlign}>
              <Icon
              name="clock"
              type="feather"
              size={19}
              color={Colors.JadeGreen} />
              <View style={{ width: 5 }} />
              <TextModal style={[styles.subTextStyle, { color: Colors.JadeGreen }]}>3 days{'\n'}challenge</TextModal>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLabelStyle: {
    fontFamily: 'Bold',
    fontSize: FontSizes.Secondary_Small,
    color: "#2F394B",
  },
  cardStyle: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: Colors.White,
    borderRadius: 12,
    width: 277.5,
  },
  innerCardStyle: {
    paddingHorizontal: 16,
    paddingBottom: 15,
    paddingTop: 9.96,
    alignItems: "flex-start",
    // backgroundColor: 'cyan'
  },
  subTextStyle: {
    fontFamily: 'Book',
    fontSize: FontSizes.Primary_Small - 4,
    color: "#2F394B",
    fontWeight: FontWeight.Light,
    lineHeight: 10,
  },
  imageView: {
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: 20,
  },
  pointsLabelStyle: {
    fontFamily: 'Bold',
    fontSize: FontSizes.Primary_Small + 1,
    color: Colors.JadeGreen,
  },
});
