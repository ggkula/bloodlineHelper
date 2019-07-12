import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '神灵儿',
    id: 39,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '牧师',
    transfer: ['神使', '执政官'],
    camp: '圣地',
    avatar: '/assets/avatar/thunder/神灵二.png',
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
        skinName: '神灵儿',
        leader: '所有队员有概率释放必杀技后返回所消耗的怒气',
        talent: '灵儿拥有不可思议的力量，战斗开始时将回复数值的33%转化为攻击',
        utl: '灵儿对敌方单体造成超大量雷属性伤害',
        fate: '灵儿造成的伤害增加35%；回合开始若自身血量低于75%，暴击概率增加35%，若存在【巫师】敌人，暴击概率增加效果必定生效'
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