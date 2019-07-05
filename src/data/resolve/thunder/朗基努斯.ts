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
            auth: '御台',
            date: '19年7月5日',
            paragraph: [
                '朗基努斯，第二张裂痕卡，通常被视为与青龙林美同档次的强坦',
                '减伤和防御较高，血量较低。虽然从实际测试来讲，相对硬度（在一回合能吃下的伤害）是最低的，但基佬却拥有四灵没有的回血能力，一旦能够触发一到两次专属，那么基佬承受的伤害量就会反超青龙林美',
                '基佬还有大招40%麻痹和团队减伤，因此综合能力应该算是三者最强（单纯需要硬度还是建议皮肤青龙林美）。',
                '打射手队时因为防御高和后排减伤更高两点均被克制故效果稍差',
                '推荐搭配：别拿来打树队就行，强坦哪都能去'
            ]
        }
    ]
};

export default theData