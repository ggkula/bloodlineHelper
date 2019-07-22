import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '可可',
    id: 49,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '法师',
    transfer: ['贤者', '巫师'],
    camp: '异族',
    avatar: '/assets/avatar/water/可可.png',
    card: [{
        type: '20攻击贤者可可',
        src: '/assets/card/water/可可.jpg'
    }],
    skill: [{
        skinName: '可可',
        leader: '水属性队员伤害增加35%，暴击率增加15%',
        talent: '水属性和法师队员暴击率增加5%（可叠加）,队伍中每拥有一名水属性队员，自身的暴击率（3%）和暴击伤害（5%）增加',
        utl: '可可对敌方单体造成超大量水属性伤害',
        fate: '战场上存在5名及以上水属性角色时，战场上水属性角色的伤害和暴击伤害增加15%'
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