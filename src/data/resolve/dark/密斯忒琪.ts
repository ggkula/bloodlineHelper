import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '密斯忒琪',
    id: 56,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '异族',
    avatar: '/assets/avatar/dark/miss.png',
    card: [{
        type: '20攻击饮命者密斯忒琪',
        src: '/assets/card/dark/miss.jpg'
    },{
        type: '20攻击战神密斯忒琪',
        src: '/assets/card/dark/missz.jpg'
    }],
    skill: [{
        skinName: '密斯忒琪',
        leader: '队伍中所有战士伤害、防御、回复增加30%',
        talent: '密斯忒琪转职为战神/饮命者后获得双倍的减伤/增加攻击效果，且免疫转职带来的副作用',
        utl: '密斯忒琪对敌方单体使出三连斩，造成超大量暗属性伤害',
        fate: '密斯忒琪位于队伍后排时伤害增加25%,位于前排时造成伤害的25%治疗自己'
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