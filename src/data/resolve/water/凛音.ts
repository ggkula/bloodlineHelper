import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '凛音',
    id: 32,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者'],
    camp: '异世界',
    avatar: '/assets/avatar/water/凛音.png',
    card: [{
        type: '20攻击鬼剑凛音',
        src: '/assets/card/water/凛音.jpg'
    }],
    skill: [{
        skinName: '凛音',
        leader: '阵营为“异世界”的队员伤害增加50%，受到伤害减少10%',
        talent: '同时拥有暗与水属性的力量(主属性为暗，可通过时装进行切换)，对光属性和火属性角色追加伤害25%',
        utl: '凛音对敌方单体造成大量伤害，并且使目标白骨1回合',
        fate: '我方存在任意暗属性或者水属性队友时，凛音暴击率增加30%，暴击伤害增加50%'
    }],
    resolves: [
        {
            auth: '',
            date: '',
            paragraph: [
                ''
            ]
        }
    ]
};

export default theData