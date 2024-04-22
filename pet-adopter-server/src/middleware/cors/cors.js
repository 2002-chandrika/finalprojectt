const express = require('express');
const cors = require('cors');

const corsMiddleware = (app)=>{
    app.use(cors({
        origin: ["https://finalprojectt-8kwr.vercel.app","*"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }))

    app.use(express.json())
}

module.exports = corsMiddleware