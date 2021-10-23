import {
  LOAD_JOBS, SELECT_JOB
} from '../actions';

const initialState = {
  loading: false,
  items: [],
  selectedJob: null,
};

export default function jobs(state = initialState, action) {
  switch (action.type) {
    case LOAD_JOBS:
      return { ...state, items: action.jobs };

    case SELECT_JOB:
      return { ...state, selectedJob: action.selectedJob };

    default:
      return state;
  }
}
