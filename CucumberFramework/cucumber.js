module.exports = {
    default: {
        requireModule: ['ts-node/register'],

        require: [
            'steps/*/.ts',
            'hooks/*/.ts'
        ],

        paths: [
            'features/*/.feature'
        ],

        format: [
            'progress',
            'html:reports/cucumber-report.html'
        ],

        formatOptions: {
            snippetInterface: 'async-await'
        }
    }
};