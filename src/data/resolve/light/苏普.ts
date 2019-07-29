import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '苏普',
    id: 65,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '法师',
    transfer: ['巫师', '贤者'],
    camp: '法塔',
    avatar: '/assets/avatar/light/苏普.png',
    card: [{
        type: '20攻击贤者苏普',
        src: '/assets/card/light/苏普.jpg'
    }],
    skill: [{
        skinName: '苏普',
        leader: '回合开始血量低于50%的队员伤害增加80%',
        talent: '所有女性敌人的伤害降低10%，苏普对于女性敌人的攻击无法暴击,由于醉心于法术研究，苏普命运联结的解锁没有消耗',
        utl: '苏普对敌方单体造成大量光属性伤害，并吸取目标20点怒气给自己',
        fate: '回合开始苏普若非满血，则获得20怒气且本回合内受到的伤害降低50%，该效果每5回合只能触发1次'
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