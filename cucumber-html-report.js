// cucumber-html-report.js
import reporter from 'cucumber-html-reporter';

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber-report.json',
    output: 'cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "Project": "SuiteCRM PFA",
        "Platform": "Windows",
        "Executed": "Local"
    }
};

reporter.generate(options);
