import { Request, Response, Router } from 'express'
import { EchoController } from '../controllers/echoController'

const router = Router()
const echoController = new EchoController()

// router.get('/echo', echoController.echo)
router.get('/', echoController.echo)

module.exports = router