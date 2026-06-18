import { memo } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { fontStyles } from '../../assets';
import { MyTheme } from '../../models';

type TagProps = {
  text: string;
  color?: 'green' | 'blue';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Tag = memo<TagProps>(({ text, color = 'green', style, textStyle }) => (
  <View style={[styles.container, color === 'green' ? styles.green : styles.blue, style]}>
    <Text style={[styles.label, color === 'green' ? styles.greenText : styles.blueText, textStyle]}>
      {text}
    </Text>
  </View>
));

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  green: {
    backgroundColor: MyTheme.colors.tagGreen,
  },
  blue: {
    backgroundColor: MyTheme.colors.tagBlue,
  },
  label: {
    fontSize: 12,
    ...fontStyles.bold,
  },
  greenText: {
    color: MyTheme.colors.green,
  },
  blueText: {
    color: MyTheme.colors.blue,
  },
});
