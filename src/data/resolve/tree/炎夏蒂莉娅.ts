import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '蒂莉娅',
    id: 76,
    attr: {
        key: 'tree',
        value: '木'
    },
    job: '法师',
    transfer: ['巫师', '术士'],
    camp: '法塔',
    avatar: '/assets/avatar/tree/炎夏-蒂莉娅.png',
    card: [{
        type: '20攻击巫师蒂莉娅',
        src: '/assets/card/tree/蒂莉娅.png'
    }],
    skill: [{
        skinName: '炎夏·蒂莉娅',
        leader: '蒂利娅使敌人宁静，其怒气降低20点，伤害降低20%',
        talent: '魔剑能量使自己获得怒气增加20%，自己与帝利亚受到伤害降低10%，敌方法师获取怒气的速度降低20%',
        utl: '蒂利娅对敌方全体造成中量树属性伤害，并有小概率使非树属性敌人陷入睡眠状态，持续2回合',
        fate: '回合开始敌方怒气最多的角色怒气降低5点；天赋的减怒效果同时影响敌方牧师'
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