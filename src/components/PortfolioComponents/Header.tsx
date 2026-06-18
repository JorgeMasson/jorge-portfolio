import { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { fontStyles } from '../../assets';
import { LANGUAGES, navigateToHash } from '../../utils';
import { Language, MyTheme, NavItem } from '../../models';

type HeaderProps = {
  name: string;
  nav: NavItem[];
  language: Language;
  languageLabel: string;
  isMobile: boolean;
  onLanguageChange: (language: Language) => void;
};

export const Header = memo<HeaderProps>(
  ({ name, nav, language, languageLabel, isMobile, onLanguageChange }) => (
    <View style={[styles.container, isMobile && styles.mobileContainer]}>
      <Text style={styles.brand}>{name}</Text>
      <View style={[styles.actions, isMobile && styles.mobileActions]}>
        {!isMobile && (
          <View style={styles.nav}>
            {nav.map(item => (
              <Pressable
                key={item.target}
                accessibilityRole="link"
                onPress={() => navigateToHash(item.target)}
                style={styles.navLink}
              >
                <Text style={styles.navItem}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        )}
        <View style={styles.languageSwitch} accessibilityLabel={languageLabel}>
          {LANGUAGES.map(item => (
            <Pressable
              key={item}
              accessibilityRole="button"
              onPress={() => onLanguageChange(item)}
              style={[styles.languageButton, language === item && styles.languageButtonActive]}
            >
              <Text
                style={[
                  styles.languageButtonText,
                  language === item && styles.languageButtonTextActive,
                ]}
              >
                {item.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  ),
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 18,
    justifyContent: 'space-between',
  },
  mobileContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  brand: {
    color: MyTheme.colors.ink,
    fontSize: 18,
    ...fontStyles.bold,
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 18,
  },
  mobileActions: {
    alignItems: 'flex-start',
    width: '100%',
  },
  nav: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 18,
  },
  navLink: {
    paddingVertical: 8,
  },
  navItem: {
    color: MyTheme.colors.muted,
    fontSize: 14,
  },
  languageSwitch: {
    backgroundColor: '#e7ebe6',
    borderColor: MyTheme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    padding: 3,
  },
  languageButton: {
    borderRadius: 6,
    minWidth: 42,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  languageButtonActive: {
    backgroundColor: MyTheme.colors.ink,
  },
  languageButtonText: {
    color: MyTheme.colors.muted,
    fontSize: 12,
    textAlign: 'center',
    ...fontStyles.bold,
  },
  languageButtonTextActive: {
    color: MyTheme.colors.white,
  },
});
