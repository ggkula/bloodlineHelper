import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '锌镉熔融',
    id: 6,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者', '嗜灵者'],
    camp: '异族',
    avatar: '/assets/avatar/dark/锌镉熔融.png',
    card: [{
        type: '20攻击鬼剑锌镉熔融',
        src: '/assets/card/dark/锌镉熔融.jpg'
    }],
    skill: [{
        skinName: '锌镉熔融',
        leader: '战场上所有暗属性队员伤害增加60%',
        talent: '自身受到的伤害降低20%，受击12次后的下回合后失效。生效期间受击率大幅提高，若本回合受到伤害，下回合暴击率大幅提高',
        utl: '锌镉熔融对敌方全体造成少量暗属性伤害，有小概率使目标陷入重伤，持续2回合',
        fate: '回合开始时，若自身存活且金属掌握尚未失效，则前排的暗属性与刺客队友受到伤害减少15%'
    }],
    resolves: [
        {
            auth: '',
            date: '19年6月20日',
            paragraph: [
                ''
            ]
        }
    ]
};

export default theData