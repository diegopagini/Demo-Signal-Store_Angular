import { createFeature } from '@ngrx/store';
import { userReducers } from './user.reducers';
import { userFeatureKey } from './user.state';

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer: userReducers
});
