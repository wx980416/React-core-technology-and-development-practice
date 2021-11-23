import {
  ADD_NUMBER,
  DEL_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
} from './constants'
import axios from 'axios'
export const addACtion = (num) => {
  return {
    type: ADD_NUMBER,
    num,
  }
}

export const delAction = (num) => {
  return {
    type: DEL_NUMBER,
    num,
  }
}
// 轮播图和推荐的action
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
})

export const changeRecommendAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends,
})

// redux-thunk中定义的action函数
export const getHomeMultidataAction = (dispatch, getState) => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
  }).then((res) => {
    const data = res.data.data
    dispatch(changeBannersAction(data.banner.list))
    dispatch(changeRecommendAction(data.recommend.list))
  })
}
