import { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { fontStyles } from '../../assets';
import { MyTheme, Profile } from '../../models';
import { getContactLinks, openUrl } from '../../utils';

type ContactSectionProps = {
  title: string;
  intro: string;
  profile: Profile;
  isMobile: boolean;
};

export const ContactSection = memo<ContactSectionProps>(({ title, intro, profile, isMobile }) => (
  <View nativeID="contact" style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.intro}>{intro}</Text>
    <View style={styles.list}>
      {getContactLinks(profile).map(contact => (
        <Pressable key={contact.label} onPress={() => openUrl(contact.url)} style={styles.row}>
          <Text style={styles.label}>{contact.label}</Text>
          <Text style={[styles.value, isMobile && styles.mobileValue]}>{contact.value}</Text>
        </Pressable>
      ))}
    </View>
  </View>
));

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyTheme.colors.ink,
    borderRadius: 8,
    gap: 16,
    padding: 28,
  },
  title: {
    color: MyTheme.colors.white,
    fontSize: 30,
    ...fontStyles.extraBold,
  },
  intro: {
    color: '#d7ded8',
    fontSize: 17,
    lineHeight: 27,
    maxWidth: 760,
  },
  list: {
    gap: 10,
  },
  row: {
    alignItems: 'center',
    borderColor: MyTheme.colors.contactBorder,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'space-between',
    padding: 14,
  },
  label: {
    color: MyTheme.colors.white,
    fontSize: 14,
    ...fontStyles.extraBold,
  },
  value: {
    color: MyTheme.colors.contactText,
    fontSize: 14,
    textAlign: 'right',
  },
  mobileValue: {
    flex: 1,
    minWidth: 0,
  },
});
