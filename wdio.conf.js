exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    headless: false,
    capabilities: [

        /*{
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['headless', 'disable-gpu']
            }
        },*/
    
    
        {
            maxInstances: 5,
            browserName: 'firefox',
            acceptInsecureCerts: true,
           /* 'moz:firefoxOptions': {
                args: ['-headless']
             }*/
             
            }    
   
],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://e51d40d6-2aa5-448e-9fde-8cdecd7e9cef.serverhub.tripleten-services.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver', 
        'geckodriver', 
        'intercept', 
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}