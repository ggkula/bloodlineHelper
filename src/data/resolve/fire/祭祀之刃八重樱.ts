import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '祭祀之刃·八重樱',
    id: 72,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '异世界',
    avatar: '/assets/avatar/fire/祭祀之刃-八重樱.png',
    card: [{
        type: '20攻击饮命者八重樱',
        src: '/assets/card/fire/八重樱.jpg'
    }],
    skill: [{
        skinName: '祭祀之刃·八重樱',
        leader: '前排队员血量上限增加40%，八重樱伤害增加40%',
        talent: '八重樱升级装备的速度提高；进入战斗以损失10%生命为代价获得所有怒气，立即释放樱月一闪，但本次伤害降低25%',
        utl: '八重樱对敌方单体造成超大量火属性伤害，并使得后续攻击的暴击概率增加15%，该效果持续3回合',
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