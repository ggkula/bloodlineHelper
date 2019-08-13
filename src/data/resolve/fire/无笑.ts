import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '花圃无笑',
    id: 93,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '法师',
    transfer: ['巫师', '贤者'],
    camp: '圣地',
    avatar: '/assets/avatar/fire/无笑.png',
    card: [{
        type: '20攻击贤者花圃无笑',
        src: '/assets/card/fire/无笑.jpg'
    }],
    skill: [{
        skinName: '花圃无笑',
        leader: '战场中所有火属性角色的伤害增加60%',
        talent: '花圃无笑会优先攻击敌方的法师,在怒气不足的情况下也可释放佚名·火球术，但不享受必杀加成，伤害降低50%',
        utl: '花圃无笑从天际召唤巨大的火球，对敌方单体造成超大量火属性伤害',
        fate: '花圃无笑身为修罗刺小队的法师专克兵，对敌方法师伤害增加50%；回合开始时敌方每有一名法师在场自身回复8点怒气'
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