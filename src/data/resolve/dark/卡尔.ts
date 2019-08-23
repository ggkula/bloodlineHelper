import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '卡尔',
    id: 114,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '牧师',
    transfer: ['神使', '执政官'],
    camp: '旅人',
    avatar: '/assets/avatar/dark/卡尔.png',
    card: [{
        type: '20血量执政官卡尔',
        src: '/assets/card/dark/卡尔.jpg'
    }],
    skill: [{
        skinName: '卡尔',
        leader: '所有队员受到伤害降低10%，每回合获得10点怒气',
        talent: '每回合开始所有受伤的队员恢复3%生命,卡尔与塔利斯同时登场时，双方的血量上限增加10%',
        utl: '卡尔使全队成员下2次攻击伤害增加50%',
        fate: '自身免疫麻痹与石化状态,回合开始时若卡尔生命小于50%，则自身受到的伤害降低25%'
    }],
    resolves: [
        {
            auth: '',
            date: '',
            paragraph: [

            ]
        }
    ]
};

export default theData
