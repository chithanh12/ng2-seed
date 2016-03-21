'use strict';
var GulpConfig = (function () {
    function gulpConfig(plugins) {
        var profile = plugins.util.env.profile;
        profile = (profile ? profile : 'dev').toLowerCase();
        if (profile == 'production') {
            profile = 'prod';
        }
        plugins.util.log('Using ' + profile + ' profile...');
        return {
            profile: profile,
            debug: profile == 'dev',
            output: profile == 'prod'? 'dist' : 'build',
            port: 4000
        };
    }
    return gulpConfig;
})();
module.exports = GulpConfig;