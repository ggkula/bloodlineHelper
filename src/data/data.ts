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

const dataList: EachData[] = [id0, id1, id2, id3, id4, id5, id6, id7, id8];

export default dataList.sort((a, b) => {
    return a.id - b.id
});