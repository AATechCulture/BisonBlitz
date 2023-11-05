/* eslint-disable semi */
/* eslint-disable indent */

// import { FeaturedFlagInstance } from '../iso-node'
import { UserLoader } from '../loaders/UserLoader';

export interface GQLContext {
  user: UserLoader;
  // flagger: FeaturedFlagInstance //TODO: move flagger to own package to handle env variable
}
