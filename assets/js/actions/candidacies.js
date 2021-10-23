
export const MOVE_CANDIDACY = 'MOVE_CANDIDACY';
export const LOAD_CANDIDACIES = 'LOAD_CANDIDACIES';
export const LOADING_CANDIDACIES = 'LOADING_CANDIDACIES';
export const LOADED_CANDIDACIES_SUCCESS = 'LOADED_CANDIDACIES_SUCCESS';
export const LOADED_CANDIDACIES_ERROR = 'LOADED_CANDIDACIES_ERROR';
export const UPDATE_CANDIDACY = 'UPDATE_CANDIDACY';

export function moveCandidacy(candidacy, oldState, newState, newPos) {
  return { type: MOVE_CANDIDACY, candidacy, oldState, newState, newPos };
}

export function loadingCandidacies(val) {
  return { type: LOADING_CANDIDACIES, val };
}

export function loadCandidacies(candidacies) {
  return { type: LOAD_CANDIDACIES, candidacies };
}

export function updateCandidacy(candidacy, newState, newPos) {
  return {
    type: UPDATE_CANDIDACY,
    candidacy,
    newState,
    newPos,
  };
}
