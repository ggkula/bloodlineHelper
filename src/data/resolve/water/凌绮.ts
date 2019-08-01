import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '凌绮',
    id: 84,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者'],
    camp: '圣地',
    avatar: '/assets/avatar/water/凌绮.png',
    card: [{
        type: '20攻击鬼剑凌绮',
        src: '/assets/card/water/凌绮.jpg'
    }],
    skill: [{
        skinName: '凌绮',
        leader: '水属性与刺客队员伤害增加35%（水刺客获得双倍效果）',
        talent: '身为“潜入特化型”修女，凌绮的受击概率大幅降低，前5回合受击率降至0.',
        utl: '凌绮对敌方单体造成大量水属性伤害，且使其伤害降低35%，持续1回合',
        fate: '回合开始时,若凌绮生命高于90%/80%时，她的伤害增加40%/20%'
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