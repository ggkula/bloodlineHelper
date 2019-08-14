import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '玲玲',
    id: 98,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '射手',
    transfer: ['游侠', '箭术长'],
    camp: '旅人',
    avatar: '/assets/avatar/thunder/玲玲.png',
    card: [{
        type: '20攻击游侠玲玲',
        src: '/assets/card/thunder/玲玲.jpg'
    }],
    skill: [{
        skinName: '周茹冰',
        leader: '回合开始前，满血的队员伤害增加80%',
        talent: '最终兵器模式下，玲玲所需COST降低4点，且激活稳定射击模式：自身暴击概率降低8%，造成的伤害增加30%，自身满血时伤害提高15%',
        utl: '射出4枚“雷蛇24”追踪导弹，对敌方单体造成超大量雷属性伤害',
        fate: '人形少女的杀戮指令传达给全队，使所有队员无视敌人10%防御，且满血时伤害增加10%'
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