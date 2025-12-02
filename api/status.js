module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  res.status(200).json({
    status: 'online',
    service: 'Classplus Lecture Downloader',
    version: '1.0.0',
    endpoints: {
      download: '/api/download',
      usage: 'GET /api/download?url=YOUR_M3U8_URL or POST with JSON body',
      example: 'https://your-app.vercel.app/api/download?url=https://media-cdn.classplusapp.com/.../master.m3u8'
    },
    limits: {
      note: 'Vercel has a 10-second timeout on free tier for serverless functions',
      suggestion: 'For long videos, consider downloading in chunks'
    }
  });
};
