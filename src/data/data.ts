/** 所有数据的集合
 * Type: object
 *  name：string 卡牌名字
 *  id: number 和前面的键名一致
 *  attr：{
 *      key: string 键名（英文）
 *      value：string 值（中文）
 *  }卡牌属性
 *  job: string 职业
 *  transfer: string[] 转职
 *  camp：string 阵营
 *  avatar：string节奏榜上的头像
 *  card：四维，装备，转职，面板【可以对应多个转职的面板】
 *      [{
 *          type: 面板图的标题
 *          src：图片地址
 *      }]
 *  skill：string 技能图
 *  resolve：单卡分析
 */

import id1 from './resolve/dark/奥'

export default {
    1 : {
        name: '奥里西斯',
        id: 1,
        attr: {
            key: 'dark',
            value: '暗'
        },
        job: '',
        transfer: [],
        camp: '',
        avatar: '',
        card: [{
            type: '20攻击秘牧奥里西斯',
            src: '../../../assets/card/dark/奥.png'
        }],
        skill: '../../../assets/skill/dark/奥.png',
        resolve: id1
    }
}