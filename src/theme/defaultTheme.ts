import { DefaultTheme, Theme } from '@react-navigation/native';

import { colors } from './colors.ts';

export const DefaultAppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: colors.text,
    border: colors.border,
    primary: colors.primary,
    background: colors.backgroundLight,
  },
};
