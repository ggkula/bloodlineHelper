import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '雪奈',
    id: 97,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '旅人',
    avatar: '/assets/avatar/water/雪奈.png',
    card: [{
        type: '20攻击饮命者雪奈',
        src: '/assets/card/water/雪奈.jpg'
    }, {
        type: '20攻击战神雪奈',
        src: '/assets/card/water/雪奈z.jpg'
    }, ],
    skill: [{
        skinName: '雪奈',
        leader: '战场中所有水与火属性角色伤害加50%，雪奈血量上限加25%',
        talent: '雪奈升级所需经验减少33%，且免疫麻痹、石化与白骨状态,水与火属性队员受到的伤害降低5%',
        utl: '雪奈运用冥焱的能量对敌方单体进行5连击，造成超大量水属性伤害，并使其怒气降低30点',
        fate: '队伍中每拥有一名水或火属性队员，雪奈攻击与防御增加4%'
    }, {
        skinName: '炎夏·雪奈',
        leader: '战场中所有水与火属性角色伤害加50%，雪奈血量上限加25%',
        talent: '雪奈升级所需经验减少33%，且免疫麻痹、石化与白骨状态,水与火属性队员受到的伤害降低5%',
        utl: '雪奈运用冥焱的能量对敌方单体进行5连击，造成超大量水属性伤害，并使其怒气降低30点',
        fate: '队伍中每拥有一名水或火属性队员，雪奈攻击与暴击率增加4%'
    }, ],
    resolves: [
        {
            auth: '',
            date: '',
            paragraph: [

            ]
        },
    ]
};

export default theData