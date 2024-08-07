import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }
  getUserId(): string | null {
    return window.localStorage.getItem("user_id");
  }
  setUserId(userId: string | null): void {
    if (userId !== null) {
      window.localStorage.setItem("user_id", userId);
    } else {
      window.localStorage.removeItem("user_id");
    }
  }
  request(method: string, url: string, data: any): Promise<any> {
      let headers: any = {};

      if (this.getAuthToken() !== null) {
          headers = {"Authorization": "Bearer " + this.getAuthToken()};
      }

      return axios({
          method: method,
          url: url,
          data: data,
          headers: headers
      });
  }
  sendOtpEmail(to: string, subject: string, text: string): Promise<any> {
    return this.request('post', '/sendOtp', { to, subject, text });
  }
}
