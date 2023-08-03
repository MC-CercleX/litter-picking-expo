import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

const FlatListComp = ({
  data,
  renderItem,
  keyExtractor,
  ListHeaderComponent,
  ListFooterComponent,
  ItemSeparatorComponent,
  refreshing,
  onRefresh,
  onEndReached,
  onEndReachedThreshold,
  horizontal,
  numColumns,
  flatlistStyle,
  columnWrapperStyle,
  scrollEnabled,
  contentContainerStyle,
}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal={horizontal}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      numColumns={numColumns}
      style={flatlistStyle}
      columnWrapperStyle={columnWrapperStyle}
      scrollEnabled={scrollEnabled}
      contentContainerStyle={contentContainerStyle}
    />
  );
};

export default FlatListComp;


const styles = StyleSheet.create({})