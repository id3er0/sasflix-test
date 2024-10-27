import antfu from '@antfu/eslint-config';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  antfu({
    typescript: true,
    stylistic: {
      semi: true,
    },
    ignores: [
      '.idea',
      '**/.idea/**',
      '.output',
      '**/.output/**',
      '.nuxt',
      '**/.nuxt/**',
      '.next',
      '**/.next/**',
      'gen',
      '**/gen/**',
      'opt',
      '**/opt/**',
      'storybook-static',
      '**/storybook-static/**',
    ],
    rules: {
      'ts/consistent-type-definitions': ['error', 'type'],
      'curly': ['error', 'all'],
    },
  }),
);
