/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable semi */
/* eslint-disable indent */
import { Pool, QueryResult } from 'pg';

export interface User {
  uuid: string;
  name: string;
  miles: string;
  prefs: any;
}

export type UUID = {
  userId: string;
};

export class PostgresUserStore {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async getResturantData(): Promise<User[]> {
    try {
      const query = 'SELECT * FROM users.user';
      const result: QueryResult<User> = await this.pool.query(query);
      return result.rows;
    } catch (error) {
      console.log(error);
      throw new Error('Error while fetching users from the database.');
    }
  }

  async addUser(user: User): Promise<any> {
    try {
      const query =
        'INSERT INTO users.user (uuid, name, miles, prefs) VALUES ($1, $2, $3, $4)';
      const values = [user.uuid, user.name, user.miles, user.prefs];

      return this.pool.query(query, values);
    } catch (error) {
      console.log(error);
      throw new Error('Error while adding user to the database.');
    }
  }
}
export default PostgresUserStore;
