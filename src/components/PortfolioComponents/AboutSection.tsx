import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MyTheme } from '../../models';
import { fonts } from '../../utils';
import { Section } from '../UI';

type AboutSectionProps = {
  title: string;
  paragraphs: string[];
  id?: string;
};

export const AboutSection = memo<AboutSectionProps>(({ title, paragraphs, id }) => (
  <Section title={title} id={id}>
    <View style={styles.panel}>
      {paragraphs.map(paragraph => (
        <Text key={paragraph} style={fonts.body}>
          {paragraph}
        </Text>
      ))}
    </View>
  </Section>
));

const styles = StyleSheet.create({
  panel: {
    backgroundColor: MyTheme.colors.panel,
    borderColor: MyTheme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    padding: 24,
  },
});
