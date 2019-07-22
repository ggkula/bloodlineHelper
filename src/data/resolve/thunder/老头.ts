import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '鞭挞主教',
    id: 52,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '牧师',
    transfer: ['神使', '执政官'],
    camp: '圣地',
    avatar: '/assets/avatar/thunder/鞭挞.png',
    card: [{
        type: '20攻击神使鞭挞主教',
        src: '/assets/card/thunder/老头.jpg'
    }],
    skill: [{
        skinName: '鞭挞主教',
        leader: '阵营为“圣地”的角色伤害增加40%，敌方非“圣地”阵营角色伤害降低15%',
        talent: '同时拥有光与雷属性的力量(主属性为雷，可通过时装进行切换)，免疫麻痹与诅咒，回合开始为最虚弱的1名队员恢复10%生命',
        utl: '鞭挞主教对敌方单体造成超大量伤害',
        fate: '队伍中每有一名“圣地”阵营的角色，自身的攻击增加3%,此外，当队伍中“圣地”阵营角色超过2名时，自身获得10%额外减伤效果'
    }],
    resolves: [
        {
            auth: '',
            date: '',
            paragraph: [
                ''
            ]
        },
    ]
};

export default theData