import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '飞鸟',
    id: 51,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '刺客',
    transfer: ['嗜灵者', '影舞者'],
    camp: '旅人',
    avatar: '/assets/avatar/fire/飞鸟.png',
    card: [{
        type: '20攻击影舞者飞鸟',
        src: '/assets/card/fire/火鸡.jpg'
    }],
    skill: [{
        skinName: '飞鸟',
        leader: '所有队员暴击概率增加35%，飞鸟获得双倍加成',
        talent: '飞鸟修炼姬神焱域，使得自己的必杀技伤害增加50%,在飞鸟怒气不足时，该效果会转为暴击伤害的加成，首次释放必杀技之前，自身获取怒气速度提高70%。',
        utl: '进入姬神焱域，召唤守护火鸟对敌方单体造成罕见的超大量火属性伤害',
        fate: '飞鸟每次受击或被治疗时获得10点怒气,且入场时必杀伤害增加100%，但该效果随着回合流逝会逐渐减弱'
    }, {
        skinName: '少女·飞鸟',
        leader: '所有队员暴击概率增加35%，飞鸟获得双倍加成',
        talent: '飞鸟修炼血脉力量，暴击伤害增加50%,首次满怒前怒气获取增加70%。此外敌人因飞鸟的年幼放松警惕，飞鸟受击概率降低。',
        utl: '进入姬神焱域，召唤守护火鸟对敌方单体造成罕见的超大量火属性伤害',
        fate: '飞鸟每次受击或被治疗时获得10点怒气,且入场时必杀伤害增加100%，但该效果随着回合流逝会逐渐减弱'
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