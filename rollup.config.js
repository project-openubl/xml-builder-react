import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
// import postcss from 'rollup-plugin-postcss-modules'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve({
      browser: true
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ["**/__tests__/**", "**/__snapshots__/**"],
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["**/*.stories.js", "**/*.stories.tsx"],
      namedExports: {
        // "node_modules/react/react.js": [
        //   "Children",
        //   "Component",
        //   "PropTypes",
        //   "createElement"
        // ],
        // "node_modules/react-dom/index.js": ["render"],
        "node_modules/exenv/index.js": ["canUseDOM"],
        "node_modules/lodash/lodash.js": ["isUndefined"],
        "node_modules/lodash/index.js": ["mergeWith"],
      }
    }),
    postcss({
      modules: true
    }),
    url(),
    svgr()
  ]
}
