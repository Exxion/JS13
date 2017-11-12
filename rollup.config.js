import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'app/main.js',
    output: {
        file: 'dist/js/bundle.js',
        format: 'iife',
        sourcemap: 'inline'
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs()
    ]
}