import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '林美',
    id: 24,
    attr: {
        key: 'tree',
        value: '木'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '旅人',
    avatar: '/assets/avatar/tree/林美-天之祭.png',
    card: [{
        type: '20血量战神林美',
        src: '/assets/card/tree/林美.jpg'
    }],
    skill: [{
        skinName: '林美',
        leader: '水火树雷属性队员的伤害增加30%，林美防御增加30%',
        talent: '玄武之甲保护前排的队员，使他们受到的伤害降低10%',
        utl: '林美对敌方单体造成大量树属性伤害，并有大概率使敌人中毒',
        fate: '林美的血量上限增加20%,进入战斗后使随机1名敌人获得中毒效果，持续3回合'
    },{
        skinName: '天之祭-林美',
        leader: '水火树雷属性队员的伤害增加30%，林美防御增加30%',
        talent: '前排的队员受到的伤害降低10%，任意其他四灵角色（苍岚，林美，留姬，白麟）同时上场时，四灵角色防御增加10%（其他角色获得50%的效果）',
        utl: '林美对敌方单体造成大量树属性伤害，并有大概率使敌人中毒',
        fate: '林美的血量上限增加20%,进入战斗后使随机1名敌人获得中毒效果，持续3回合'
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