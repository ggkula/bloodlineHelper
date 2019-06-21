import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '焚',
    id: 11,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者', '嗜灵者'],
    camp: '异族',
    avatar: '/assets/avatar/fire/焚.png',
    card: [{
        type: '20攻击嗜灵者焚',
        src: '/assets/card/fire/焚.jpg'
    }],
    skill: [{
        skinName: '焚',
        leader: '战斗开始时点燃敌方所有非水属性队员，持续3回合',
        talent: '焚无法释放必杀技，但每次攻击都会对所有敌人造成少量伤害，并有小概率点燃目标，持续3回合',
        utl: '无（但是使用番茄升级必杀技能可以增加战斗力）',
        fate: '技能烈焰流星中的点燃概率提升100%,回合开始前若焚满怒，则本回合伤害增加40%（天赋点燃的概率翻倍的意思）'
    }],
    resolves: [
        {
            auth: 'null',
            date: '19年6月21日',
            paragraph: [
                '建设中'
            ]
        }
    ]
};

export default theData