export const LOAD_JOBS = 'LOAD_JOBS';
export const SELECT_JOB = 'SELECT_JOB';

export function loadJobs(jobs) {
  return { type: LOAD_JOBS, jobs };
}

export function selectJob(selectedJob) {
  return { type: SELECT_JOB, selectedJob };
}
