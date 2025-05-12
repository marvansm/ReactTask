import axios from "axios";
export class ApiServices {
  static InstanceUrl = "http://localhost:3000/";
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: ApiServices.InstanceUrl,
      timeout: 5000,
    });
  }
  async getApiData(url) {
    const res = await this.axiosInstance.get(url);
    return res.data;
  }
  async getApibyId(url, id) {
    const res = await this.axiosInstance.get(`${url}/${id}`);
    return res.data;
  }
}
