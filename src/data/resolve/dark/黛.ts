import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '黛丝',
    id: 10,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '牧师',
    transfer: ['武姬', '秘牧'],
    camp: '旅人',
    avatar: '/assets/avatar/dark/黛丝.png',
    card: [{
        type: '20攻击秘牧黛丝',
        src: '/assets/card/dark/黛丝.jpg'
    }, {
        type: '20攻击武姬黛丝',
        src: '/assets/card/dark/黛丝w.jpg'
    }],
    skill: [{
        skinName: '黛丝',
        leader: '所有敌人伤害、回复降低20%，所有队员攻击时无视敌方20%防御',
        talent: '普通攻击召唤死亡女神对所有敌人造成少量伤害，有小概率降低敌人35%回复，持续1回合',
        utl: '召唤死亡女神对敌方单体造成大量暗属性伤害，并为血量最低的2名队友恢复25%生命',
        fate: '黛丝干扰敌人能量的汇聚，使水、火、树、雷、光属性敌人获得的怒气减少15%'
    }],
    resolves: [
        {
            auth: 'null',
            date: '19年6月21日',
            paragraph: [
                '建设中'
            ]
        }
    ]
};

export default theData