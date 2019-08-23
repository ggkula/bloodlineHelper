import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '八重樱',
    id: 113,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '异世界',
    avatar: '/assets/avatar/fire/八重樱.png',
    card: [{
        type: '20攻击饮命者八重樱',
        src: '/assets/card/fire/八重樱.jpg'
    }],
    skill: [{
        skinName: '八重樱',
        leader: '前排队员血量上限增加40%，八重樱伤害增加40%',
        talent: '八重樱升级装备的速度提高,回合开始若八重樱血量大于10%，则流逝5%生命，获得20点怒气',
        utl: '八重樱对敌方单体造成超大量火属性伤害，并使得后续的樱月一闪伤害增加50%，该效果持续5回合',
        fate: '回合开始若八重樱生命低于60%/40%/20%时，她的伤害增加20%/40%/60%'
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
