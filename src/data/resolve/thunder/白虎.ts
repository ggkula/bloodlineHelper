import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '白麟',
    id: 104,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者', '嗜灵者'],
    camp: '旅人',
    avatar: '/assets/avatar/thunder/白虎.png',
    card: [{
        type: '20攻击鬼剑白麟',
        src: '/assets/card/thunder/白虎.jpg'
    }],
    skill: [{
        skinName: '白麟',
        leader: '攻击时无视敌方30%防御，每拥有一名刺客队员，该效果增加5%',
        talent: '普通攻击时有25%概率麻痹敌方非战士角色，与任意其他四灵角色（林美、留姬、苍岚）同时上场时，白麟攻击增加10%',
        utl: '白麟对敌方单体造成超大量雷属性伤害',
        fate: '后排雷属性和刺客暴击率增加5%，暴击伤害增加20%；雷刺客角色可获得双倍效果。'
    }, {
        skinName: '天之祭·白麟',
        leader: '攻击时无视敌方30%防御，每拥有一名刺客队员，该效果增加5%',
        talent: '普通攻击时有25%概率麻痹敌方非战士角色；任意其他四灵角色同时上场时，四灵角色攻击增加10%（其他角色获得50%的效果）',
        utl: '白麟对敌方单体造成超大量雷属性伤害',
        fate: '后排雷属性和刺客暴击率增加5%，暴击伤害增加20%；雷刺客角色可获得双倍效果。'
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