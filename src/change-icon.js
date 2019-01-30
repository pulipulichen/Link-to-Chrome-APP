const resourceHacker = require('node-resourcehacker');

// Use the beta release of Resource Hacker.
process.env['SOURCE_RESOURCE_HACKER'] = 'D:\\xampp\\htdocs\\nodejs-projects\\Link-to-Chrome-APP\\resource_hacker.zip';

resourceHacker({
    operation: 'addoverwrite',
    input: 'register-system-protocol.exe',
    output: 'register-system-protocol2.exe',
    resource: 'weka-icon.ico',
    resourceType: 'ICONGROUP',
    resourceName: '1'
}, (err) => {

    if(err) {
        return console.error(err);
    }

    console.log('Done.');

});