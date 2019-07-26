import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '汐',
    id: 57,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '射手',
    transfer: ['游侠', '箭术长'],
    camp: '旅人',
    avatar: '/assets/avatar/water/汐.png',
    card: [{
        type: '20攻击游侠汐',
        src: '/assets/card/water/汐.jpg'
    }],
    skill: [{
        skinName: '汐',
        leader: '汐与后排水属性队员伤害增加65%',
        talent: '汐改造自身的装备，武器效果中“对远距离敌人伤害增加”变为“对近距离敌人伤害增加”；汐在前排时暴击率增加20%',
        utl: '汐对敌方单体造成大量水属性伤害，并无视目标50%的防御',
        fate: '水属性与射手队员攻击增加6%（效果可叠加）'
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