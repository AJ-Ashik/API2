// /api/stream.js
import https from 'https';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const streamUrl = req.query.id;

    // headers.json ফাইল থেকে হেডার ডেটা পড়ুন
    const headersPath = path.resolve('https://raw.githubusercontent.com/byte-capsule/Toffee-Channels-Link-Headers/refs/heads/main/toffee_channel_data.json');
    const headers = JSON.parse(fs.readFileSync(headersPath, 'utf8'));

    const options = { headers };

    https.get(streamUrl, options, (streamRes) => {
        res.writeHead(200, { 'Content-Type': 'application/vnd.apple.mpegurl' });
        streamRes.pipe(res);
    }).on('error', (e) => {
        res.status(500).json({ error: e.message });
    });
}
