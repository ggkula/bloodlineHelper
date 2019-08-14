import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '米丝蒂卡',
    id: 102,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '法师',
    transfer: ['术士', '巫师'],
    camp: '异世界',
    avatar: '/assets/avatar/water/米丝蒂卡.png',
    card: [{
        type: '20攻击巫师米丝蒂卡',
        src: '/assets/card/water/米丝蒂卡.jpg'
    }],
    skill: [{
        skinName: '米丝蒂卡',
        leader: '全队防御增加30%，敌方怒气降低30点',
        talent: '米丝蒂卡进入战斗后石化自己，持续1回合,之后优先攻击血量百分比最高的敌人，且对满血敌人攻击的暴击概率增加100%',
        utl: '米丝蒂卡从石棺中召唤神秘生物，对所有敌人造成中量水属性伤害，并有小概率使人形敌人石化一回合',
        fate: '米丝蒂卡伤害与暴击伤害增加20%，石化自己时恢复20%生命，石化结束时恢复20%生命'
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