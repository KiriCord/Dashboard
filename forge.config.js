const path = require('path');
const rootDir = process.cwd();

module.exports = {
    packagerConfig: {
        asar: true,
    },

    makers: [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "dashboard"
            },
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
              "darwin"
            ]
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {}
        },
        {
            "name": "@electron-forge/maker-rpm",
            "config": {}
        },
    ],
    plugins: [
        [
            '@electron-forge/plugin-webpack',
            {
                devContentSecurity: '',
                port: 3000,
                loggerPort: 9000,
                mainConfig: path.join(rootDir, 'webpack/webpack.main.config.js'),
                renderer: {
                    config: path.join(rootDir, 'webpack/webpack.renderer.config.js'),
                    entryPoints: [
                        {
                            name: 'main_window',
                            rhmr: 'react-hot-loader/patch',
                            html: path.join(rootDir, 'public/index.html'),
                            js: path.join(rootDir, 'src/renderer/renderer.tsx'),
                            preload: {
                                //js: path.join(rootDir, 'src/renderer/rendererPreload.tsx')
                                js: path.join(rootDir, 'src/main/preload.ts')
                            },
                        },
                    ],
                },
            },
        ],
    ],
};