import {http} from 'services/http';

class Api {
  static restaurantLogin(obj: any) {
    return http()
      .post('/restaurants/signin', obj)
      .then(resp => resp);
  }

  static restaurantRegister(obj: any) {
    return http()
      .post('/restaurants/signup', obj)
      .then(resp => resp);
  }

  static getMenu({token}: any) {
    return http(token)
      .get('/menus')
      .then(resp => resp);
  }

  static createMenu({token, data}: any) {
    return http(token)
      .post('/menus', data)
      .then(resp => resp);
  }

  static deleteMenu({token, data}: any) {
    return http(token)
      .delete(`/menus/${data}`)
      .then(resp => resp);
  }

  static getSchedule({token}: any) {
    return http(token)
      .get('/schedules')
      .then(resp => resp);
  }

  static createSchedule({token, data}: any) {
    return http(token)
      .post('/schedules', data)
      .then(resp => resp);
  }

  static deleteSchedules({token, data}: any) {
    return http(token)
      .delete(`/schedules/${data}`)
      .then(resp => resp);
  }

  static getSection({token}: any) {
    return http(token)
      .get('/sections')
      .then(resp => resp);
  }

  static createSection({token, data}: any) {
    return http(token)
      .post('/sections', data)
      .then(resp => resp);
  }

  static deleteSection({token, data}: any) {
    return http(token)
      .delete(`/sections/${data}`)
      .then(resp => resp);
  }
}

export default Api;
