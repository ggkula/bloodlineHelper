import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '艾莉丝',
    id: 112,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '异族',
    avatar: '/assets/avatar/thunder/艾莉丝.png',
    card: [{
        type: '20攻击饮命者艾莉丝',
        src: '/assets/card/thunder/艾莉丝.jpg'
    }],
    skill: [{
        skinName: '艾莉丝',
        leader: '所有队员攻击时无视敌方30%防御，每拥有一名战士队员，该效果增加5%',
        talent: '普通攻击时有25%概率麻痹敌方非战士角色',
        utl: '艾莉丝对所有敌人造成中量雷属性伤害，并有30%概率使其损失10点怒气',
        fate: '艾莉丝的伤害与生命增加15%。此外，攻击时有10%概率麻痹敌人1回合'
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
