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