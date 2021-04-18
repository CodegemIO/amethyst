import jsx from 'acorn-jsx';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import {uglify} from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    babel({
      presets: ['@babel/preset-react'],
    }),
    commonjs(),
    peerDepsExternal(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    typescript(),
    uglify(),
  ],
  external: ['react', 'react-dom'],
};
