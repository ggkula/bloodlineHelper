import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '布洛妮娅',
    id: 36,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '圣地',
    avatar: '/assets/avatar/thunder/布洛妮娅.png',
    card: [{
        type: '20攻击战神布洛妮娅',
        src: '/assets/card/thunder/布洛妮娅.jpg'
    }],
    skill: [{
        skinName: '布洛妮娅',
        leader: '回合开始时非满血雷属性队员暴击率增加50%，暴击伤害增加50%',
        talent: '布洛妮娅升级装备的速度提高,队伍中每拥有一名雷属性或者战士角色，所有队员伤害增加3%',
        utl: '对敌方全体造成中量雷属性伤害',
        fate: '回合开始若布洛妮娅非满血，则触发机甲狂怒状态：伤害增加70%，该效果每3回合只能触发一次'
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