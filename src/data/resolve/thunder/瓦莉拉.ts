import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '瓦莉拉',
    id: 108,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者', '忍者'],
    camp: '异族',
    avatar: '/assets/avatar/thunder/瓦莉拉.png',
    card: [{
        type: '20攻击忍者瓦莉拉',
        src: '/assets/card/thunder/瓦莉拉.jpg'
    },{
        type: '20攻击鬼剑瓦莉拉',
        src: '/assets/card/thunder/瓦莉拉g.jpg'
    },],
    skill: [{
        skinName: '瓦莉拉',
        leader: '开场封印忍者结界，所有女性角色伤害与防御增加25%',
        talent: '瓦莉拉从背后攻击敌方弱点，降低对手15%防御，持续2回合',
        utl: '瓦莉拉使用雷电锁链封锁敌人，对单体造成超大量雷属性伤害',
        fate: '卸甲效果增加35%，瓦莉拉对法师与牧师造成的伤害增加35%'
    },{
        skinName: '祭典·瓦莉拉',
        leader: '开场封印忍者结界，所有女性角色伤害与防御增加25%',
        talent: '瓦莉拉从背后攻击敌方弱点，降低对手15%防御，持续2回合',
        utl: '瓦莉拉使用雷电锁链封锁敌人，对单体造成超大量雷属性伤害',
        fate: '瓦莉拉对法师和牧师造成的伤害增加35%，战场上每有一个法师或牧师，瓦莉拉暴击爆伤防御增加3%/5%/5%'
    },],
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
