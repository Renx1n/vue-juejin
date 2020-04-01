import request from '../util/request'
import { apiUrl } from '../common/config'

// TODO 添加token
/**
 * 获取沸点推荐
 */
export const getHotRecommendList = () => {
  return request({
    method: 'GET',
    url: '/v1/pin/getHotRecommendList',
    params: {
      src: 'android'
    }
  }).then(res => {
    return res.data
  })
}

// TODO 添加token
/**
 * 获取主题
 * @param {string} topicId 
 * @param {number} page 
 * @param {number} pageSize 
 * @param {string} sortType 
 */
export const getTopicList = (topicId, page=0, pageSize=20, sortType='rank') => {
  return request({
    method: 'GET',
    url: '/v1/pin/pinList/topic',
    params: {
      topicId,
      page,
      pageSize,
      sortType,
      src: 'android'
    }
  }).then(res => {
    return res.data
  })
}

/**
 * 获取沸点推荐列表
 * @param {string} after 
 */
export const getRecommendedFeed = (after='') => {
  return request.post(apiUrl.ANDROID_HOME_REQUEST_URL, {
    "variables": {
      after,
      "afterPosition": ""
    },
    "extensions": {
      "query": {
        "id": "e3e03965a15cf246cf7cc3944086843b"
      }
    }
  }).then(res => res.data)
}

/**
 * 获取热门列表
 * @param {string} after 
 */
export const getPopularPinList = (after='') => {
  return request.post(apiUrl.ANDROID_HOME_REQUEST_URL, {
    "variables": {
      after,
      "first": 20
    },
    "extensions": {
      "query": {
        "id": "1b6b07b2ffcdc06c43114d79ca131afa"
      }
    }
  }).then(res => res.data)
}

/**
 * 获取沸点评论
 * @param {string} id 
 * @param {number} pageNum 
 * @param {number} pageSize 
 * @param {string} rankType 
 */
export const getPinComments = (id, pageNum=0, pageSize=20, rankType='new') => {
  return request({
    method: 'GET',
    url: `/v1/pin/comments/${id}`,
    params: {
      pageNum,
      pageSize,
      rankType
    }
  }).then(res => res.data)
}

// TODO 请求参数加上token
/**
 * 
 * @param {string} id 
 */
export const getPinById = (id) => {
  return request({
    method: 'GET',
    url: '/v1/pin/getByID',
    params: {
      msgId: id,
      src: 'android'
    }
  }).then(res => res.data)
}