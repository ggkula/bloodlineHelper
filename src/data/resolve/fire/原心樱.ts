import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '原心樱',
    id: 47,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '射手',
    transfer: ['游侠', '忍者'],
    camp: '旅人',
    avatar: '/assets/avatar/fire/原心樱.png',
    card: [{
        type: '20攻击忍者原心樱',
        src: '/assets/card/fire/原心樱.jpg'
    }, {
        type: '20攻击游侠原心樱',
        src: '/assets/card/fire/原心樱y.jpg'
    },],
    skill: [{
        skinName: '原心樱',
        leader: '队伍中所有刺客与射手的伤害增加40%',
        talent: '原心樱使用灵巧的舞蹈来掩饰伙伴的刺杀，后排队员受击概率降低，暴击伤害增加40%',
        utl: '原心樱使用铁梭对敌方单体进行远距离攻击，造成超大量火属性伤害',
        fate: '原心樱位于队伍后排时，每回合开始暴击概率提升10%，该效果可叠加5次'
    }, {
        skinName: '炎夏·原心樱',
        leader: '队伍中所有刺客与射手的伤害增加40%',
        talent: '原心樱使用灵巧的舞蹈来掩饰伙伴的刺杀，后排队员受击概率降低，暴击伤害增加40%',
        utl: '原心樱对敌方单体造成大量火属性伤害，并附带暴击伤害增加30%效果',
        fate: '原心樱位于队伍后排时，每回合开始暴击概率提升10%，该效果可叠加5次'
    }, ],
    resolves: [
        {
            auth: '',
            date: '',
            paragraph: [
                ''
            ]
        }
    ]
};

export default theData