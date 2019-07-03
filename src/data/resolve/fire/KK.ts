import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: 'KK',
    id: 33,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者'],
    camp: '圣地',
    avatar: '/assets/avatar/fire/kk.png',
    card: [{
        type: '20攻击鬼剑士kk',
        src: '/assets/card/fire/kk.jpg'
    }],
    skill: [{
        skinName: '焚',
        leader: '火属性与刺客队员攻击和暴击率增加15%（效果可叠加）',
        talent: '攻击前排的目标时，自身的伤害与暴击伤害增加30%',
        utl: 'K·K对敌方单体造成超大量火属性伤害',
        fate: '攻击时无视目标的防御'
    }],
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