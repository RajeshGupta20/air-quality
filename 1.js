


import fetch from 'node-fetch';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const CHANNEL_ID = 'LIJ7PRB9UNAIXHGQ';
const API_KEY = '2239189';
const THINGSPEAK_API_URL = `https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds.json?api_key=${API_KEY}&results=1`;

app.get('/getPredictionData', async (req, res) => {
    try {
        const response = await fetch(THINGSPEAK_API_URL);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching prediction data:', error);
        res.status(500).json({ error: 'Error fetching prediction data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
