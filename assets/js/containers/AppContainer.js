import { connect } from "react-redux";
import App from "../components/App";
import {
  loadCandidacies,
  loadingCandidacies,
  updateCandidacy,
  loadJobs,
  selectJob,
} from "../actions/";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  loadCandidacies: (candidacies) => dispatch(loadCandidacies(candidacies)),
  loadingCandidacies: (val) => dispatch(loadingCandidacies(val)),
  updateCandidacy: (id, newState, newPosition, persist) =>
    dispatch(updateCandidacy(id, newState, newPosition, persist)),
  loadJobs: (jobs) => dispatch(loadJobs(jobs)),
  selectJob: (job) => dispatch(selectJob(job)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
