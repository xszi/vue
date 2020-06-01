import axios from 'axios'
import { HomeRecommendListItem } from './types'

export default class Services {
    static init() {
        axios.defaults.baseURL = 'https://www.fastmock.site/mock/25e4080955374e3d00100ce6e1176263/mockflow'
    }

    //推荐列表
    static async getHomeRecommendList() {
        this.init()
        // 请求回来的结果res.data是HomeRecommendListItem
        return axios.get<HomeRecommendListItem[]>("/homeRecommend").then(res => res.data)
    }
}