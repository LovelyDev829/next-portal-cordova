const baseUrl = process.env.NODE_ENV === "production" 
? 'https://next-portal-cordova-ey8c.vercel.app'
: 'http://localhost:3000';

export default baseUrl;