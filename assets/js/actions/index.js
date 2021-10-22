
export const MOVE_CANDIDACY = 'MOVE_CANDIDACY';
export const LOAD_CANDIDACIES = 'LOAD_CANDIDACIES';
export const LOADING_CANDIDACIES = 'LOADING_CANDIDACIES';
export const LOADED_CANDIDACIES_SUCCESS = 'LOADED_CANDIDACIES_SUCCESS';
export const LOADED_CANDIDACIES_ERROR = 'LOADED_CANDIDACIES_ERROR';
export const UPDATE_CANDIDACY = 'UPDATE_CANDIDACY';

export function moveCandidacy(id, candidacyState) {
  return { type: MOVE_CANDIDACY, id, candidacyState };
}

export function loadingCandidacies(val) {
  return { type: LOADING_CANDIDACIES, val };
}

export function loadCandidacies(candidacies) {
  return { type: LOAD_CANDIDACIES, candidacies };
}

export function updateCandidacy(id, newState, newPos, persist) {
  return {
    type: UPDATE_CANDIDACY,
    id,
    newState,
    newPos,
    persist,
  };
}
