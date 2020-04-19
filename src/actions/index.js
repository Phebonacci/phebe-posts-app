import {
  getUsers,
  getUserPosts,
  getPost,
  getPostComments,
  createPost,
  deletePost,
} from '../apis/jsonPlaceholder';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER_POSTS = 'FETCH_USER_POSTS';
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS';

export const USER_SELECTED = 'USER_SELECTED';
export const USER_POST_SELECTED = 'USER_POST_SELECTED';
export const CREATE_USER_POST = 'CREATE_USER_POST';
export const DELETE_USER_POST = 'DELETE_USER_POST';

export const SPINNER_LOADING = 'SPINNER_LOADING';

export const setSpinnerStatus = (isLoading) => ({
  type: SPINNER_LOADING,
  payload: isLoading,
});

export const fetchUsers = () => async (dispatch, getState) => {
  try {
    dispatch(setSpinnerStatus(true));
    const { data: users } = await getUsers();
    dispatch({
      type: FETCH_USERS,
      payload: users,
    });
    dispatch(setSpinnerStatus(false));
  } catch (error) {
    console.error('Failed to get users from the api', error);
  }
};

export const fetchSelectedUserPosts = () => async (dispatch, getState) => {
  try {
    dispatch(setSpinnerStatus(true));
    const userId = getState().selectedUser.id;
    const { data: userPosts } = await getUserPosts(userId);
    dispatch({
      type: FETCH_USER_POSTS,
      payload: userPosts,
    });
    dispatch(setSpinnerStatus(false));
  } catch (error) {
    console.error('Failed to fetch user posts', error);
  }
};

export const fetchSelectedPostComments = () => async (dispatch, getState) => {
  try {
    dispatch(setSpinnerStatus(true));
    const postId = getState().selectedPost.id;
    const { data: postComments } = await getPostComments(postId);
    dispatch({
      type: FETCH_POST_COMMENTS,
      payload: postComments,
    });
    dispatch(setSpinnerStatus(false));
  } catch (error) {
    console.error('Failed to fetch selected post comments', error);
  }
};

export const selectUser = (user) => ({
  type: USER_SELECTED,
  payload: user,
});

export const selectUserPost = (post) => ({
  type: USER_POST_SELECTED,
  payload: post,
});

export const createUserPost = (post) => ({
  type: CREATE_USER_POST,
  payload: post,
});

export const deleteUserPost = (post) => async (dispatch, getState) => {
  try {
    dispatch(setSpinnerStatus(true));
    const { data } = await deletePost(post.id);
    if (data) {
      dispatch({
        type: FETCH_USER_POSTS,
        payload: getState().userPosts.filter(p => p.id !== post.id),
      });
    }
    dispatch(setSpinnerStatus(false));
  } catch (error) {
    console.error('Failed to delete user post', error);
  }
};
