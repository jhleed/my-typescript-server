import { Request, Response } from 'express'

export class EchoController {

  echo(req: Request, res: Response) {
    res.json(req.query)
  }
}
