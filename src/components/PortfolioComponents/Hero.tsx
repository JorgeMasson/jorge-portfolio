import { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fontStyles, images } from '../../assets';
import { Button } from '../UI';
import { Metric, MyTheme, Profile } from '../../models';
import { navigateToHash } from '../../utils';

type HeroProps = {
  profile: Profile;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  metrics: Metric[];
  isTablet: boolean;
  isMobile: boolean;
};

export const Hero = memo<HeroProps>(
  ({
    profile,
    eyebrow,
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    metrics,
    isTablet,
    isMobile,
  }) => (
    <View style={[styles.container, isTablet && styles.stacked]}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={[styles.title, isTablet && styles.tabletTitle, isMobile && styles.mobileTitle]}>
          {title}
        </Text>
        <Text style={[styles.subtitle, isMobile && styles.mobileSubtitle]}>{subtitle}</Text>
        <View style={styles.buttons}>
          <Button text={primaryCta} onPress={() => navigateToHash('projects')} />
          <Button text={secondaryCta} variant="outlined" onPress={() => navigateToHash('contact')} />
        </View>
      </View>

      <View style={[styles.profilePanel, isTablet && styles.profilePanelStacked]}>
        <Image
          accessibilityLabel={profile.name}
          resizeMode="cover"
          source={{ uri: images.profilePhoto }}
          style={styles.avatar}
        />
        <Text style={styles.profileName}>{profile.name}</Text>
        <Text style={styles.profileRole}>React Native / Frontend</Text>
        <Text style={styles.profileLocation}>{profile.location}</Text>
        <View style={styles.signalGrid}>
          {metrics.map(metric => (
            <View key={metric.label} style={styles.signalItem}>
              <Text style={styles.signalValue}>{metric.value}</Text>
              <Text style={styles.signalLabel}>{metric.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  ),
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flexDirection: 'row',
    gap: 28,
  },
  stacked: {
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    minWidth: 0,
  },
  eyebrow: {
    color: MyTheme.colors.green,
    fontSize: 14,
    letterSpacing: 0,
    marginBottom: 16,
    textTransform: 'uppercase',
    ...fontStyles.extraBold,
  },
  title: {
    color: MyTheme.colors.ink,
    fontSize: 58,
    lineHeight: 64,
    maxWidth: 820,
    ...fontStyles.extraBold,
  },
  tabletTitle: {
    fontSize: 44,
    lineHeight: 50,
  },
  mobileTitle: {
    fontSize: 34,
    lineHeight: 40,
  },
  subtitle: {
    color: MyTheme.colors.muted,
    fontSize: 19,
    lineHeight: 30,
    marginTop: 22,
    maxWidth: 720,
  },
  mobileSubtitle: {
    fontSize: 17,
    lineHeight: 27,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 28,
  },
  profilePanel: {
    backgroundColor: MyTheme.colors.panel,
    borderColor: MyTheme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexBasis: 342,
    gap: 10,
    justifyContent: 'center',
    padding: 24,
    shadowColor: MyTheme.colors.ink,
    shadowOpacity: 0.08,
    shadowRadius: 24,
  },
  profilePanelStacked: {
    flexBasis: 'auto',
    width: '100%',
  },
  avatar: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    borderColor: MyTheme.colors.border,
    borderWidth: 1,
    height: 132,
    marginBottom: 10,
    width: 132,
  },
  profileName: {
    color: MyTheme.colors.ink,
    fontSize: 24,
    lineHeight: 30,
    ...fontStyles.extraBold,
  },
  profileRole: {
    color: MyTheme.colors.blue,
    fontSize: 15,
    ...fontStyles.bold,
  },
  profileLocation: {
    color: MyTheme.colors.muted,
    fontSize: 14,
  },
  signalGrid: {
    gap: 10,
    marginTop: 14,
  },
  signalItem: {
    borderColor: MyTheme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
  },
  signalValue: {
    color: MyTheme.colors.copper,
    fontSize: 24,
    ...fontStyles.extraBold,
  },
  signalLabel: {
    color: MyTheme.colors.muted,
    fontSize: 13,
    marginTop: 2,
  },
});
