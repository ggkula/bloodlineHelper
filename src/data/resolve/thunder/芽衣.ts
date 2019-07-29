import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '雷电芽衣',
    id: 62,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者', '嗜灵者'],
    camp: '异世界',
    avatar: '/assets/avatar/thunder/芽衣.png',
    card: [{
        type: '20攻击鬼剑芽衣',
        src: '/assets/card/thunder/芽衣.jpg'
    }],
    skill: [{
        skinName: '雷电芽衣',
        leader: '雷属性与刺客队员伤害增加35%（雷刺客获得双倍效果）',
        talent: '芽衣升级装备的速度提高,所有刺客与雷属性队员的攻击增加6%（琪亚娜、芽衣、八重樱、布洛妮娅、德丽莎获得双倍效果）',
        utl: '芽衣对敌方单体使出电磁切，造成大量雷属性伤害,并使自己的暴击伤害增加50%，该效果持续3回合',
        fate: '芽衣对水、雷属性敌人造成暴击的概率降低35%，对其余属性敌人的暴击概率增加35%'
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