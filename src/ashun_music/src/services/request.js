import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

function interface1(preset) {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  instance.interceptors.request.use(
    (config) => config,
    (err) => err
  );
  instance.interceptors.response.use(
    (result) => {
      return result.data;
    },
    (err) => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = "请求失败";
            break;
          case 401:
            err.message = "未授权访问";
            break;
          default:
            break;
        }
      }
      return err;
    }
  );

  return instance(preset);
}

export { interface1 };
