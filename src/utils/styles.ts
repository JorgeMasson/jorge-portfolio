import { StyleSheet } from 'react-native';
import { fontStyles } from '../assets';
import { MyTheme } from '../models';

export const viewStyles = StyleSheet.create({
  rowCentered: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowJustified: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  fullWidth: {
    width: '100%',
  },
});

export const fonts = StyleSheet.create({
  body: {
    color: MyTheme.colors.muted,
    fontSize: 15,
    lineHeight: 24,
    ...fontStyles.regular,
  },
  sectionTitle: {
    color: MyTheme.colors.ink,
    fontSize: 30,
    ...fontStyles.extraBold,
  },
  itemTitle: {
    color: MyTheme.colors.ink,
    fontSize: 21,
    lineHeight: 28,
    ...fontStyles.extraBold,
  },
  itemMeta: {
    color: MyTheme.colors.blue,
    fontSize: 14,
    ...fontStyles.bold,
  },
});
