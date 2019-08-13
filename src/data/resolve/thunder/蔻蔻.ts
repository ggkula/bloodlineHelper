import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '蔻蔻',
    id: 85,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '射手',
    transfer: ['游侠', '箭术长'],
    camp: '旅人',
    avatar: '/assets/avatar/thunder/蔻蔻.png',
    card: [{
        type: '20攻击箭术长周茹冰',
        src: '/assets/card/thunder/蔻蔻.jpg'
    }],
    skill: [{
        skinName: '蔻蔻',
        leader: '所有队员防御降低50%，伤害增加50%',
        talent: '回合开始寇寇血量大于20%时，使用全马力模式冲撞敌人：自身损失15%生命，伤害增加50%',
        utl: '寇寇对敌方单体造成超大量雷属性伤害，并为自己恢复20%生命',
        fate: '寇寇启动全马力模式后，暴击概率增加20%,且队伍中除自身外每额外拥有一名雷属性队员，暴击概率增加8%'
    }, {
        skinName: '魔女·蔻蔻',
        leader: '所有队员防御降低50%，伤害增加50%',
        talent: '回合开始寇寇血量大于20%时，使用全马力模式冲撞敌人：自身损失15%生命（有一定几率不损失），伤害增加50%',
        utl: '寇寇对敌方单体造成超大量雷属性伤害，并为自己恢复20%生命',
        fate: '寇寇启动全马力模式后，暴击概率增加20%,且队伍中每拥有一名雷属性队员，暴击概率增加8%'
    }, ],
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