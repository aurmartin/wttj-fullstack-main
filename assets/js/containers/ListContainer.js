import { connect } from "react-redux";
import { orderBy } from "lodash";

import List from "../components/List";
import {
  moveCandidacy,
} from "../actions/";

const mapStateToProps = (state, ownProp) => ({
  candidacies: orderBy(state.candidacies.lists[ownProp.list.state] || [], ["position"]),
});

const mapDispatchToProps = (dispatch) => ({
  moveCandidacy: (candidacy, newState, newPos) => dispatch(moveCandidacy(candidacy, newState, newPos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
