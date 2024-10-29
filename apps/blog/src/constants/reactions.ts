import type { ObjectValues } from '~/types/utils';

export const REACTIONS = {
  LIKE: 'like',
  DISLIKE: 'dislike',
} as const;

// export type ReactionsKeys = keyof typeof REACTIONS;
export type ReactionsValues = ObjectValues<typeof REACTIONS>;
