import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '灯兵',
    id: 73,
    attr: {
        key: 'tree',
        value: '木'
    },
    job: '牧师',
    transfer: ['神使', '执政官'],
    camp: '圣地',
    avatar: '/assets/avatar/tree/灯兵.png',
    card: [{
        type: '20攻击神使灯兵',
        src: '/assets/card/tree/灯兵.jpg'
    }],
    skill: [{
        skinName: '灯兵',
        leader: '回合开始时，血量低于50%的角色，恢复15%生命，回复增加60%',
        talent: '与小弑同时在场时，血量增加30%，防御增加30%；每回合开始时，每一名自身队伍中的圣地阵营角色使自己获得2点怒气，每一名敌方队伍中异族阵营角色使自己获得3点怒气。',
        utl: '全队伤害增加30%，使敌方异族阵营角色受到伤害增加30%，持续2次行动',
        fate: '队伍中每存在一个【圣地】阵营角色，【圣地】阵营角色伤害增加4%'
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