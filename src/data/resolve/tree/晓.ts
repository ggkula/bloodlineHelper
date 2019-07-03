import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '晓',
    id: 35,
    attr: {
        key: 'tree',
        value: '木'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '旅人',
    avatar: '/assets/avatar/tree/晓.png',
    card: [{
        type: '20攻击饮命者晓',
        src: '/assets/card/tree/晓.jpg'
    },{
        type: '全属性8饮命者晓',
        src: '/assets/card/tree/晓8.jpg'
    },{
        type: '20血量饮命者晓',
        src: '/assets/card/tree/晓x.jpg'
    },{
        type: '20血量战神晓',
        src: '/assets/card/tree/晓z.jpg'
    },{
        type: '全属性8战神晓',
        src: '/assets/card/tree/晓z8.jpg'
    },],
    skill: [{
        skinName: '晓',
        leader: '树属性队员造成的伤害增加50%，第一次暴击获得20怒气',
        talent: '晓掌握奥义：修罗之怒，普攻的暴击伤害增加100%',
        utl: '使用剑术：剑刃风暴，利用强大的剑气对敌方全体造成中量树属性伤害',
        fate: '晓位于前排时，血量上限与防御增加30%,位于后排时暴击概率增加30%'
    },{
        skinName: '皮肤·晓',
        leader: '树属性队员造成的伤害增加50%，第一次暴击获得20怒气',
        talent: '晓掌握奥义：修罗之怒，普攻的暴击伤害增加100%',
        utl: '使用剑术：剑刃风暴，利用强大的剑气对敌方单体造成超大量树属性伤害',
        fate: '晓位于前排时，血量上限与防御增加30%,位于后排时暴击概率增加30%'
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