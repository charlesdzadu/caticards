export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Cati - La carte de visite des professionnels',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/i18n',
        '@nuxtjs/pwa', [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: process.env.FIREBASE_APIKEY,
                    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
                    appId: process.env.FIREBASE_APP_ID,
                    measurementId: process.env.FIREBASE_MEASUREMENT_ID
                },
                services: {
                    auth: true,
                    firestore: true,
                    storage: true,
                    performance: true,
                    analytics: true,
                }
            }
        ],
    ],


    i18n: {
        locales: [
            { code: 'en', iso: 'en-US', file: 'en.json' },
            { code: 'fr', iso: 'fr-FR', file: 'fr.json' },
        ],
        defaultLocale: 'fr',
        langDir: "~/lang/",
        vueI18n: {
            fallbackLocale: 'fr',
        }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'fr'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},


    publicRuntimeConfig: {
        baseURL: process.env.BASE_URL,

        firebaseApiKey: process.env.FIREBASE_APIKEY,
        firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
        firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
        firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        firesebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        firebaseAppId: process.env.FIREBASE_APP_ID,
        firebaseeasurementId: process.env.FIREBASE_MEASUREMENT_ID

    },
    privateRuntimeConfig: {}
}