import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/noauth/user/loginRsa',
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
    url: '/sys/auth/user/logout',
    method: 'post'
  })
}

export function getPublicKey() {
  return request({
    url: '/sys/noauth/user/getPublicKey',
    method: 'get'
  })
}
