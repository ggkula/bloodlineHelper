import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '澪琉',
    id: 29,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '射手',
    transfer: ['箭术长', '游侠'],
    camp: '圣地',
    avatar: '/assets/avatar/fire/澪琉.png',
    card: [{
        type: '20攻击箭术长澪琉',
        src: '/assets/card/fire/澪琉.jpg'
    }],
    skill: [{
        skinName: '澪琉',
        leader: '澪琉与后排队员血量上限增加35%，伤害增加35%',
        talent: '澪琉进入战斗后获得10点怒气，且自己与战争姬的血量上限增加10%',
        utl: '回合开始若澪琉生命大于35%，对敌方单体造成超大量火属性伤害,否则必杀伤害降低35%，但自身回复35%生命',
        fate: '澪琉将敌人的记忆化作实体吞食，开场使随机2名敌人的攻击力降低5%，且遗忘命运技'
    }],
    resolves: [
        {
            auth: '',
            date: '',
            paragraph: [
                ''
            ]
        }
    ]
};

export default theData