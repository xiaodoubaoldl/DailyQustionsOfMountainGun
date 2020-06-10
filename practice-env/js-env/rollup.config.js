import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
    input: path.resolve(__dirname, './src/index.js'),
    output: {
      file: path.resolve(__dirname, './lib/index.js'),
      format: 'umd',
      name: 'JSEnv'
    },
    plugins: [     
        babel({
            presets: [
                "@babel/preset-env",
            ]
        }),
        resolve()
    ]
  };