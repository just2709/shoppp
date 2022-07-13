import ezAxiosClient from "./ezAxiosClient";

const userApi = {
  register(data) {
    const url = "/auth/local/register";
    return ezAxiosClient.post(url, data);
  },
  login(data) {
    const url = "/auth/local";
    return ezAxiosClient.post(url, data);
  },
};

export default userApi;
