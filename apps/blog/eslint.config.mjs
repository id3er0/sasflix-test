import antfu from '@antfu/eslint-config';

export default antfu({
  typescript: {
    enabled: true,
    tsconfigPath: './tsconfig.json',
  },
  vue: true,
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
});
