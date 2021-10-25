import {
  MOVE_CANDIDACY,
  LOAD_CANDIDACIES,
  LOADING_CANDIDACIES,
  UPDATE_CANDIDACY,
} from '../actions';

import { groupBy, mapValues } from 'lodash';

const initialState = {
  loading: false,
  lists: {},
};

function setCandidacy(state, action) {
  let candidacy = state.items.find(c => c.id === action.id);

  candidacy = {
    ...candidacy,
    state: action.newState,
    position: action.newPos,
  };

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
      return {
        ...state,
        lists: mapValues(groupBy(action.candidacies, "state"), (list) => list.map((x, i) => ({ ...x, position: i })))
      };

    case MOVE_CANDIDACY:
      let candidacy = Object.values(state.lists).flat().find((c) => c.id === action.id);

      if (candidacy.state === action.newState && candidacy.position === action.newPos) {
        return state;
      }

      let oldStateList = state.lists[candidacy.state];
      let newStateList = state.lists[action.newState] || [];

      // Remove candidacy from old list
      oldStateList.splice(candidacy.position, 1);

      let updatedCandidacy = { ...candidacy, state: action.newState };

      // Insert updatedCandidacy into new list at dropped on position (newPos)
      newStateList.splice(action.newPos, 0, updatedCandidacy);

      return {
        ...state,
        lists: {
          ...state.lists,
          [candidacy.state]: oldStateList.map((x, i) => ({ ...x, position: i })),
          [action.newState]: newStateList.map((x, i) => ({ ...x, position: i })),
        }
      };

    case UPDATE_CANDIDACY:
      return setCandidacy(state, action);
    default:
      return state;
  }
}

