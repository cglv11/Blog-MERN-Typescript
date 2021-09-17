import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import passport from 'passport'
import passportMiddleware from './routes/middlewares/passport'

// Routes
import publicationRoutes from './routes/Publication/publication.routes';
import userRoutes from './routes/User/user.routes'
import specialRoutes from './routes/User/special.routes'

// Initializations
const app = express()

// Settings
app.set('port', config.PORT);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize())
passport.use(passportMiddleware)

// Routes
app.use(publicationRoutes)
app.use(userRoutes)
app.use(specialRoutes)

export default app;