import _ from "lodash";
import jsonplaceholder from "../apis/jsonplaceholder";

/* Old style
export const fetchPosts = () => {
  return async (dispatch, gState) => {
    const response = await jsonplaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};
*/

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

/*  FIRST WAY - CAN BE CALLED TWICE FOR SAME USER Id
  export const fetchUser = (id) => async (dispatch) => {
   const response = await jsonplaceholder.get(`/users/${id}`);
   dispatch({ type: "FETCH_USER", payload: response.data });
  };
*/

/* SECOND WAY memoize - SAME ARG CALLED ONLY ONE TIME
export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
*/

//  THIRD WAY - GET ONLY UNIQUE USER Ids

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // getState().posts
  // getState().users

  /* get unique user id -1 
      const userIds = _.uniq(_.map(getState().posts, "userId"));
      userIds.forEach((id) => dispatch(fetchUser(id)));
  */

  // get unique user id -2
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
