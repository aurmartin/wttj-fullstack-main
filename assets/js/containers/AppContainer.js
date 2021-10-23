import { connect } from "react-redux";
import App from "../components/App";
import {
  loadCandidacies,
  loadingCandidacies,
  moveCandidacy,
  loadJobs,
  selectJob,
} from "../actions/";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  loadCandidacies: (candidacies) => dispatch(loadCandidacies(candidacies)),
  loadingCandidacies: (val) => dispatch(loadingCandidacies(val)),
  moveCandidacy: (id, newState, newPosition) => dispatch(moveCandidacy(id, newState, newPosition)),
  loadJobs: (jobs) => dispatch(loadJobs(jobs)),
  selectJob: (job) => dispatch(selectJob(job)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
