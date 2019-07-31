import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '复兴天使',
    id: 80,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '牧师',
    transfer: ['神使', '执政'],
    camp: '异世界',
    avatar: '/assets/avatar/light/复兴天使.png',
    card: [{
        type: '20血量神使复兴天使',
        src: '/assets/card/light/复兴天使.jpg'
    },{
        type: '20攻击神使复兴天使',
        src: '/assets/card/light/复兴天使g.jpg'
    }],
    skill: [{
        skinName: '复兴天使',
        leader: '牧师队员暴击率增加30%，前排牧师队员攻击增加30%',
        talent: '复兴天使免疫中毒、石化、诅咒,第一次释放必杀后自身可获得100怒气，但下回合治疗虚弱队员的效果降低25%',
        utl: '复兴天使随机复活一名已经阵亡的队友,如果没有队友阵亡，则为最虚弱的1名队友回复大量生命',
        fate: '战斗开始所有队员受到伤害降低25%，持续1回合,战斗开始受伤的队员回复25%生命'
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