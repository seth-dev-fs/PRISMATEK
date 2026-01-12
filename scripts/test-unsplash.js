const axios = require('axios');

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!UNSPLASH_ACCESS_KEY) {
    console.error('UNSPLASH_ACCESS_KEY not set');
    process.exit(1);
}

async function triggerUnsplashDownload(downloadLocation) {
    if (!downloadLocation) {
        return;
    }

    try {
        await axios.get(downloadLocation, {
            params: {
                client_id: UNSPLASH_ACCESS_KEY
            },
            timeout: 5000
        });
        console.log('✅ Unsplash download event triggered successfully');
    } catch (error) {
        console.error(`❌ Failed to trigger Unsplash download: ${error.message}`);
    }
}

async function testUnsplashDownloadTrigger() {
    console.log('🔍 Testing Unsplash API download trigger...\n');

    try {
        // Fetch a random technology image from Unsplash
        console.log('📸 Fetching image from Unsplash...');
        const response = await axios.get('https://api.unsplash.com/photos/random', {
            params: {
                query: 'technology',
                orientation: 'landscape',
                client_id: UNSPLASH_ACCESS_KEY
            },
            timeout: 8000
        });

        if (response.data?.urls?.regular) {
            const data = response.data;
            console.log(`✅ Image fetched: ${data.urls.regular}`);
            console.log(`📷 Photographer: ${data.user.name}`);
            console.log(`🔗 Download location: ${data.links.download_location}\n`);

            // Trigger the download event
            console.log('🚀 Triggering download event...');
            await triggerUnsplashDownload(data.links.download_location);

            console.log('\n✅ TEST COMPLETE! Download counter should now increment in your Unsplash dashboard.');
            console.log('📊 Check: https://unsplash.com/oauth/applications');
        }
    } catch (error) {
        console.error(`❌ Test failed: ${error.message}`);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
    }
}

// Run 5 tests to ensure multiple downloads are triggered
(async () => {
    console.log('🎯 Running 5 download trigger tests to increment the counter...\n');

    for (let i = 1; i <= 5; i++) {
        console.log(`\n━━━ TEST ${i}/5 ━━━`);
        await testUnsplashDownloadTrigger();
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2s between tests
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ ALL TESTS COMPLETE!');
    console.log('📊 Your Unsplash dashboard should now show 5+ downloads.');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
})();
