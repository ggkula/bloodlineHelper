/* 节奏榜整合
* 每次都把最新的节奏榜放在第一个。
* */

import {RankModal} from '../../app/modal/rankModal'

import rank1905 from './rank/1905'

const rankList: RankModal[] = [
    {
        title: '19年5月节奏榜',
        year: 19,
        month: 5,
        download: '/assets/rank/1905.jpg',
        rank: rank1905
    }
]

export default rankList