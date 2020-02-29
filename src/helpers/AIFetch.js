
import cryptoJs from 'crypto-js';
const uuidV1 = require('uuid/v1');

const TOKEN = 'U2FsdGVkX1+qD/TGRMZTAxGBvwXmFW2qwOezwMATu9U=';
const AI_API_BASE_URL = 'https://ai.picsart.com/web-ai';
const AI_TOKEN_SECRET_KEY = 'exha';

export function genToken(sid = uuidV1()) {
    const decoded = cryptoJs.AES.decrypt(TOKEN, AI_TOKEN_SECRET_KEY).toString(cryptoJs.enc.Utf8);
    const plaintext = decoded.replace(/r/ig, '');
    const auth = cryptoJs.SHA256(sid + plaintext);
    return [auth, sid];
}

export function fetchWithTimeout(url, options) {
    const { timeout = 30000, ...rest } = options;
    const controller = new AbortController();
    const { signal } = controller;

    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Timeout for request ' + url));
            controller.abort();
        }, timeout);

        fetch(url, { signal, ...rest })
            .then(resolve, reject)
            .finally(() => clearTimeout(timer));
    });
};

export async function AiFetch(url, options) {
    try {
        const response = await fetchWithTimeout(`${AI_API_BASE_URL}/${url}`, options);
        if (!response.ok) throw new Error(`response status is ${response.status}`);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function AiUpload(formData) {
    const id = uuidV1();
    const response = await fetchWithTimeout(`https://aihackathon.picsart.com/photos/${id}`, {
        body: formData,
        method: 'POST',
        headers: { Authorization: `Bearer 5HBZmENO488Lky5m4XuF1uqGFEvemHw2` },
    });
    if (!response.ok) throw new Error(`response status is ${response.status}`);
    return [response, id];
}


export async function getMultiMatting(id, type) {
    const response = await fetchWithTimeout(`https://aihackathon.picsart.com/multiMatting/${id}?segmentation_class=${type}`, {
        headers: { Authorization: `Bearer 5HBZmENO488Lky5m4XuF1uqGFEvemHw2` },
    });
    if (!response.ok) throw new Error(`response status is ${response.status}`);
    return await response.json();
}

