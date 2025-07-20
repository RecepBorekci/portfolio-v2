export const LANGUAGE_STYLES = {
  TURKISH: 'bg-blue-500/10 border border-blue-500/50',
  ENGLISH: 'bg-indigo-500/10 border border-indigo-500/50',
  JAPANESE: 'bg-purple-500/10 border border-purple-500/50',
} as const;

export type LanguageStyleKey = keyof typeof LANGUAGE_STYLES;
