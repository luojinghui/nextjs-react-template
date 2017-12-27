/**
 * Created Date: 2017/12/26
 * Author: luojinghui
 */
import {Request, Response} from 'express';
import {app} from '../app';

export function postRoute(req: Request, res: Response) {

  const actualPage = '/post';
  const queryParams = {id: req.params.id};
  app.render(req, res, actualPage, queryParams);
}


