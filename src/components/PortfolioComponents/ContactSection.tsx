import { memo } from 'react';
import type { CSSProperties } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { fontStyles } from '../../assets';
import { ContactFormCopy, MyTheme, Profile } from '../../models';
import { getContactLinks, openUrl } from '../../utils';

type ContactSectionProps = {
  title: string;
  intro: string;
  form: ContactFormCopy;
  profile: Profile;
  isMobile: boolean;
};

export const ContactSection = memo<ContactSectionProps>(({ title, intro, form, profile, isMobile }) => (
  <View nativeID="contact" style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.intro}>{intro}</Text>
    <View style={[styles.content, isMobile && styles.mobileContent]}>
      <form action={`https://formsubmit.co/${profile.email}`} method="POST" style={formStyles.form}>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New portfolio message" />
        <input
          aria-label={form.emailLabel}
          name="email"
          placeholder={form.emailPlaceholder}
          required
          style={formStyles.input}
          type="email"
        />
        <input
          aria-label={form.subjectLabel}
          name="subject"
          placeholder={form.subjectPlaceholder}
          required
          style={formStyles.input}
          type="text"
        />
        <textarea
          aria-label={form.messageLabel}
          name="message"
          placeholder={form.messagePlaceholder}
          required
          rows={5}
          style={{ ...formStyles.input, ...formStyles.textarea }}
        />
        <button style={formStyles.button} type="submit">
          {form.submit}
        </button>
      </form>
      <View style={styles.list}>
        {getContactLinks(profile).map(contact => (
          <Pressable key={contact.label} onPress={() => openUrl(contact.url)} style={styles.row}>
            <Text style={styles.label}>{contact.label}</Text>
            <Text style={[styles.value, isMobile && styles.mobileValue]}>{contact.value}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  </View>
));

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyTheme.colors.ink,
    borderRadius: 8,
    gap: 16,
    padding: 28,
  },
  title: {
    color: MyTheme.colors.white,
    fontSize: 30,
    ...fontStyles.extraBold,
  },
  intro: {
    color: '#d7ded8',
    fontSize: 17,
    lineHeight: 27,
    maxWidth: 760,
  },
  content: {
    alignItems: 'stretch',
    flexDirection: 'row',
    gap: 18,
  },
  mobileContent: {
    flexDirection: 'column',
  },
  list: {
    flex: 1,
    gap: 10,
  },
  row: {
    alignItems: 'center',
    borderColor: MyTheme.colors.contactBorder,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'space-between',
    padding: 14,
  },
  label: {
    color: MyTheme.colors.white,
    fontSize: 14,
    ...fontStyles.extraBold,
  },
  value: {
    color: MyTheme.colors.contactText,
    fontSize: 14,
    textAlign: 'right',
  },
  mobileValue: {
    flex: 1,
    minWidth: 0,
  },
});

const fieldBase: CSSProperties = {
  backgroundColor: '#ffffff',
  border: `1px solid ${MyTheme.colors.contactBorder}`,
  borderRadius: 8,
  color: MyTheme.colors.ink,
  fontFamily: 'inherit',
  fontSize: 14,
  outline: 'none',
  padding: '13px 14px',
  width: '100%',
};

const formStyles: Record<string, CSSProperties> = {
  form: {
    display: 'flex',
    flex: 1.4,
    flexDirection: 'column',
    gap: 10,
    minWidth: 0,
  },
  input: fieldBase,
  textarea: {
    minHeight: 128,
    resize: 'vertical',
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: MyTheme.colors.green,
    border: 0,
    borderRadius: 8,
    color: MyTheme.colors.white,
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 15,
    fontWeight: 800,
    padding: '13px 18px',
  },
};
