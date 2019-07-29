import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '安娜',
    id: 63,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '法师',
    transfer: ['巫师', '术士'],
    camp: '法塔',
    avatar: '/assets/avatar/fire/安娜.png',
    card: [{
        type: '20攻击巫师安娜',
        src: '/assets/card/fire/安娜.jpg'
    }],
    skill: [{
        skinName: '安娜',
        leader: '火属性队员造成的伤害增加50%',
        talent: '安娜进入战斗和受到火焰伤害时为自己恢复少量生命与怒气,每拥有一名火属性队员，所有队友受到伤害降低2%',
        utl: '召唤炎凰坦克射出大量燃烧弹，对敌方全体造成中量火属性伤害',
        fate: '火属性队员的伤害增加5%,回合开始若安娜血量低于30%，有大概率恢复少量生命与怒气'
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