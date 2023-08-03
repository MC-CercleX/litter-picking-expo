import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const TextInputComp = ({
  style,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  secureTextEntry,
  keyboardType,
  returnKeyType,
  onSubmitEditing,
  autoFocus,
  editable,
  maxLength,
  placeholderTextColor,
  cursorColor,
  numberOfLines,
}) => {
  return (
      <TextInput
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        autoFocus={autoFocus}
        editable={editable}
        maxLength={maxLength}
        placeholderTextColor={placeholderTextColor}
        cursorColor={cursorColor}
        numberOfLines={numberOfLines}
      />
  );
};

const styles = StyleSheet.create({
});

export default TextInputComp;