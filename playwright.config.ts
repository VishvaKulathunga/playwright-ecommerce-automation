import { defineConfig } from '@playwright/test';

export default defineConfig({

    testMatch: ['Landing.spec.ts','login.spec.ts','product.spec.ts'],

    workers: 1,

    use: {
        
        screenshot: 'only-on-failure',
        video: 'on',
    },

    reporter: [
        ['dot'],
        ['json', { outputFile: 'jsonReports/report.json' }],
        ['html', { open: 'always' }],
    ],

});