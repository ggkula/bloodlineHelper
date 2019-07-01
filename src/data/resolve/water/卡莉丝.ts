import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '卡莉丝',
    id: 20,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '法塔',
    avatar: '/assets/avatar/water/卡莉丝.png',
    card: [{
        type: '20攻击战神卡莉丝',
        src: '/assets/card/water/卡莉丝.jpg'
    }],
    skill: [{
        skinName: '卡莉丝',
        leader: '自身受到致死伤害时若还有队友存活，则本回合不会死亡,每次受到致死伤害时自身的受击率降低（技能实测效果：受到AOE伤害时，会按照站位顺序判定死亡队列，若卡莉丝队长建议将卡莉丝放在一号位）',
        talent: '第一回合可获得不死之躯的效果并且受击率提高，此回合结束时根据受击次数增加伤害（每次5%），持续20回合',
        utl: '卡莉丝对敌方全体造成中量水属性伤害',
        fate: '与卡莉丝在同一排的队员血量上限增加10%，其他队员伤害增加10%'
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