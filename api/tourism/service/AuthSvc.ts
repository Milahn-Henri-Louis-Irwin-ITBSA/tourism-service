import Auth from '../../../libs/Auth';
import type { DecodedIdToken } from 'firebase-admin/auth';
export default class AuthSvc {
  public async verifyToken(token: string): Promise<DecodedIdToken | Error> {
    try {
      return await Auth.verifyToken(token);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
