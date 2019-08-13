import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '清洁工·灵儿',
    id: 94,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '牧师',
    transfer: ['神使', '执政官'],
    camp: '圣地',
    avatar: '/assets/avatar/thunder/清洁工灵儿.png',
    card: [{
        type: '20攻击神使灵儿',
        src: '/assets/card/thunder/灵二g.jpg'
    },{
        type: '全属性8神使灵儿',
        src: '/assets/card/thunder/灵二8.jpg'
    },{
        type: '20血量神使灵儿',
        src: '/assets/card/thunder/灵二.jpg'
    },],
    skill: [{
        skinName: '清洁工·灵儿',
        leader: '所有队员有概率释放必杀技后返回所消耗的怒气',
        talent: '灵儿拥有月亮领域之力，治疗效果提升；回合开始若满血则获得5点怒气，否则回复自身10%血量',
        utl: '灵儿召唤爱心守护为所有队员回复中量生命（该技能所需怒气降低10%）',
        fate: '受到神的大厅治疗后满血的队员，血量上限额外增加20%，并驱散麻痹状态'
    }],
    resolves: [
        {
            auth: '',
            date: '',
            paragraph: [
                ''
            ]
        },
    ]
};

export default theData