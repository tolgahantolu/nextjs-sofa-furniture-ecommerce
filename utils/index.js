import store from "../store";
import { setUser } from "../store/authSlice";

export const setUserHandler = (data) => {
  store.dispatch(setUser(data));
};
