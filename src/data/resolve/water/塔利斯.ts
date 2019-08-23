import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '塔利斯',
    id: 109,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者', '嗜灵者'],
    camp: '旅人',
    avatar: '/assets/avatar/water/塔利斯.png',
    card: [{
        type: '20攻击嗜灵者塔利斯',
        src: '/assets/card/water/塔利斯.jpg'
    }],
    skill: [{
        skinName: '塔利斯',
        leader: '队员第一次暴击获得40怒气，暗与水属性敌人伤害降低20%',
        talent: '女性队员的必杀伤害增加15%，男性队员的普攻伤害增加15%',
        utl: '塔利斯对敌方全体造成中量水属性伤害',
        fate: '队伍中每拥有一名水或暗属性队员，塔利斯的暴击概率增加6%'
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
