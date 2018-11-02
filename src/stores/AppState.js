import { observable, action } from "mobx";
import axios from "axios";

export default class AppState {
  @observable authenticated;

  constructor() {
    this.authenticated = false;
    this.trueLogin = "root";
    this.truePassword = "admin";
    id = "";
  }

  async fetchData(pathname, id) {
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com${pathname}`
    );
    console.log(data);
    data.length > 0 ? this.setData(data) : this.setSingle(data);
  }

  @action authenticate() {
    return new Promise((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = !this.authenticated;
        resolve(this.authenticated);
      }, 0);
    });
  }
}
