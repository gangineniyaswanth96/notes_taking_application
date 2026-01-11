import rateLimit from "../config/upstash.js";
const rateLimiter =async (req, res, next) => {
    try {
        // Implement rate limiting logic here using Upstash Redis
        // For example, you can track the number of requests from an IP address
        // and restrict access if it exceeds a certain limit within a time frame.
        const {success} = await rateLimit.limit("my-rate-limit");

        if (!success) {
            return res.status(429).json({ message: "Too many requests, please try again later." });
        }
        // If the request is within the allowed limit, call next()  
        next();
    } catch (error) {
        console.log("Rate limit error:", error);
        next(error);
    }
};

export default rateLimiter;