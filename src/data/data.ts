/** 所有数据的集合
*/
import {EachData} from '../app/modal/dataModal'

import id0 from './resolve/dark/奥'
import id1 from './resolve/dark/巡'
import id2 from './resolve/light/露'
import id3 from './resolve/fire/夜萝'
import id4 from './resolve/light/光德'
import id5 from './resolve/dark/夜凛'
import id6 from './resolve/dark/熔融'
import id7 from './resolve/fire/御'
import id8 from './resolve/fire/涅莉'
import id9 from './resolve/tree/艾斯卡'
import id10 from './resolve/dark/黛'
import id11 from './resolve/fire/焚'
import id12 from './resolve/fire/微热'
import id13 from './resolve/light/莉娅丝'
import id14 from './resolve/dark/佑希'
import id15 from './resolve/tree/伊娜'
import id16 from './resolve/tree/维兰瑟'
import id17 from './resolve/tree/三茶'
import id18 from './resolve/tree/脚疼'
import id19 from './resolve/tree/泷尉'
import id20 from './resolve/water/卡莉丝'
import id21 from './resolve/thunder/月亮'
import id22 from './resolve/thunder/谦'

const dataList: EachData[] = [id0, id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, id11, id12, id13, id14, id15, id16, id17, id18, id19, id20, id21, id22];

export default dataList.sort((a, b) => {
    return a.id - b.id
});