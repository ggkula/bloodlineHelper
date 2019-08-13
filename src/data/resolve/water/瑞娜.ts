import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '瑞娜',
    id: 89,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '牧师',
    transfer: ['执政官', '神使'],
    camp: '旅人',
    avatar: '/assets/avatar/water/瑞娜.png',
    card: [{
        type: '20血量神使瑞娜',
        src: '/assets/card/water/瑞娜.jpg'
    }, {
        type: '20攻击神使瑞娜',
        src: '/assets/card/water/瑞娜g.jpg'
    }],
    skill: [{
        skinName: '瑞娜',
        leader: '水属性队员伤害增加30%，血量增加30%',
        talent: '回合开始时，处于点燃、重伤的队员受到伤害降低10%，持续1回合,每拥有一名处于点燃或重伤状态的队员，自身获得8点怒气',
        utl: '瑞娜驱散所有队员的点燃与重伤状态，并为所有队员回复20%生命，之后额外回复一定的生命（与防具等级有关，最高10000）',
        fate: '所有队员血量上限增加5%（队伍中存在3名以上水属性角色时效果翻倍）,必杀技释放后可以免疫点燃与重伤状态，持续1回合'
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