import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '钢之翼-天使',
    id: 99,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '旅人',
    avatar: '/assets/avatar/light/灰星.png',
    card: [{
        type: '20攻击饮命者灰星',
        src: '/assets/card/light/灰星.jpg'
    }],
    skill: [{
        skinName: '钢之翼-菲娜',
        leader: '战斗中获得金币增加35%',
        talent: '回合开始若灰星血量大于75%进入精灵专注状态，使自己的暴击率大幅提升,必杀所需怒气减少25%',
        utl: '灰星释放拉斯特阴影蛛神轰炸术，对敌方单体造成超大量光属性伤害',
        fate: '侦测敌人的必杀方式，使所有队友受到的必杀伤害降低30%（灰星阵亡后也会生效）'
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