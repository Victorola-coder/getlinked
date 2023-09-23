export default class HttpErrorException extends Error {
  constructor(error) {
    super();
    this.error = error;
  }

  trigger() {
    console.log(this.error);
    if (this.error?.response?.data?.email) {
      return toast.error(this.error?.response?.data?.email[0]);
    }
    if (this.error?.response?.data?.phone_number) {
      return toast.error(this.error?.response?.data?.phone_number[0]);
    }
    if (this.error?.response?.data?.group_size) {
      return toast.error(this.error?.response?.data?.group_size[0]);
    }
    if (this.error?.code === "ERR_NETWORK") {
      return toast.error(this.error?.message);
    } else {
      return toast.error("An error occurred!");
    }
  }
}
