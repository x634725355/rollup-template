const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { babel } = require('@rollup/plugin-babel');
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require('rollup-plugin-typescript2');
const { imageHandle } = require('rollup-plugins-csc-images');
const postcss = require('rollup-plugin-postcss');
const rollPostcssConfig = require("./postcss.config.js");

const path = require('path');
const root = process.cwd();
const inputOptions = {
  // 写你自己的入口文件
  input: "src/index.ts",
  // 写自己要排除的依赖
  external: ["react", "react-dom", "antd"],
  // 自己的插件
  plugins: [
    nodeResolve(), // 必写!! 让rollup能够定位node_modules里面的依赖
    postcss(rollPostcssConfig),
    commonjs(), // 必写!! 让rollup能够解析commonjs格式的包
    // ts文件转换
    typescript({
      tsconfig: path.resolve(root, 'tsconfig.json'),
      rollupCommonJSResolveHack: false,
      clean: true,
      useTsconfigDeclarationDir: true,
    }),
    // 代码降级
    babel({
      babelHelpers: 'bundled',
      exclude: '**/node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    // 处理js,ts中的图片
    imageHandle()
  ],
};

const outputOptions = {
  file: 'dist/index.js', // 输出文件
  format: "esm", // 输出文件类型
  exports: "named", // 具体解释 https://www.rollupjs.com/guide/big-list-of-options#exports
  sourcemap: true,  // 输出map文件
  plugins: [],  // 输出时要用到的插件 一般不填
};

export default {
  ...inputOptions,
  output: outputOptions,
};