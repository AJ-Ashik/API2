// /api/stream.js
import https from 'https';

export default function handler(req, res) {
    const streamUrl = req.query.id;

    // headers সরাসরি কোডের মধ্যে ইনলাইন করা হয়েছে
    const headers = {
        "Host": "bldcmprod-cdn.toffeelive.com",
        "Cookie": "Edge-Cache-Cookie=URLPrefix=aHR0cHM6Ly9ibGRjbXByb2QtY2RuLnRvZmZlZWxpdmUuY29tLw:Expires=1730578747:KeyName=prod_linear:Signature=RUS2g1xB-hHX-efOnZwgREM4EZKKL8-hx1nTFvGqnBf2wQN-f2v3-g0liH9dGCBoOGu1FxA9e--Ud3Z_xE5mCw",
        "User-Agent": "Toffee (Linux;Android 14) AndroidXMedia3/1.1.1/64103898/4d2ec9b8c7534adc",
        "Client-API-Header": "angM1aXCHQLmmSW6cDlpXMD6tLdwnhMoUeaBBFKmd98bX6Vrae5xCMbm4gg0+u33rnxeGQDZNr2GD1tW0cWwKEpWimNlGqXVQGhpiIBz1JFxN+OxXcQqaMPrjwUhCyI5mO1DGyNv18+Z2EpmHtVnLzV9SrGsQWu4oRKjxE8QIMsRs6LrvL6hWGPlOGQke/qb5QxQZNetPzI39jHhX7Zi2XrCMIT4a+gk2Wu1c3wIybwkqknPcTp4Bj1cEF3Q+q1dV05SBhzpEDfoR2BLyQ6dV3LvmY6MNKxbUjby7hMsg35lFl2Df2mZsr7C27309w/qWi8lLXDjB7B1MozIGKn8rw3bXY5YlrPKBKztyiisAjQQi7kc5ISXyGSwRmhciwkciuitsSL0LlqHY7/Qkkh71EtaK3XEgVpLdH8zRCsTwfu1iIVPiDwTycuuBy4XWkcNnd0iLB35yftQpiL8HfpO2jQnrAwzePxszJ7mewVG+M0P/qyTBD52NkPR8uW0AZmDKp5LHTCGf7sqldDzpZvU+gsSdvtsBUcmHzjINGEoyXk="
    };

    const options = { headers };

    https.get(streamUrl, options, (streamRes) => {
        res.writeHead(200, { 'Content-Type': 'application/vnd.apple.mpegurl' });
        streamRes.pipe(res);
    }).on('error', (e) => {
        res.status(500).json({ error: e.message });
    });
}
