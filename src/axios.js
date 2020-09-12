import axios from "axios";

const instance = axios.create({
  //"https://us-central1-clone-587e7.cloudfunctions.net/api",
  baseURL: "http://localhost:5001/clone-587e7/us-central1/api",
});

export default instance;
