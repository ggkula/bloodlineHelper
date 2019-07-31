import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '洛林',
    id: 71,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者'],
    camp: '旅人',
    avatar: '/assets/avatar/dark/洛林.png',
    card: [{
        type: '20攻击鬼剑洛林',
        src: '/assets/card/dark/洛林.jpg'
    }],
    skill: [{
        skinName: '洛林',
        leader: '所有队员暴击伤害增加100%',
        talent: '洛林获取黑暗的力量，每次攻击有20%概率使下次攻击必定暴击',
        utl: '使用暗影之枪对敌方全体6连刺，造成中量暗属性伤害',
        fate: '洛林毁灭一切的情绪影响全队，使水、火、树、雷、暗属性队友暴击伤害增加25%'
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