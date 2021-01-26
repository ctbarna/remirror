import MonacoEditorWebpackPlugin from 'monaco-editor-webpack-plugin';
import type { Configuration } from 'webpack';
import WorkerPlugin from 'worker-plugin';

export default {
  stories: ['./src/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config: Configuration): Promise<Configuration> => {
    config.module?.rules.push({
      test: /\.tsx?$/,
      use: [{ loader: require.resolve('babel-loader'), options: require('./.babelrc.js') }],
      exclude: [/node_modules/],
    });

    const plugins = config.plugins ?? [];
    const resolve = config.resolve ?? {};
    resolve.extensions = resolve.extensions ?? [];

    resolve.extensions.push('.ts', '.tsx');
    plugins.push(
      new WorkerPlugin(),
      new MonacoEditorWebpackPlugin({
        languages: ['typescript', 'javascript', 'json', 'markdown', 'css'],
      }),
    );

    const alias = resolve.alias ?? {};
    config.resolve = resolve;
    config.plugins = plugins;

    // Use emotion as an alias for linaria.
    alias['@linaria/core'] = '@emotion/css';

    return config;
  },
};