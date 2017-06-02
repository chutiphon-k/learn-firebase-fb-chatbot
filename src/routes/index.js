import { Router } from 'express'

import example from 'routes/example'

const router = Router()

router.use('/', example)

export default router
