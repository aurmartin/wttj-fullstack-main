export const LISTS = [
  { state: 'new', name: 'Nouveau' },
  { state: 'refused', name: 'Refusé' },
  { state: 'to_meet', name: 'A rencontrer' },
  { state: 'interview', name: 'Entretien' },
  { state: 'accepter', name: 'Accepté' },
];

export const STATE_TO_NAME = LISTS.reduce((acc, state) => ({ ...acc, [state.state]: state.name }), {});
