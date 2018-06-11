import request from 'common/js/request'

export function getInfo(params) {
  return request({
    url: '/user/info',
    method: 'get',
    params
  })
}