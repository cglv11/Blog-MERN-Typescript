import {Router} from 'express'
const router = Router();

import * as userCtrl from './user.controller'

router.post('/users/signin', userCtrl.signIn);

router.post('/users/signup', userCtrl.signUp);

export default router;