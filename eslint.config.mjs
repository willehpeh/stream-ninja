import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist'
    ]
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.js',
      '**/*.jsx'
    ],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [
            '^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'
          ],
          depConstraints: [
            {
              sourceTag: 'scope:domain',
              onlyDependOnLibsWithTags: [
                'scope:domain'
              ]
            },
            {
              sourceTag: 'scope:application',
              onlyDependOnLibsWithTags: [
                'scope:domain',
                'scope:application'
              ]
            },
            {
              sourceTag: 'scope:infrastructure',
              onlyDependOnLibsWithTags: [
                'scope:domain',
                'scope:application',
                'scope:infrastructure'
              ]
            },
            {
              sourceTag: 'scope:api',
              onlyDependOnLibsWithTags: [
                'scope:application',
                'scope:infrastructure',
                'scope:api'
              ]
            },
            {
              sourceTag: 'scope:tests',
              onlyDependOnLibsWithTags: [
                'scope:domain',
                'scope:application',
                'scope:infrastructure',
                'scope:tests'
              ]
            }
          ]
        }
      ]
    }
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs'
    ],
    // Override or add rules here
    rules: {}
  }
];
