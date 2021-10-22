import axios from 'axios';
import {
  MOVE_CANDIDACY,
  LOAD_CANDIDACIES,
  LOADING_CANDIDACIES,
  UPDATE_CANDIDACY,
} from '../actions';

const initialState = {
  loading: false,
  items: [],
};

function setCandidacy(state, action) {
  let candidacy = state.items.find(c => c.id === action.id);

  candidacy = {
    ...candidacy,
    state: action.newState,
    position: action.newPos,
  };

  if (action.persist) {
    axios.put(`/api/job/1/candidacy/${candidacy.id}`, candidacy).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  return Object.assign({}, state, {
    items: [
      candidacy,
      ...state.items.filter(c => c.id !== action.id),
    ],
  });
}

export default function candidacies(state = initialState, action) {
  switch (action.type) {
    case LOADING_CANDIDACIES:
      return { ...state, loading: action.val };

    case LOAD_CANDIDACIES:
      return Object.assign({}, state, {
        items: action.candidacies,
      });

    case MOVE_CANDIDACY:
      return Object.assign({}, state, {
        items: state.items.map((candidacy) => {
          if (candidacy.id === action.id) {
            return Object.assign({}, candidacy, {
              state: action.candidacyState,
            });
          }
          return candidacy;
        }),
      });

    case UPDATE_CANDIDACY:
      return setCandidacy(state, action);
    default:
      return state;
  }
}

