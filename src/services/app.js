import request from "./req";

const app = {
  getCategory: () => request.get("/hackathon/categories-list"),
  sendContactForm: (data) => request.post("/hackathon/contact-form", data),
};

export default app;
