import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '月亮隐者',
    id: 21,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '牧师',
    transfer: ['神使', '执政官'],
    camp: '圣地',
    avatar: '/assets/avatar/thunder/月亮.png',
    card: [{
        type: '20血量神使月亮隐者',
        src: '/assets/card/thunder/月亮.jpg'
    }],
    skill: [{
        skinName: '月亮隐者',
        leader: '回合开始，最虚弱的3名队员恢复20%生命与10点怒气',
        talent: '月亮隐者的伤害降低50%，换取追踪“有形之物”的能力：普攻优先攻击满怒的敌人，若其非雷属性则被诅咒1回合',
        utl: '展现月亮领域的惩戒面，麻痹怒气比例最高的敌人，持续2回合,并额外使其损失20点怒气',
        fate: '展现月亮领域的庇护面，回合开始最虚弱的队友受到伤害降低15%，持续2回合'
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