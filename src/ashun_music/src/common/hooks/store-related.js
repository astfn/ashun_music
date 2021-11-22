import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { useLocalStorage } from "./index.js";
import { initialFromLocalStorageAction } from "@/store/user/actionCreators.js";

/* get */
export const useGetUserFromStore = () => {
  const user = useSelector((store) => store.getIn(["user"]), shallowEqual);
  return user;
};

/* put */
//这里 user 要结合 immutableJS 否则即使数据不变，依旧会返回新的引用，导致不断刷新，产生死循环
export const useUpdateLocalStorageUserfromStore = () => {
  const user = useGetUserFromStore();
  const [, setUserLocal] = useLocalStorage("user");
  useEffect(() => {
    setUserLocal(user.toJS());
  }, [user, setUserLocal]);
};

export const useInitialStoreUserFromLocalStorage = () => {
  const [userLocal] = useLocalStorage("user");
  const dispatch = useDispatch();
  useEffect(() => {
    if (userLocal) {
      dispatch(initialFromLocalStorageAction(userLocal));
    }
  }, [dispatch, userLocal]);
};

// //若用户登录，当操作player时，将其更新到该user的数据中
// export const useUpdateUserPlayListFromPlayer = () => {
//   const dispatch = useDispatch();
//   const player = useSelector((store) => store.getIn(["player"]), shallowEqual);
//   // const user = useGetUserFromStore();

//   // let isIdentical = false;

//   // const playerList = player.getIn(["playList"]);
//   // const userPlayList = user.getIn(["currentUser", "playList"]);
//   // if (playerList.length === userPlayList.length) {
//   //   isIdentical = userPlayList.every((v, i) => v.id === playerList[i].id);
//   // }

//   useEffect(() => {
//     dispatch(updatePlayListAction(player.getIn(["playList"])));
//     console.log("useEffect1111111");
//   }, [dispatch, player]);

//   //若用户登录，先将user的歌单赋值给player，后续操作player同步到user中 ↑
//   // useEffect(() => {
//   //   !isIdentical &&
//   //     dispatch(changePlayList(user.getIn(["currentUser", "playList"])));
//   //   console.log("useEffect222222");
//   // }, [dispatch, user, isIdentical]);

// };
