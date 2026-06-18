import { memo, PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../utils';

type SectionProps = PropsWithChildren<{
  title: string;
  id?: string;
}>;

export const Section = memo<SectionProps>(({ title, children, id }) => (
  <View nativeID={id} style={styles.container}>
    <Text style={fonts.sectionTitle}>{title}</Text>
    {children}
  </View>
));

const styles = StyleSheet.create({
  container: {
    gap: 18,
  },
});
