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
      {groups.map(group => (
        <View key={group.title} style={styles.group}>
          <Text style={styles.groupTitle}>{group.title}</Text>
          <View style={styles.tags}>
            {group.items.map(item => (
              <Tag key={item} text={item} color="blue" />
            ))}
          </View>
        </View>
      ))}
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
    gap: 12,
    padding: 18,
  },
  groupTitle: {
    color: MyTheme.colors.ink,
    fontSize: 18,
    ...fontStyles.extraBold,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
});
