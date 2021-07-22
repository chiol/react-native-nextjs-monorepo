const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(
  [
    // 참조할 다른 로컬 패키지와 해당 패키지가 사용하는 의존성 패키지들을 명시
    'app',
    'react-native',
    'styled-components',
  ],
);

module.exports = withPlugins([withTM], {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web', 
    }
    config.resolve.extensions = [
      '.web.ts',
      '.web.tsx',
      '.ts',
      '.tsx',
      '.web.js',
      '.web.jsx',
      '.js',
      '.jsx',
      ...config.resolve.extensions,
    ]
    return config;
  }
});
