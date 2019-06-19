/** 所有数据的集合
*/
import {EachData} from '../app/modal/dataModal'

import id0 from './resolve/dark/奥'
import id1 from './resolve/dark/巡'
import id2 from './resolve/light/露'
import id3 from './resolve/fire/萝莉'
import id4 from './resolve/light/德'

const dataList: EachData[] = [id0, id1, id2, id3, id4];

export default dataList.sort((a, b) => {
    return a.id - b.id
});