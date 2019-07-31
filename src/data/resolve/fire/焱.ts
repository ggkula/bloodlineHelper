import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '焱',
    id: 77,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '牧师',
    transfer: ['神使', '执政官', '武姬'],
    camp: '旅人',
    avatar: '/assets/avatar/fire/焱.png',
    card: [{
        type: '20攻击神使焱',
        src: '/assets/card/fire/焱.jpg'
    }, {
        type: '20攻击武姬焱',
        src: '/assets/card/fire/焱w.jpg'
    }],
    skill: [{
        skinName: '焱',
        leader: '回合开始所有队员获得8%伤害加成，最多叠加10次',
        talent: '焱的舞蹈激励队员士气，提升所有队员的回复,且回合开始为最虚弱的队员回复8%生命（火属性队员获得1.5倍回复效果）',
        utl: '施展红鹤之舞在敌方脚底召唤熔岩火柱，对所有敌人造成中量火属性伤害,该伤害每回合增加4%，最多40%',
        fate: '焱施放红鹤之舞后，将散发的热量转换为全队的治愈，为所有队友恢复15%生命'
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