import { memo, PropsWithChildren } from 'react';
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { fontStyles } from '../../assets';
import { MyTheme } from '../../models';

type ButtonVariant = 'filled' | 'outlined';

type ButtonProps = PropsWithChildren<{
  text?: string;
  variant?: ButtonVariant;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}>;

export const Button = memo<ButtonProps>(
  ({ text, variant = 'filled', onPress, style, textStyle, children }) => {
    const isFilled = variant === 'filled';

    return (
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={[
          styles.container,
          isFilled ? styles.filledContainer : styles.outlinedContainer,
          style,
        ]}
      >
        {text ? (
          <Text style={[styles.label, isFilled ? styles.filledLabel : styles.outlinedLabel, textStyle]}>
            {text}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    minHeight: 47,
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  filledContainer: {
    backgroundColor: MyTheme.colors.ink,
  },
  outlinedContainer: {
    borderColor: MyTheme.colors.border,
    borderWidth: 1,
  },
  label: {
    fontSize: 15,
    ...fontStyles.bold,
  },
  filledLabel: {
    color: MyTheme.colors.white,
  },
  outlinedLabel: {
    color: MyTheme.colors.ink,
  },
});
