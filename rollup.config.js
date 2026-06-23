import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/MenuHelper.jsx',        // Tu componente
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({ 
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    postcss({
      extract: 'menuHelper.css',     // Extrae el CSS a un archivo separado
      minimize: true,
      sourceMap: true
    })
  ],
  external: ['react', 'react-dom']   // No incluir React en el bundle
};