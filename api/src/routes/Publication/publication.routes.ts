import {Router} from 'express'
const router = Router();

import * as publicationCtrl from './publication.controller'

router.get('/publications', publicationCtrl.getPublications);

router.get('/publications/:id', publicationCtrl.getPublication);

router.post('/publications', publicationCtrl.CreatePublication);

router.delete('/publications/:id', publicationCtrl.deletePublication);

router.put('/publications/:id', publicationCtrl.updatePublication);

export default router;