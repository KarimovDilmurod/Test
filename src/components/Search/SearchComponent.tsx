import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './SearchComponentStyles';
import R from 'res';

interface IProps {
  inputStyle?: object;
  placeholder?: string;
  onPressBtnSearch?: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchComponent = ({
  inputStyle,
  placeholder = 'Search...',
  onPressBtnSearch,
  value,
  onChangeText,
  ...attributes
}: IProps) => {
  return (
    <View style={[styles.searchContent, inputStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#2C3E50'}
        style={styles.search}
        value={value}
        onChangeText={onChangeText}
        {...attributes}
      />

      <TouchableOpacity
        style={styles.searchBtn}
        hitSlop={10}
        onPress={onPressBtnSearch}>
        <R.icons.SearchIcon color={'white'} size={20} />
      </TouchableOpacity>
    </View>
  );
};
