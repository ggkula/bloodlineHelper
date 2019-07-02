import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '青龙',
    id: 23,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '旅人',
    avatar: '/assets/avatar/water/苍岚-天之祭.png',
    card: [{
        type: '20血量战神青龙',
        src: '/assets/card/water/青龙.jpg'
    }],
    skill: [{
        skinName: '苍岚',
        leader: '水属性队员伤害增加30%，所有敌方队员必杀伤害降低30%',
        talent: '战场上角色的职业与属性种类越多，自身获得的减伤就越多（每个职业与属性提供2%的减伤）',
        utl: '苍岚对敌方单体造成大量水属性伤害，并降低10%自身受到的伤害，持续2回合',
        fate: '水属性和战士队员血量和伤害增加5%（效果可叠加）'
    },{
        skinName: '天之祭-苍岚',
        leader: '水属性队员伤害增加30%，所有敌方队员必杀伤害降低30%',
        talent: '战场上每个职业与属性可为自身提供2%的减伤；任意其他四灵角色（苍岚，林美，留姬，白麟）同时上场时，四灵角色生命增加10%（其他角色获得50%的效果）',
        utl: '苍岚对敌方单体造成大量水属性伤害，并降低10%自身受到的伤害，持续2回合',
        fate: '水属性和战士队员血量和伤害增加5%（效果可叠加）'
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