import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '冷砂',
    id: 101,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者', '嗜灵者'],
    camp: '圣地',
    avatar: '/assets/avatar/water/冷砂.png',
    card: [{
        type: '20攻击嗜灵者冷砂',
        src: '/assets/card/water/冷砂.jpg'
    }],
    skill: [{
        skinName: '冷砂',
        leader: '冷砂使所有队员暴击概率增加30%，受到伤害降低10%',
        talent: '限速战歌使所有队员血量、攻击、防御提升378点,水属性与刺客队员暴击伤害增加15%',
        utl: '冷砂高高跃起，使用镇魂锤对敌方单体进行突刺，造成超大量水属性伤害',
        fate: '冷砂升级安魂锤，暴击概率增加5%,安魂珊瑚锁定最虚弱的两名敌人，但伤害降低20%'
    },{
        skinName: '夜礼服·冷砂',
        leader: '冷砂使所有队员暴击概率增加30%，受到伤害降低10%',
        talent: '限速战歌使所有队员血量、攻击、防御提升378点,水属性与刺客队员暴击伤害增加15%',
        utl: '冷砂高高跃起，使用镇魂锤安魂珊瑚锁定最虚弱的两名敌人，造成大量水属性伤害',
        fate: '队伍中每拥有一名水属性或刺客队员，冷砂进入战斗后获得3点怒气（水刺客增加双倍怒气）'
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