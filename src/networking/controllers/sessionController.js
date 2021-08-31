import instance from '../apiService';
import TokenService from '../tokenService';

class SessionController {
  static async register(username, email, password) {
    return instance.post('/auth/signup', {
      username,
      email,
      password,
    });
  }

  static async login(username, password) {
    return instance
      .post('/auth/signin', {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  static logout() {
    TokenService.removeUser();
  }

  static getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default SessionController;
