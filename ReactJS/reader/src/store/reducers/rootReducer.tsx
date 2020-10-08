import authReducer from './authReducer';
import storyReducer from './storyReducer';
import { combineReducers } from 'redux';
import storiesReducer from './storiesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  story: storyReducer,
  stories: storiesReducer,
});

export default rootReducer;
