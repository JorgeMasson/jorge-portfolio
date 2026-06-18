import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontStyles } from '../../assets';
import { MyTheme, Project } from '../../models';
import { fonts } from '../../utils';
import { Section, Tag } from '../UI';

type ProjectsSectionProps = {
  title: string;
  projects: Project[];
  isMobile: boolean;
};

export const ProjectsSection = memo<ProjectsSectionProps>(({ title, projects, isMobile }) => (
  <Section title={title} id="projects">
    <View style={styles.grid}>
      {projects.map((project, index) => (
        <View key={project.name} style={[styles.card, isMobile && styles.mobileCard]}>
          <View style={styles.visual}>
            <View style={[styles.visualBar, { height: 42 + index * 14 }]} />
            <View style={[styles.visualBar, styles.visualBarAlt, { height: 76 - index * 8 }]} />
            <View style={[styles.visualBar, styles.visualBarAccent, { height: 58 + index * 6 }]} />
          </View>
          <Text style={styles.type}>{project.type}</Text>
          <Text style={styles.name}>{project.name}</Text>
          <Text style={fonts.itemMeta}>{project.role}</Text>
          <Text style={fonts.body}>{project.description}</Text>
          <Text style={styles.impact}>{project.impact}</Text>
          <View style={styles.tags}>
            {project.stack.map(tag => (
              <Tag key={tag} text={tag} />
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
    gap: 18,
  },
  card: {
    backgroundColor: MyTheme.colors.panel,
    borderColor: MyTheme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexBasis: 520,
    flexGrow: 1,
    gap: 10,
    minWidth: 280,
    padding: 20,
  },
  mobileCard: {
    flexBasis: '100%',
    minWidth: 0,
  },
  visual: {
    alignItems: 'flex-end',
    backgroundColor: '#eef1ee',
    borderColor: MyTheme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    height: 112,
    justifyContent: 'flex-end',
    marginBottom: 6,
    overflow: 'hidden',
    padding: 14,
  },
  visualBar: {
    backgroundColor: MyTheme.colors.green,
    borderRadius: 4,
    width: 38,
  },
  visualBarAlt: {
    backgroundColor: MyTheme.colors.blue,
  },
  visualBarAccent: {
    backgroundColor: MyTheme.colors.copper,
  },
  type: {
    color: MyTheme.colors.copper,
    fontSize: 12,
    textTransform: 'uppercase',
    ...fontStyles.extraBold,
  },
  name: {
    color: MyTheme.colors.ink,
    fontSize: 24,
    ...fontStyles.extraBold,
  },
  impact: {
    backgroundColor: MyTheme.colors.impact,
    borderColor: MyTheme.colors.impactBorder,
    borderRadius: 8,
    borderWidth: 1,
    color: MyTheme.colors.impactText,
    fontSize: 14,
    lineHeight: 22,
    padding: 12,
    ...fontStyles.bold,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
});
