import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '狩',
    id: 48,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '牧师',
    transfer: ['执政官', '武姬'],
    camp: '圣地',
    avatar: '/assets/avatar/water/狩.png',
    card: [{
        type: '20攻击武姬狩',
        src: '/assets/card/water/狩.png'
    }],
    skill: [{
        skinName: '狩',
        leader: '水与光属性队员获得神圣冰晶祝福，伤害与防御增加30%',
        talent: '狩的分身使自己的暴击概率增加15%,狩的治愈水晶每回合有概率治疗一名虚弱的队员',
        utl: '狩召唤双影分身，对敌人形成强力3连击，造成超大量水属性伤害',
        fate: '狩位于队伍后排时，每回合额外使用治疗水晶治愈自己一次,位于前排时暴击伤害增加75%'
    },{
        skinName: '幻花之境·狩',
        leader: '水与光属性队员获得神圣冰晶祝福，伤害与防御增加30%',
        talent: '狩的分身使自己的暴击概率增加15%,狩的治愈水晶每回合有概率治疗一名虚弱的队员',
        utl: '狩对敌方单体造成大量水属性伤害，并为血量最低的队友恢复35%生命',
        fate: '狩位于队伍后排时，每回合额外使用治疗水晶治愈自己一次,位于前排时暴击伤害增加75%'
    }, ],
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