import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '朗基努斯',
    id: 25,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '圣地',
    avatar: '/assets/avatar/thunder/朗基努斯.png',
    card: [{
        type: '20血量战神朗基努斯',
        src: '/assets/card/thunder/朗基努斯.jpg'
    },{
        type: '全属性8战神朗基努斯',
        src: '/assets/card/thunder/朗基努斯8.jpg'
    }],
    skill: [{
        skinName: '朗基努斯',
        leader: '战场中所有雷属性角色的伤害增加60%',
        talent: '朗基努斯打磨自己的盾牌，进入战斗后防御增加25%,且保护队员，使他们受到暴击的概率降低5%',
        utl: '使用长枪进行跃起攻击，对敌方全体造成中量雷属性伤害，并有小概率使敌人麻痹1回合',
        fate: '朗基努斯的不死之力影响全队：雷属性与后排队友受到的伤害降低5%（该效果可叠加）'
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