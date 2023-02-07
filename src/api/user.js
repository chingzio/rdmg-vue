import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/noauth/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/sys/auth/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
