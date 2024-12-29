# Initiate a WebdriverIO Setup
 > npm init wdio@latest .
 > npm init wdio@latest ./path/to/new/project

# Check - tsconfig.json
 > for "esModuleInterop": true
 > for "module": "ESNext"

# Run Test
 > npx wdio run ./wdio.conf.ts
 > npx wdio run ./wdio.conf.ts --spec example.e2e.ts
 > npx wdio run ./wdio.conf.ts --suite exampleSuiteName