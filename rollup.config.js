import typescript from 'rollup-plugin-typescript';
import { uglify } from "rollup-plugin-uglify";
import { name, version } from './package.json';

const banner = `
/*!
 * ${name} v${version}
 * (c) 2018-${new Date().getFullYear()} 楼教主 <fe.52cik@gmail.com> (https://github.com/52cik/${name})
 * Released under the MIT License.
 */
`.trim();


export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'ping.js',
      format: 'umd',
      name: 'ping',
      banner,
    },
    plugins: [
      typescript(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'ping.min.js',
      format: 'umd',
      name: 'ping',
    },
    plugins: [
      typescript(),
      uglify({ output: { preamble: banner } }),
    ],
  },
];
