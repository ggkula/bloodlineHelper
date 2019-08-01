import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '仇恨女士',
    id: 83,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '射手',
    transfer: ['游侠', '箭术长'],
    camp: '圣地',
    avatar: '/assets/avatar/water/仇恨女士.png',
    card: [{
        type: '20攻击游侠仇恨女士',
        src: '/assets/card/water/仇恨女士.jpg'
    }],
    skill: [{
        skinName: '仇恨女士',
        leader: '回合开始血量低于75%的队员伤害增加30%，受伤降低30%',
        talent: '仇恨女士使用重压，自身第1回合伤害增加100%,若仇恨女士为队长，血量大于75%也能获得仇恨领域50%的效果',
        utl: '叹息收割造成超大量水属性伤害，该伤害对于满血敌人降低35%，对于血量低于75%的敌人增加35%',
        fate: '战斗开始仇恨女士随机刻录一名敌人的罪行，若其非水属性则防御降低25%，且受击概率增加100%，持续5回合'
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