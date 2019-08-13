import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '毁灭隆音',
    id: 87,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '法师',
    transfer: ['巫师', '术士'],
    camp: '法塔',
    avatar: '/assets/avatar/thunder/隆.png',
    card: [{
        type: '20攻击巫师隆音',
        src: '/assets/card/thunder/隆.jpg'
    },{
        type: '20攻击术士隆音',
        src: '/assets/card/thunder/隆s.jpg'
    },],
    skill: [{
        skinName: '毁灭隆音',
        leader: '雷属性队员造成的伤害增加50%，受到暴击概率降低20%',
        talent: '毁灭隆音满血时暴击率大幅增加,与山姥同队伍时攻击略微增加（10%）',
        utl: '对敌方全体造成中量雷属性伤害',
        fate: '罗毕拉德力场盾保护着毁灭隆音，使他受到的伤害降低25%，全队受到必杀伤害降低15%'
    }, {
        skinName: '小巫师·毁灭隆音',
        leader: '雷属性队员造成的伤害增加50%，受到暴击概率降低20%',
        talent: '隆音的外形降低敌人警惕，攻击有10%概率麻痹敌人1回合（成为队长后麻痹概率翻倍），与山姥同队伍时攻击略微增加（10%）',
        utl: '对敌方全体造成中量雷属性伤害',
        fate: '罗毕拉德力场盾保护着毁灭隆音，使他受到的伤害降低25%，全队受到必杀伤害降低15%'
    }, ],
    resolves: [
        {
            auth: '',
            date: '',
            paragraph: [

            ]
        },
    ]
};

export default theData