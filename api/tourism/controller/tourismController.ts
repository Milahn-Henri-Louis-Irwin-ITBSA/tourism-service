import { JsonController, Get, QueryParam } from 'routing-controllers';
import { Service } from 'typedi';
import { URL_INFO } from '../tourismApiInfo';
import { Logger } from '../../../libs/logger';

@JsonController(URL_INFO.contextPath + '/tourism')
@Service()
export class TourismController {
  constructor() {}

  @Get('/data')
  public async getData(): Promise<any> {
    return Promise.resolve({ message: 'pong' });
  }
}
