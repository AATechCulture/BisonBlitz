import { PostgresUserStore, User, UUID } from '../stores/PostgresUserStore';
import { PostgresUUIDStore } from '../stores/PostgresUUIDStore';

export class UserLoader {
  constructor(
    private store: PostgresUserStore,
    private uuid: PostgresUUIDStore
  ) {}

  getCurrentData = () => {
    return new Date();
  };
  uploadUserData = async (user: User, id: UUID) => {
    try {
      this.uuid.addUUID({
        userId: id.userId,
        createdAt: this.getCurrentData(),
      });
      return this.store.addUser(user);
    } catch (error) {
      console.error('Error fetching user data:', error);
      return [];
    }
  };
}

//
