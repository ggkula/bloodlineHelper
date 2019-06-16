/** 所有数据的集合
 * Type: object
 *  name：卡牌名字
 *  attr：卡牌属性
 *  job: 职业
 *  transfer: 转职
 *  camp：阵营
 *  avatar：节奏榜上的头像
 *  card：四维，装备，转职，面板【可以对应多个转职的面板】
 *      [{
 *          type: 面板图的标题
 *          src：图片地址
 *      }]
 *  skill：技能图
 *  resolve：单卡分析
 */

import id1 from './resolve/dark/奥'

export default {
    1 : {
        name: '奥里西斯',
        attr: '暗',
        job: '',
        transfer: [],
        camp: '',
        avatar: '',
        card: [],
        skill: '',
        resolve: id1
    }
}