import { http } from "services/http";

class Restaurant {
  static login() {
    return http()
      .get("/restaurant")
      .then(resp => resp);
  }
}

export default Restaurant;
