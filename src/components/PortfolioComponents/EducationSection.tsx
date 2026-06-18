import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Education, MyTheme } from "../../models";
import { fonts } from "../../utils";
import { Section } from "../UI";

type EducationSectionProps = {
  title: string;
  education: Education;
  id?: string;
};

export const EducationSection = memo<EducationSectionProps>(({ title, education, id }) => (
  <Section title={title} id={id}>
    <View style={styles.panel}>
      <Text style={fonts.itemTitle}>{education.degree}</Text>
      <Text style={fonts.itemMeta}>{education.institution}</Text>
      <Text style={fonts.body}>{education.graduation}</Text>
      <Text style={fonts.body}>{education.professionalId}</Text>
    </View>
  </Section>
));

const styles = StyleSheet.create({
  panel: {
    backgroundColor: MyTheme.colors.panel,
    borderColor: MyTheme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: 7,
    padding: 22,
  },
});
