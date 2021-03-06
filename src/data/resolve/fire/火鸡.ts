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
            auth: '北斗',
            date: '19年7月31日',
            paragraph: [
                '这张卡经过一点点的吃糖加强，又出了新皮肤，已经是一张不错的刺客卡了。',
                '面板20000以上的攻击，在所有卡里也算佼佼者，皮肤赋予的闪避加上影舞者特性，能够在场上得以生存很久，50%的爆伤，第一次必杀前获得怒气加70%以及被打被治疗加10怒气，能使火鸡很快就开出大来，快的话，第2,3回合就能开大，超大量的伤害，基本打在非水卡身上是打谁秒谁，就算后续的话，也是有机会开出第二个大的。',
                '作为队长的话队长技也是很不错，自己暴击率翻倍，70%，再加上武器和影舞者的加成，就接近100%出暴击了，队员35%的暴击率，给一些本身暴击率高的队员，鬼剑刺客大多能够达到暴击率60以上，队员可以由其他高爆伤的成员组成，例如小樱，晓，田鸡等等。',
                '适合队伍：刺客队，暴击队，火队，卡莉丝队长'
            ]
        }
    ]
};

export default theData