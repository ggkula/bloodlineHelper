import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '米多利',
    id: 105,
    attr: {
        key: 'tree',
        value: '木'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞'],
    camp: '异族',
    avatar: '/assets/avatar/tree/米多利.png',
    card: [{
        type: '20攻击鬼剑米多利',
        src: '/assets/card/tree/米多利.jpg'
    }],
    skill: [{
        skinName: '米多利',
        leader: '所有队员造成的伤害增加35%，获得经验增加35%',
        talent: '米多利每次攻击消耗5点怒气召唤3个分身，造成的伤害提升30%',
        utl: '米多利召唤分身，从敌人的周围同时进攻，对单体造成超大量树属性伤害',
        fate: '米多利造成伤害的10%治疗自己，暴击概率增加20%。缔结契约后，自身怒气低于50%时，额外获得5%吸血和10%暴击'
    }, {
        skinName: '米多利·强化',
        leader: '所有队员造成的伤害增加35%，获得经验增加35%',
        talent: '米多利每次攻击消耗5点怒气召唤3个分身，造成的伤害提升30%',
        utl: '米多利召唤分身，从敌人的周围同时进攻，对单体造成超大量树属性伤害',
        fate: '（好感度达到7级后强化）米多利造成伤害的10%治疗自己，暴击概率增加20%。自身怒气低于50%时，额外获得5%吸血和10%暴击'
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