import { EntityState } from '@ngrx/entity';
import { User } from '../../shared/models/user';

export const userFeatureKey = 'users';

export interface UserState extends EntityState<User> {
  loading: boolean;
  error: Error | null;
}

export const userInitialState: UserState = {
  ids: [],
  entities: {},
  loading: false,
  error: null
};
