import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '涅莉',
    id: 8,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '牧师',
    transfer: ['巫师', '贤者'],
    camp: '异族',
    avatar: '/assets/avatar/fire/涅莉.png',
    card: [{
        type: '20攻击贤者涅莉',
        src: '/assets/card/fire/涅莉.jpg'
    }],
    skill: [{
        skinName: '涅莉',
        leader: '第二回合开始时，使所有敌方非牧师角色进入睡眠，持续到战斗结束',
        talent: '攻击时有概率使目标陷入3回合的睡眠，自身攻击处于睡眠的目标时，不会使其惊醒,此外，必杀消耗的怒气降低15%',
        utl: '优先攻击非战士职业角色，给予其中量伤害的同时使其睡眠3回合，并吸取目标20点怒气',
        fate: '第二回合开始时吸取敌方怒气比例最高角色30点怒气,回合结束时睡眠敌人下回合内受到伤害增加10%，造成伤害降低10%'
    }],
    resolves: [
        {
            auth: '',
            date: '19年6月20日',
            paragraph: [
                ''
            ]
        }
    ]
};

export default theData