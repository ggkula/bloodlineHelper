/*
 * title: string 节奏榜标题
 * year: number 节奏榜年份
 * month: number 节奏榜月份
 * rank: import object[]
 */

export interface RankModal {
    title: string,
    year: number,
    month: number,
    rank: Rank[],
}

/*
* type：score / describe 单行类型：分数或说明。
* score: 本行的分数
* sort：本行节奏榜卡片排序，按照id排序。
* bgc：本行的背景颜色
* describe： 若类型为describe，则显示的描述文字
* */

export interface Rank {
    type: 'score' | 'describe',
    score?: number,
    sorts?: number[],
    bgc?: string,
    describe?: string
}