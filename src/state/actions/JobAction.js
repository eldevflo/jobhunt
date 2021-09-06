import axios from 'axios'

export const JobListAction = () => async (dispatch) => {
  try {
    dispatch({ type: 'JOBS_LIST_REQUEST' })

    const { data } = await axios.get('http://localhost:8000/jobs')

    dispatch({
      type: 'JOBS_LIST_SUCCESS',
      payload: data,
    })
  } catch (error) {
    console.log(error)
  }
}

