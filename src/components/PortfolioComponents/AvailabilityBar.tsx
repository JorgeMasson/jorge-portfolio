import { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { fontStyles } from '../../assets';
import { MyTheme, Profile } from '../../models';
import { getContactLinks, openUrl } from '../../utils';

type AvailabilityBarProps = {
  text: string;
  profile: Profile;
  isMobile: boolean;
};

export const AvailabilityBar = memo<AvailabilityBarProps>(({ text, profile, isMobile }) => (
  <View style={[styles.container, isMobile && styles.mobileContainer]}>
    <Text style={styles.text}>{text}</Text>
    <View style={styles.pills}>
      {getContactLinks(profile).map(contact => (
        <Pressable key={contact.label} onPress={() => openUrl(contact.url)} style={styles.pill}>
          <Text style={styles.pillText}>{contact.label}</Text>
        </Pressable>
      ))}
    </View>
  </View>
));

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: MyTheme.colors.softPanel,
    borderColor: MyTheme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
    padding: 16,
  },
  mobileContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  text: {
    color: MyTheme.colors.ink,
    fontSize: 15,
    ...fontStyles.bold,
  },
  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pill: {
    backgroundColor: MyTheme.colors.panel,
    borderColor: MyTheme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  pillText: {
    color: MyTheme.colors.ink,
    fontSize: 13,
    ...fontStyles.bold,
  },
});
