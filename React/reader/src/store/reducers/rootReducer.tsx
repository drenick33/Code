import authReducer from './authReducer';
import storyReducer from './storyReducer';
import storiesReducer from './storiesReducer';
import wordsReducer from './wordsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  story: storyReducer,
  stories: storiesReducer,
  words: wordsReducer,
});

export default rootReducer;
