import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '死翼千歌',
    id: 54,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '法师',
    transfer: ['巫师', '贤者'],
    camp: '法塔',
    avatar: '/assets/avatar/dark/死翼千歌.png',
    card: [{
        type: '20攻击贤者死翼千歌',
        src: '/assets/card/dark/死翼千歌.jpg'
    }],
    skill: [{
        skinName: '死翼千歌',
        leader: '队员伤害的25%治疗自己，死翼千歌始终维持骨妖形态',
        talent: '与露露缇雅同时登场时双方血量上限增加10%，若释放必杀或回合开始若自身血量低于40%，攻击、防御增加40%，持续到战斗结束。',
        utl: '死翼千歌对敌方单体造成超大量暗属性伤害,若回合开始自己血量大于40%，额外为自己回复25%生命',
        fate: '奏歌·终焉（必杀技）的伤害增加20%，队友受到非法师敌人的伤害降低5%'
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