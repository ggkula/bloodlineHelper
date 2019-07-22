import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '萝丝蕾雅',
    id: 55,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '法师',
    transfer: ['巫师', '术士'],
    camp: '法塔',
    avatar: '/assets/avatar/light/萝丝蕾雅.png',
    card: [{
        type: '20攻击巫师萝丝蕾雅',
        src: '/assets/card/light/萝丝蕾雅.jpg'
    }],
    skill: [{
        skinName: '萝丝蕾雅',
        leader: '回合开始时，光属性与法师队员回复10%生命与10点怒气',
        talent: '自身位于后排时，后排法师收到的伤害降低15%',
        utl: '萝丝蕾雅对敌方全体造成少量光属性伤害，并为我方所有队员回复10%生命（法师角色效果翻倍）',
        fate: '自身的怒气获取速度增加20%；回合开始时，每个贤者队友可以额外为全队回复3点怒气'
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