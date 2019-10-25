import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '米蕾',
    id: 50,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者'],
    camp: '异族',
    avatar: '/assets/avatar/thunder/米蕾.png',
    card: [{
        type: '20攻击影舞者米蕾',
        src: '/assets/card/thunder/米蕾.png'
    }],
    skill: [{
        skinName: '米蕾',
        leader: '雷与光属性队员血量增加15%，每拥有一名雷或光属性队员，敌方所有队员受到的伤害增加7%',
        talent: '米蕾自身伤害提升100%，但攻击降低20%',
        utl: '米蕾对敌方单体造成大量雷属性伤害，并对其附近的敌人额外伤害（根据敌人位置不同，额外伤害的效果也不同）',
        fate: '回合开始时若自身血量大于50%，本回合内受到的伤害降低25%，否则本回合内受击率降低，且天赋中的攻击力降低效果移除'
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
