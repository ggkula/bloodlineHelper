import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '苏苏',
    id: 41,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '刺客',
    transfer: ['影舞者', '鬼剑士'],
    camp: '异族',
    avatar: '/assets/avatar/light/苏苏.png',
    card: [{
        type: '20攻击影舞者苏苏',
        src: '/assets/card/light/苏苏.jpg'
    }],
    skill: [{
        skinName: '苏苏',
        leader: '所有队员攻击与血量上限增加15%，苏苏必杀伤害增加30%',
        talent: '战场中每有一名光属性或刺客角色，苏苏暴击概率增加3%（光属性刺客增加双倍效果），苏苏第一次暴击获得30怒气',
        utl: '苏苏优先对所有后排敌人造成大量光属性伤害,如果后排没有敌人，则对所有前排敌人造成大量光属性伤害',
        fate: '苏苏用伞格挡远方的攻击，队员受到来自敌方后排攻击的伤害与暴击概率降低10%,苏苏造成伤害的10%治疗自己'
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