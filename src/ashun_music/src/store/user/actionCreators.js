import {
  ADD_USER,
  CHANGE_USER,
  SIGN_OUT,
  TOGGLE_ISLOGIN,
  UPDATE_PLAYLIST,
  INITIAL_FROM_LOCALSTORAGE,
} from "./constants.js";

export const initialFromLocalStorageAction = (userData) => ({
  type: INITIAL_FROM_LOCALSTORAGE,
  userData,
});

export const addUserAction = (user) => ({ type: ADD_USER, user });

export const changeUserAction = (uid) => ({ type: CHANGE_USER, uid });

export const signOutAction = (uid) => ({ type: SIGN_OUT }); //currentUser={}

export const updatePlayListAction = (playList) => ({
  type: UPDATE_PLAYLIST,
  playList,
});

export const toggleIsLoginAction = (isLogin) => ({
  type: TOGGLE_ISLOGIN,
  isLogin,
});
