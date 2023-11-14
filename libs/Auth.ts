import admin from 'firebase-admin';
import type { DecodedIdToken } from 'firebase-admin/auth';

export default class Auth {
  public static async verifyToken(token: string): Promise<DecodedIdToken> {
    try {
      return await admin.auth().verifyIdToken(token);
    } catch (error) {
      console.log(error);
      throw new Error('Error verifying token');
    }
  }
}
