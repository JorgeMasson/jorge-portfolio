import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontStyles } from '../../assets';
import { MyTheme, StackGroup } from '../../models';
import { Section, Tag } from '../UI';

type StackSectionProps = {
  title: string;
  groups: StackGroup[];
  id?: string;
};

export const StackSection = memo<StackSectionProps>(({ title, groups, id }) => (
  <Section title={title} id={id}>
    <View style={styles.grid}>
      {groups.map(group => {
        const secondaryItems = group.items.filter(item => !group.featured.includes(item));

        return (
          <View key={group.title} style={styles.group}>
            <View style={styles.accent} />
            <Text style={styles.groupTitle}>{group.title}</Text>
            <Text style={styles.description}>{group.description}</Text>
            <View style={styles.featured}>
              {group.featured.map(item => (
                <View key={item} style={styles.featuredPill}>
                  <Text style={styles.featuredText}>{item}</Text>
                </View>
              ))}
            </View>
            <View style={styles.tags}>
              {secondaryItems.map(item => (
                <Tag key={item} text={item} color="blue" />
              ))}
            </View>
          </View>
        );
      })}
    </View>
  </Section>
));

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  group: {
    backgroundColor: MyTheme.colors.panel,
    borderColor: MyTheme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexBasis: 260,
    flexGrow: 1,
    gap: 14,
    overflow: 'hidden',
    padding: 18,
  },
  accent: {
    backgroundColor: MyTheme.colors.green,
    height: 5,
    marginHorizontal: -18,
    marginTop: -18,
  },
  groupTitle: {
    color: MyTheme.colors.ink,
    fontSize: 20,
    ...fontStyles.extraBold,
  },
  description: {
    color: MyTheme.colors.muted,
    fontSize: 14,
    lineHeight: 21,
  },
  featured: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  featuredPill: {
    backgroundColor: MyTheme.colors.ink,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  featuredText: {
    color: MyTheme.colors.white,
    fontSize: 12,
    ...fontStyles.extraBold,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
});
