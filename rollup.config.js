import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'index.js',
    format: 'umd',
    moduleName: 'd3',
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        })
    ],
    dest: 'build/d3-parallel-links.js'
};