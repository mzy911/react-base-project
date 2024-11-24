module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 自定义规则（可选）
  rules: {
    'header-max-length': [2, 'always', 72],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case']],
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
  },
};
