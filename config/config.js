module.exports = {
    /**
     * Name of the integration which is displayed in the Polarity integrations user interface
     *
     * @type String
     * @required
     */
    name: "World Trading Data",
    /**
     * The acronym that appears in the notification window when information from this integration
     * is displayed.  Note that the acronym is included as part of each "tag" in the summary information
     * for the integration.  As a result, it is best to keep it to 4 or less characters.  The casing used
     * here will be carried forward into the notification window.
     *
     * @type String
     * @required
     */
    acronym: "WT",
    /**
     * Description for this integration which is displayed in the Polarity integrations user interface
     *
     * @type String
     * @optional
     */
    description: "World Trading Data provides RESTful API endpoints which return market data in near real time or historical end of day data. These can be used to gain access to financial data for your own applications or projects.",
    entityTypes: [],
    customTypes: [
        {
            key: 'ticker',
            regex: /(NYSE|AMEX|NASDAQ):([a-zA-Z]{1,5}[\.]?[A-Z]{1}?)/
        }
    ],
    /**
     * An array of style files (css or less) that will be included for your integration. Any styles specified in
     * the below files can be used in your custom template.
     *
     * @type Array
     * @optional
     */
    "styles": [
        "./styles/wt.less",
    ],
    /**
     * Provide custom component logic and template for rendering the integration details block.  If you do not
     * provide a custom template and/or component then the integration will display data as a table of key value
     * pairs.
     *
     * @type Object
     * @optional
     */
    block: {
        component: {
            file: "./components/wt-block.js"
        },
        template: {
            file: "./templates/wt-block.hbs"
        }
    },
    summary: {
        component: {
            file: "./components/wt-summary.js"
        },
        template: {
            file: "./templates/wt-summary.hbs"
        }
    },
    request: {
        // Provide the path to your certFile. Leave an empty string to ignore this option.
        // Relative paths are relative to the World Trading integration's root directory
        cert: '',
        // Provide the path to your private key. Leave an empty string to ignore this option.
        // Relative paths are relative to the World Trading integration's root directory
        key: '',
        // Provide the key passphrase if required.  Leave an empty string to ignore this option.
        // Relative paths are relative to the World Trading integration's root directory
        passphrase: '',
        // Provide the Certificate Authority. Leave an empty string to ignore this option.
        // Relative paths are relative to the World Trading integration's root directory
        ca: '',
        // An HTTP proxy to be used. Supports proxy Auth with Basic Auth, identical to support for
        // the url parameter (by embedding the auth info in the uri)
        proxy: '',
        /**
         * If set to false, the integeration will ignore SSL errors.  This will allow the integration to connect
         * to World Trading  without valid SSL certificates.  Please note that we do NOT recommending setting this
         * to false in a production environment.
         */
        rejectUnauthorized: true
    },
    logging: {
        level: 'info',  //trace, debug, info, warn, error, fatal
    },
    /**
     * Options that are displayed to the user/admin in the Polarity integration user-interface.  Should be structured
     * as an array of option objects.
     *
     * @type Array
     * @optional
     */
    "options": [
        {
            "key": "url",
            "name": "World Trading Data URL",
            "description": "Base URL for World Trading Data",
            "default": "https://www.worldtradingdata.com",
            "type": "text",
            "userCanEdit": false,
            "adminOnly": true
        },
        {
            "key": "apiKey",
            "name": "API Key",
            "description": "World Trading Data API Key",
            "default": "",
            "type": "password",
            "userCanEdit": true,
            "adminOnly": false
        }
    ]
};
