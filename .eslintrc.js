module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/external-module-folders': ['node_modules'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: 'node_modules'
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json'
      }
    }
  },
  globals: {
    NodeJS: true,
    JSX: true
  },
  rules: {
    // Tolerance, we remove rules from here so it prevent conflicts with our code
    // Here we prevent @react-native-community to force use prettier if not necessary
    'prettier/prettier': 0,
    'react-native/no-inline-styles': 0,

    // Warning, auto fix but doesn't block pushs if rules not respected
    indent: ['warn', 2],
    'func-call-spacing': ['warn', 'never'],
    'comma-dangle': ['warn', 'never'],
    'semi': ['warn', 'never'],
    'no-unneeded-ternary': 'warn',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['sibling', 'parent']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: '@theme/**',
            group: 'internal'
          },
          {
            pattern: '@components/**',
            group: 'internal'
          },
          {
            pattern: '@atoms/**',
            group: 'internal'
          },
          {
            pattern: '@molecules/**',
            group: 'internal'
          },
          {
            pattern: '@organisms/**',
            group: 'internal'
          },
          {
            pattern: '@config/**',
            group: 'internal'
          },
          {
            pattern: '@modules/**',
            group: 'internal'
          },
          {
            pattern: '@constants/**',
            group: 'internal'
          },
          {
            pattern: '@pages/**',
            group: 'internal'
          },
          {
            pattern: '@navigation/**',
            group: 'internal'
          },
          {
            pattern: '@assets/**',
            group: 'internal'
          },
          {
            pattern: './',
            group: 'sibling'
          }
        ]
      }
    ],
    'no-multiple-empty-lines': ['warn', {max: 1}],
    'object-curly-spacing': ['warn', 'never'],
    'array-bracket-spacing': ['warn', 'never'],
    'react/jsx-max-props-per-line': ['warn', {maximum: 1, when: 'always'}],
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-sort-props': ['warn', {'ignoreCase': true}],
    'arrow-parens': ['warn', 'as-needed'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {vars: 'local', argsIgnorePattern: '^_'}
    ],
    'no-unused-vars': 0,

    // Rules overriding @react-native-community/eslint
    'comma-spacing': ['warn', {before: false, after: true}],
    'react-hooks/exhaustive-deps': 'warn',
    'key-spacing': 'warn',
    'no-lonely-if': 'warn'
  }
}
