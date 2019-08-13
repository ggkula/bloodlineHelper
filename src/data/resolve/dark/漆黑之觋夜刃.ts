import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '漆黑之觋·夜刃',
    id: 89,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '法师',
    transfer: ['巫师', '术士'],
    camp: '异族',
    avatar: '/assets/avatar/dark/漆黑之觋-夜刃.png',
    card: [{
        type: '20攻击巫师夜刃',
        src: '/assets/card/dark/夜刃.jpg'
    }],
    skill: [{
        skinName: '漆黑之觋·夜刃',
        leader: '所有队员战后获得经验增加50%',
        talent: '主角光环：夜刃所需COST降低5点，必杀技所需怒气降低20%，通过命运联结获得的属性增加20%',
        utl: '夜刃射出噬光卵，对敌方全体造成少量暗属性伤害，并损失10点怒气',
        fate: '夜刃使所有敌人的必杀伤害降低10%，所有队友必杀伤害增加10%'
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