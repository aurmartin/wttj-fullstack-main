import { connect } from "react-redux";
import { orderBy } from "lodash";

import List from "../components/List";
import {
  updateCandidacy,
} from "../actions/";

/* Here state refers to list state and not redux */
function filterCandidacies(candidacies, state) {
  return orderBy(
    candidacies.filter((candidacy) => candidacy.state === state),
    ["position"]
  );
}

const mapStateToProps = (state, ownProp) => ({
  candidacies: filterCandidacies(state.candidacies.items, ownProp.list.state),
});

const mapDispatchToProps = (dispatch) => ({
  updateCandidacy: (id, newState, newPosition, persist) =>
    dispatch(updateCandidacy(id, newState, newPosition, persist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
