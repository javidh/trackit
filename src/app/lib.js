const generateUUID = () => {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        // Use crypto API for better randomness
        const uuidBytes = new Uint8Array(16);
        crypto.getRandomValues(uuidBytes);

        // Set version (4) and variant (2)
        uuidBytes[6] = (uuidBytes[6] & 0x0f) | 0x40;
        uuidBytes[8] = (uuidBytes[8] & 0x3f) | 0x80;

        // Convert UUID bytes to a hexadecimal string
        const uuidHexParts = Array.from(uuidBytes, byte => byte.toString(16).padStart(2, '0'));
        const uuid = uuidHexParts.join('');

        // Insert hyphens to match UUID format
        return `${uuid.substr(0, 8)}-${uuid.substr(8, 4)}-${uuid.substr(12, 4)}-${uuid.substr(16, 4)}-${uuid.substr(20)}`;
    } else {
        // Fallback for environments without crypto API
        console.warn('crypto.getRandomValues is not available. Falling back to less secure method.');

        // Generate a less secure random UUID
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
const getUrl = async () => {
    const targetUrl = 'https://www.iamjavid.com/fd9d1056-fd5c17de0a8e4c09.json';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

    const response = await fetch(proxyUrl + targetUrl)
    const json = await response.json()
    return json['url']
}
export { generateUUID, getUrl }