import { connect } from "react-redux";
import App from "../components/App";
import {
  loadCandidacies,
  loadingCandidacies,
  updateCandidacy,
} from "../actions/";

const mapStateToProps = (state) => ({
  candidacies: state.candidacies,
});

const mapDispatchToProps = (dispatch) => ({
  loadCandidacies: (candidacies) => dispatch(loadCandidacies(candidacies)),
  loadingCandidacies: (val) => dispatch(loadingCandidacies(val)),
  updateCandidacy: (id, newState, newPosition, persist) =>
    dispatch(updateCandidacy(id, newState, newPosition, persist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
