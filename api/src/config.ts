import dotenv from 'dotenv'
dotenv.config();

export default {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'blog-db',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD ||'admin',
    MONGO_HOST: process.env.MONGO_HOST ||'localhost',
    PORT: process.env.PORT || 3000
}