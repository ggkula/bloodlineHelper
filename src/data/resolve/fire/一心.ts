import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '灯蓟一心',
    id: 103,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '法师',
    transfer: ['巫师', '术士'],
    camp: '旅人',
    avatar: '/assets/avatar/fire/一心.png',
    card: [{
        type: '20攻击巫师灯蓟一心',
        src: '/assets/card/fire/一心.jpg'
    }],
    skill: [{
        skinName: '灯蓟一心',
        leader: '火属性与法师队员伤害增加35%（火法师获得双倍效果）',
        talent: '灯蓟一心的Cost降低4点,回合开始，满血的队员受到灯蓟一心的烛光指引，获得6点怒气',
        utl: '灯蓟一心从灯笼中释放火焰守护，对敌方全体造成中量火属性伤害',
        fate: '烛心细语对于受伤的队友也能持续生效，但非火属性队友只能获得50%的怒气回复效果'
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
