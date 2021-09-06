export const blogListReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case 'BLOG_LIST_REQUEST':
      return { loading: true, blogs: [] }
    case 'BLOG_LIST_SUCCESS':
      return { loading: false, blogs: action.payload }
    default:
      return state
  }
}

export const blogDetailReducer = (state = { blog: {} }, action) => {
  switch (action.type) {
    case 'BLOG_DETAIL_REQUEST':
      return { loading: true, ...state }
    case 'BLOG_DETAIL_SUCCESS':
      return { loading: false, blog: action.payload }
    default:
      return state
  }
}
