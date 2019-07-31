import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '鸢',
    id: 76,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '法师',
    transfer: ['巫师', '术士'],
    camp: '旅人',
    avatar: '/assets/avatar/dark/鸢.png',
    card: [{
        type: '20攻击巫师鸢',
        src: '/assets/card/dark/鸢.jpg'
    }],
    skill: [{
        skinName: '鸢',
        leader: '成为队长后自己每回合获得33点怒气。',
        talent: '鸢承载了邪神的意志，每回合获得6点怒气并回复6%血量，但自身首回合被诅咒；每次释放必杀技之前自身的必杀伤害提高35%，该效果可叠加。（实测最多叠加8次）',
        utl: '鸢掌握着封印的力量，必杀技对全体敌人造成少量伤害，有概率造成诅咒效果。',
        fate: '鸢决心主导自己的命运，进入战斗后每回合额外获得6点怒气。'
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