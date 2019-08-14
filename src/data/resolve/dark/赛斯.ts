import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '西利欧',
    id: 95,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '战士',
    transfer: ['战神', '饮命者', '黑骑士'],
    camp: '异族',
    avatar: '/assets/avatar/dark/赛斯.png',
    card: [{
        type: '全属性8黑骑士赛斯',
        src: '/assets/card/dark/赛斯.jpg'
    }, {
        type: '20攻击饮命者赛斯',
        src: '/assets/card/dark/赛斯y.jpg'
    }, {
        type: '20血量黑骑士赛斯',
        src: '/assets/card/dark/赛斯x.jpg'
    }, ],
    skill: [{
        skinName: '赛斯',
        leader: '暗属性队员造成的伤害增加50%',
        talent: '赛斯拥有生前的骑士本能，冲锋距离越远，伤害越高,队伍中每有一名暗属性成员，赛斯血量与攻击增加3%',
        utl: '对敌方全体造成中量暗属性伤害，并有小概率使敌人回复降低50%，持续3回合',
        fate: '后排的暗属性队友受到的伤害降低10%，赛斯天赋中冲锋的加成效果增加100%'
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