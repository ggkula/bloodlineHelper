import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '小弑',
    id: 69,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '射手',
    transfer: ['箭术长', '游侠'],
    camp: '圣地',
    avatar: '/assets/avatar/fire/小弑.png',
    card: [{
        type: '20攻击游侠小弑',
        src: '/assets/card/fire/小弑.jpg'
    }],
    skill: [{
        skinName: '小弑',
        leader: '第一回合全队伤害增加70%，这个效果随回合数效果逐渐减弱（第三回合降至30%）',
        talent: '与灯兵同时在场时，血量增加30%，攻击增加20%，小弑会优先攻击异族阵营角色。',
        utl: '小弑对敌方单体造成超大量火属性必杀',
        fate: '对阵营为异族的角色追加50%伤害'
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