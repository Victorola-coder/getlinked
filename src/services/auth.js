import request from "./req";

const auth = {
  register: (data) => request.post("/hackathon/registration", data),
};

export default auth;
