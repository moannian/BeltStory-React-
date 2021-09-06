import { combineReducers } from 'redux'
import { CHANGEDETIALS, CHANGETITLE } from './Type'
const Obj = {

    value: 3720,
    name: '西安',
    obj: {
        color: '#546fc6',
        content: `2020年中欧班列长安号危中寻机、
        全面发力，全年开行3720列，是上年的1.7倍，
        创历史新高。运送货物总重达281.1万吨，
        是上年的1.6倍，其中欧洲方向约占全国市场总量的20%，
        超过8万吨防疫物资运抵欧洲，为国际防疫合作提供了有力支持。
        中欧班列长安号再次实现了跨越式增长，质量评价指标位居全国第一。`,
        data: {
            total: [{ value: 3720, name: '西安' }]
        }
    }
}

// 本地存储
let storage = window.localStorage;
const Choosetitle = parseInt(storage.getItem("c"))
const EpidemicReducer = (state = Obj, action) => {
    // 操作选择
    switch (action.type) {
        case CHANGEDETIALS:
            return state = { ...action.value }
        default:
            return state
    }
}
const ChooseTitle = (state = Choosetitle, action) => {
    switch (action.type) {
        case CHANGETITLE:
            return state = action.value;
        default:
            return state
    }

}
export default combineReducers({ EpidemicReducer, ChooseTitle })