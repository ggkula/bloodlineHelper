import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '诺露琪',
    id: 59,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '圣地',
    avatar: '/assets/avatar/fire/诺露琪.png',
    card: [{
        type: '20攻击饮命者诺露琪',
        src: '/assets/card/fire/诺露琪.jpg'
    }],
    skill: [{
        skinName: '诺露琪',
        leader: '诺露琪攻击增加35%，火属性与战士队员血量上限增加35%',
        talent: '诺露琪使用巨锤震击地面，所有攻击对受击者附近的敌人额外造成30%的伤害',
        utl: '诺露琪对敌方单体造成大量火属性伤害，并使下一次攻击的伤害增加25%',
        fate: '诺露琪精通金属领域，对战士的伤害增加35%，并使所有队员防御增加10%'
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