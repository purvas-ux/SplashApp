import { createClient } from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '@env';

const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
});

// Helper to fetch JSON content from a URL
const fetchJsonContent = async (url: string) => {
    try {
        const response = await fetch(url);
        // We fetch the content into memory as a JSON object
        return await response.json();
    } catch (e) {
        console.error('Failed to fetch/parse JSON content from URL:', url, e);
        return null;
    }
};

export const fetchSplashAnimation = async (id: string) => {
    try {
        // 1. Try fetching as an Asset first (since we identified the ID as an Asset)
        try {
            const asset = await client.getAsset(id);
            if (asset.fields && asset.fields.file && asset.fields.file.url) {
                return await fetchJsonContent(`https:${asset.fields.file.url}`);
            }
        } catch (assetError: any) {
            // Ignore if not found or other error, proceed to try Entry
            // console.log('Not an asset or failed:', assetError.message);
        }

        // 2. Try fetching as an Entry (Fallback)
        try {
            const entry = await client.getEntry(id);
            if (entry.fields) {
                const values = Object.values(entry.fields);
                for (const value of values) {
                    const v = value as any;

                    // Case A: Direct JSON object in field
                    if (v && typeof v === 'object' && 'v' in v && 'layers' in v) {
                        return v;
                    }

                    // Case B: Resolved Asset link
                    if (v && typeof v === 'object' && 'fields' in v && v.fields?.file?.url) {
                        return await fetchJsonContent(`https:${v.fields.file.url}`);
                    }

                    // Case C: Raw Asset object
                    if (v && typeof v === 'object' && 'file' in v && v.file?.url) {
                        return await fetchJsonContent(`https:${v.file.url}`);
                    }
                }

                // Fallback: Return first object field (optimistic)
                const firstObject = values.find(v => v && typeof v === 'object');
                if (firstObject) return firstObject;
            }
        } catch (entryError) {
            console.error('Failed to fetch as Entry as well:', entryError);
        }

        return null;

    } catch (error) {
        console.error('Error in fetchSplashAnimation:', error);
        return null;
    }
};
