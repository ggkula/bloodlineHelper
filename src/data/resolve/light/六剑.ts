import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '六剑神威',
    id: 100,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '刺客',
    transfer: ['影舞者', '鬼剑士'],
    camp: '圣地',
    avatar: '/assets/avatar/light/六剑.png',
    card: [{
        type: '20攻击鬼剑六剑神威',
        src: '/assets/card/light/六剑.jpg'
    }],
    skill: [{
        skinName: '六剑神威',
        leader: '战场中所有光属性角色的伤害增加60%',
        talent: '六剑神威对神立誓贫穷：战斗中获得的金币减少75%，但击杀敌人立刻获得75怒气,自身与美铁勇铁的攻击增加20%',
        utl: '对敌方单体造成超大量光属性伤害，并有概率使敌人防御降低30%，持续3回合',
        fate: '六剑神威从双剑中获取力量，自身受击概率降低30%，必杀技伤害提升30%'
    } ],
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