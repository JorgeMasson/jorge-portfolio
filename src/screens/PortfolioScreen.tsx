import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import {
  AboutSection,
  AvailabilityBar,
  ContactSection,
  EducationSection,
  ExperienceTimeline,
  Header,
  Hero,
  ProjectsSection,
  StackSection,
} from '../components/PortfolioComponents';
import { usePortfolioLayout } from '../hooks';
import { Language, MyTheme } from '../models';
import { education, experience, portfolioCopy, profile, projects, stackGroups } from '../utils';

export const PortfolioScreen = () => {
  const [language, setLanguage] = useState<Language>('en');
  const { isTablet, isMobile } = usePortfolioLayout();
  const copy = portfolioCopy[language];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={[styles.page, isMobile && styles.mobilePage]}>
        <Header
          name={profile.name}
          nav={copy.nav}
          language={language}
          languageLabel={copy.languageLabel}
          isMobile={isMobile}
          onLanguageChange={setLanguage}
        />
        <Hero
          profile={profile}
          eyebrow={copy.eyebrow}
          title={copy.title}
          subtitle={copy.subtitle}
          primaryCta={copy.primaryCta}
          secondaryCta={copy.secondaryCta}
          metrics={copy.metrics}
          isTablet={isTablet}
          isMobile={isMobile}
        />
        <AvailabilityBar text={copy.availability} profile={profile} isMobile={isMobile} />
        <AboutSection id="about" title={copy.sections.about} paragraphs={copy.aboutText} />
        <ExperienceTimeline
          id="experience"
          title={copy.sections.experience}
          items={experience[language]}
        />
        <ProjectsSection title={copy.sections.projects} projects={projects[language]} isMobile={isMobile} />
        <StackSection id="stack" title={copy.sections.stack} groups={stackGroups} />
        <EducationSection id="education" title={copy.sections.education} education={education[language]} />
        <ContactSection
          title={copy.sections.contact}
          intro={copy.contactIntro}
          profile={profile}
          isMobile={isMobile}
        />
        <Text style={styles.footer}>{copy.footer}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: MyTheme.colors.paper,
    flex: 1,
  },
  page: {
    gap: 44,
    marginHorizontal: 'auto',
    maxWidth: 1180,
    paddingHorizontal: 24,
    paddingVertical: 24,
    width: '100%',
  },
  mobilePage: {
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  footer: {
    color: MyTheme.colors.muted,
    fontSize: 13,
    paddingBottom: 18,
    textAlign: 'center',
  },
});
