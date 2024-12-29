# Initiate a WebdriverIO Setup
 > npm init wdio@latest .
 > npm init wdio@latest ./path/to/new/project

# Check - tsconfig.json
 > for "esModuleInterop": true
 > for "module": "ESNext"

# Cucumber step definition steps and feature step mapping
 > Add entry in setting.json - 
    """
    "cucumber.features": [
        "tests/features/*.feature",
    ],
    "cucumber.glue": [
        "tests/step-definitions/**/*.ts",
        "tests/step-definitions/**/*.tsx",
    ],
    """

# Run Test
 > npx wdio run ./wdio.conf.ts
 > npx wdio run ./wdio.conf.ts --spec example.e2e.ts
 > npx wdio run ./wdio.conf.ts --suite exampleSuiteName