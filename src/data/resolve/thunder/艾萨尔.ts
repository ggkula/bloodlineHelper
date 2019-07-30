import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '艾萨尔',
    id: 68,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '射手',
    transfer: ['游侠', '箭术长', '风吟者'],
    camp: '圣地',
    avatar: '/assets/avatar/thunder/艾萨尔.png',
    card: [{
        type: '20攻击游侠艾萨尔',
        src: '/assets/card/thunder/艾萨尔.jpg'
    }],
    skill: [{
        skinName: '艾萨尔',
        leader: '回合开始时所有队员怒气越高，伤害越高（每20%怒气增加12%伤害）',
        talent: '小概率使非雷敌人麻痹1回合，优先攻击处于麻痹和诅咒状态的敌人；与艾斯卡或任意圣地阵营角色一同出场时自身攻击力提高15％',
        utl: '艾萨尔对敌方单体造成超大量雷属性伤害',
        fate: '攻击处于诅咒状态的敌人必定使其麻痹1回合（连续攻击同一名角色时两回合触发一次）,对处于诅咒和麻痹状态的敌人追加50%伤害'
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