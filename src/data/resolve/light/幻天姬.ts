import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '幻天姬',
    id: 70,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '刺客',
    transfer: ['影舞者', '鬼剑士'],
    camp: '旅人',
    avatar: '/assets/avatar/light/幻天姬.png',
    card: [{
        type: '20攻击影舞者幻天姬',
        src: '/assets/card/light/幻天姬.jpg'
    }],
    skill: [{
        skinName: '幻天姬',
        leader: '光属性队员造成的伤害增加50%',
        talent: '幻天姬跳起真衣之舞，使水、火、树、雷、光属性队员士气高涨，暴击伤害提升30%',
        utl: '幻天姬召唤天河双姬像，对敌方单体造成超大量光属性伤害',
        fate: '幻天姬施放天河乱舞后，有50%概率汇聚天河星辰之力，立刻获得所消耗的怒气'
    }, {
        skinName: '花嫁·幻天姬',
        leader: '光属性队员造成的伤害增加50%',
        talent: '幻天姬跳起真衣之舞，自身暴击伤害增加30%，刺客队友暴击伤害增加15%；同时使敌人意乱情迷，暴击伤害降低15%',
        utl: '幻天姬召唤天河双姬像，对敌方单体造成大量光属性伤害（该技能所需怒气降低15%）',
        fate: '幻天姬施放天河乱舞后，有50%概率汇聚天河星辰之力，立刻获得所消耗的怒气'
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