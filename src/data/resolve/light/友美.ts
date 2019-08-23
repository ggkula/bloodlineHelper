import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '友美',
    id: 115,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '牧师',
    transfer: ['神使', '执政'],
    camp: '异世界',
    avatar: '/assets/avatar/light/友美.png',
    card: [{
        type: '20攻击神使友美',
        src: '/assets/card/light/友美.jpg'
    }],
    skill: [{
        skinName: '友美',
        leader: '最虚弱的3名队员受到伤害减少25%，回复微量生命',
        talent: '友美登场后振奋队员，使得全队暴击概率提升5%，受到的伤害降低5%；战斗开始时如果队伍中只有自己一名牧师，自身获得50点怒气。',
        utl: '友美的歌舞为所有队员回复少量生命，持续3回合',
        fate: '友美的援护帮助队友全力迎战敌人，所有队友的血量上限与回复增加5%'
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
