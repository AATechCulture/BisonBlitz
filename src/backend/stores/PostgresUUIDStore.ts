import { Pool } from 'pg';

export interface UUID {
  userId: string;
  createdAt: Date;
}

export class PostgresUUIDStore {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  //   async getAllUniqueIds(): Promise<UUID[]> {
  //     try {
  //       const query = 'SELECT * FROM users.user'
  //       const result: QueryResult<User> = await this.pool.query(query)
  //       return result.rows
  //     } catch (error) {
  //       console.log(error)
  //       throw new Error('Error while fetching users from the database.')
  //     }
  //   }
  // }
  async addUUID(uuidInstance: UUID): Promise<any> {
    try {
      const query =
        'INSERT INTO users.u_user_ids (user_id, created_at) VALUES ($1, $2)';
      const values = [uuidInstance.userId, uuidInstance.createdAt];

      return this.pool.query(query, values);
    } catch (error) {
      console.log(error);
      throw new Error('Error while adding user to the database.');
    }
  }
}

export default PostgresUUIDStore;
