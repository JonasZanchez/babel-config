module.exports = function (api) {
    api.cache.using(() => process.env.NODE_ENV);

    const presets = [
        // require('@babel/preset-react'),
        // require('@babel/preset-typescrip'),
        // require('@babel/preset-env'),
        "@babel/preset-react",
        "@babel/preset-typescript",
        '@babel/preset-env'
    ];
    const plugins = [
        [
            '@babel/plugin-transform-typescript',
            {
                isTSX: true,
                allowNamespaces: true,
            },
        ],
    ]

    return {
        presets,
        plugins
    };
};  