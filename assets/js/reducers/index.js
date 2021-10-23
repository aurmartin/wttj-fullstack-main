import { combineReducers } from 'redux';

import candidacies from './candidacies';
import jobs from './jobs';

export default combineReducers({
  candidacies,
  jobs,
});
