import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MyTheme, ExperienceItem } from '../../models';
import { fontStyles } from '../../assets';
import { fonts } from '../../utils';
import { Section } from '../UI';

type ExperienceTimelineProps = {
  title: string;
  items: ExperienceItem[];
  id?: string;
};

export const ExperienceTimeline = memo<ExperienceTimelineProps>(({ title, items, id }) => (
  <Section title={title} id={id}>
    <View style={styles.timeline}>
      {items.map(item => (
        <View key={`${item.company}-${item.period}`} style={styles.timelineItem}>
          <View style={styles.marker} />
          <View style={styles.content}>
            <Text style={styles.period}>{item.period}</Text>
            <Text style={fonts.itemTitle}>{item.role}</Text>
            <Text style={fonts.itemMeta}>{item.company}</Text>
            <Text style={fonts.body}>{item.summary}</Text>
            {item.highlights.map(highlight => (
              <Text key={highlight} style={styles.bullet}>
                {`- ${highlight}`}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  </Section>
));

const styles = StyleSheet.create({
  timeline: {
    gap: 18,
  },
  timelineItem: {
    flexDirection: 'row',
    gap: 16,
  },
  marker: {
    backgroundColor: MyTheme.colors.green,
    borderRadius: 6,
    height: 12,
    marginTop: 8,
    width: 12,
  },
  content: {
    backgroundColor: MyTheme.colors.panel,
    borderColor: MyTheme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    gap: 8,
    padding: 22,
  },
  period: {
    color: MyTheme.colors.copper,
    fontSize: 13,
    textTransform: 'uppercase',
    ...fontStyles.extraBold,
  },
  bullet: {
    color: MyTheme.colors.muted,
    fontSize: 14,
    lineHeight: 23,
  },
});
