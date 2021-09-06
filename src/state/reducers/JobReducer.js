export const JobListReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
      case 'JOBS_LIST_REQUEST':
        return { loading: true, jobs: [] }
      case 'JOBS_LIST_SUCCESS':
        return { loading: false, jobs: action.payload }
      default:
        return state
    }
  }