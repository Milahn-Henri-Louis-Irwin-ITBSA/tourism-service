import {
  JsonController,
  Get,
} from 'routing-controllers';
import { URL_INFO } from '../tourismApiInfo';
import { Service } from 'typedi';
import TourismSvc from '../service/TourismSvc';

@JsonController(URL_INFO.contextPath + '/tourism')
@Service()
export class TourismController {
  constructor(public _tourismSvc: TourismSvc) {}
  @Get('/getTourismInfo')
  public async getTourismInfo(): Promise<any> {
    try {
      const resp = await this._tourismSvc.getTourismInfo();

      return Promise.resolve({
        status: 200,
        message: 'Tourism service fetched data successfully',
        data: resp,
      });
    } catch (error) {
      return Promise.reject({
        status: 500,
        message: error,
      });
    }
  }
}
