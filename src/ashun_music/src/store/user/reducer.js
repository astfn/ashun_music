import { Map } from "immutable";

import {
  INITIAL_FROM_LOCALSTORAGE,
  ADD_USER,
  CHANGE_USER,
  SIGN_OUT,
  UPDATE_PLAYLIST,
  TOGGLE_ISLOGIN,
} from "./constants.js";

const defaultState = Map({
  isLogin: false,
  users: [],
  currentUser: {
    phone: "",
    nickName: "",
    password: "",
    playList: [],
    starSongs: [],
  },
});

export default function userReducer(state = defaultState, action) {
  const { type } = action;
  switch (type) {
    case INITIAL_FROM_LOCALSTORAGE: {
      const { userData } = action;
      return Map(userData);
    }
    case ADD_USER: {
      const { user } = action;
      const oldUsers = state.getIn(["users"]);
      const newUsers = [...oldUsers, user];
      return state.setIn(["users"], newUsers);
    }
    case CHANGE_USER: {
      const { uid } = action;
      const findUser = state.getIn(["users"]).find((v) => v.phone === uid);
      return state.setIn(["currentUser"], findUser);
    }
    case SIGN_OUT: {
      return state.setIn(["currentUser"], {});
    }
    case TOGGLE_ISLOGIN: {
      const { isLogin } = action;
      return state.setIn(["isLogin"], isLogin);
    }
    case UPDATE_PLAYLIST: {
      const { playList } = action;
      let oldUsers = state.getIn(["users"]);
      let currentUser = state.getIn(["currentUser"]);
      const newUsers = oldUsers.map((user) => {
        if (user.phone === currentUser.phone) {
          user.playList = playList;
        }
        return user;
      });
      return state
        .setIn(["users"], newUsers)
        .setIn(["currentUser", "playList"], playList);
    }
    default: {
      return state;
    }
  }
}
