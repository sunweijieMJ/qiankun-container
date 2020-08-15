module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        equire: true,
        process: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off', // 禁用 console
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁用 debugger
        '@typescript-eslint/no-var-requires': 'off',
    }
}
