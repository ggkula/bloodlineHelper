import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '辉夜',
    id: 31,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '牧师',
    transfer: ['执政官', '武姬'],
    camp: '法塔',
    avatar: '/assets/avatar/water/辉夜.png',
    card: [{
        type: '20攻击武姬辉夜',
        src: '/assets/card/water/辉夜.jpg'
    }, {
        type: '20攻击执政官辉夜',
        src: '/assets/card/water/辉夜z.jpg'
    }],
    skill: [{
        skinName: '卡莉丝',
        leader: '所有队员每回合恢复14%生命与7点怒气',
        talent: '辉夜升级装备的速度提高,战中获得的怒气增加20%,战后获得的经验值增加100%',
        utl: '辉夜对敌方全体造成少量水属性伤害，并诅咒女性敌人2回合',
        fate: '进入战斗后随机幻化2名敌人，若其为女性则石化一回合，且受击概率降低'
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