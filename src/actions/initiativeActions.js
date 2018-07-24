import * as actions from './actionTypes';

export function addCharacter(char) {
   return { type: actions.ADD_CHARACTER, char };
}

export function removeCharacter(index) {
   return { type: actions.REMOVE_CHARACTER, index };
}

export function updateCharacter(char, index) {
   return { type: actions.UPDATE_CHARACTER, char, index };
}

export function sortInitiativeList() {
   return { type: actions.SORT_INITIATIVE_LIST };
}

export function incrementInitiativeList(increment) {
   return { type: actions.INCREMENT_INITIATIVE_LIST, increment: increment };
}

export function decrementInitiativeList(newIndex) {
   return { type: actions.DECREMENT_INITIATIVE_LIST, newIndex: newIndex };
}

export function calculateProgress() {
   return { type: actions.CALCULATE_PROGRESS };
}

export function resetIndex() {
   return { type: actions.RESET_INDEX };
}

export function updateTurnCount(increment) {
   return { type: actions.UPDATE_TURN_COUNT, increment: increment };
}
