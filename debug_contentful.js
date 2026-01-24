const { createClient } = require('contentful');

const SPACE_ID = '8sq282kn6gkd';
const ACCESS_TOKEN = 'JTktYDhZsD8EtSgnq-f2FBC7iKOgZB-OfBfgL5Zky3s';
const ENTRY_ID = '7vbv4yHqGqQIShCPEwK7zl';

const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
});

async function run() {
    console.log('--- Trying getEntry ---');
    try {
        const entry = await client.getEntry(ENTRY_ID);
        console.log('ENTRY FOUND');
        console.log(JSON.stringify(entry, null, 2));
    } catch (err) {
        console.log('getEntry failed:', err.message || err);
    }

    console.log('\n--- Trying getAsset ---');
    try {
        const asset = await client.getAsset(ENTRY_ID);
        console.log('ASSET FOUND');
        console.log(JSON.stringify(asset, null, 2));
    } catch (err) {
        console.log('getAsset failed:', err.message || err);
    }
}

run();
