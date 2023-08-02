import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextModal = (props) => {
  return <Text ellipsizeMode={props?.ellipsizeMode} numberOfLines={props?.numberOfLines} onPress={props?.onPress} style={props?.style}>{props?.children}</Text>;
};

export default TextModal;

const styles = StyleSheet.create({});
