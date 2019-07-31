import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '德拉贡',
    id: 78,
    attr: {
        key: 'tree',
        value: '木'
    },
    job: '法师',
    transfer: ['巫师', '贤者'],
    camp: '异族',
    avatar: '/assets/avatar/tree/德拉贡.png',
    card: [{
        type: '20攻击巫师德拉贡',
        src: '/assets/card/tree/德拉贡.jpg'
    }],
    skill: [{
        skinName: '德拉贡',
        leader: '水与树属性队员伤害增加35%并且免疫麻痹状态',
        talent: '战斗开始时德拉贡防御力提升50%，但该效果会每回合递减,每回合开始时自身攻击提升5%，最多叠加5次',
        utl: '德拉贡对敌方单体造成超大量树属性伤害',
        fate: '队伍中每拥有一名水或树属性队员，全队的伤害增加3%'
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