import { GQLContext } from '../misc/GraphQlContext';
import { MutationArg, Resolver } from '../misc/types';
import { User } from '../stores/PostgresUserStore';

export const MutationResolver: Resolver<any, {}, GQLContext> = {
  async addUserDetails(
    root: {},
    { input }: MutationArg<User>,
    context: GQLContext
  ) {
    context.user.uploadUserData(input, { userId: input.uuid });
  },
};
