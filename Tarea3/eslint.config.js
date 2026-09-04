const js = require('@eslint/js');

module.exports = [
    //Reglas para verificar el code
    //Reglas base del Eslint de js
    js.configs.recomended, {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'commonjs' ,
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                __dirname: 'readonly;'
            }

        },
        rules: {
            'no-unused-vars': "warn"
        }
     },   
     //Config adiccional
    {
        files: ['tests/**/*.js'],
        languageOptions: {
        globals: {
            require: 'readonly',
            module: 'writable',
            exports: 'writable',
            describe: 'readonly',
            test:'readonly',
            expect:'readonly',
            beforeEach:'readonly',
            jest:'readonly'
            }
        }

    },
    //Exclusiones Globales (Carpetas/ archivos q no deben analizar)
    {
        ignores: ['node_modules/', 'logs/']
    }
    
    
];