/*
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

export interface  EachData {
    name: string,
    id: number,
    attr: Attrs,
    job: string,
    transfer: string[],
    camp: string,
    avatar: string,
    card: Cards[],
    skill: string,
    resolves: Resolves[]
}

export interface Attrs {
    key: string,
    value: string
}

export interface Cards {
    type: string,
    src: string
}

/*
* auth：作者
* date：写作日期
* paragraph：段落
* **/
export interface Resolves {
    auth: string,
    date: string,
    paragraph: string[]
}