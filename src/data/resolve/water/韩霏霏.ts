import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '韩霏霏',
    id: 60,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '圣地',
    avatar: '/assets/avatar/water/韩霏霏.png',
    card: [{
        type: '20血量战神韩霏霏',
        src: '/assets/card/water/韩霏霏.jpg'
    }],
    skill: [{
        skinName: '韩霏霏',
        leader: '所有水属性队员伤害增加41%，韩菲菲的防御增加41%',
        talent: '使用特制的盾牌作为武器，回合开始时，队伍中每拥有一名水属性队员，自身的防御增加7%',
        utl: '韩菲菲对敌方单体造成大量水属性伤害，并为我方所有队员增加30%防御，持续2回合',
        fate: '回合开始时，若自身血量高于50%，自身受击率提高且水属性队员伤害增加15%；否则水属性队员受到伤害降低10%'
    }],
    resolves: [
        {
            auth: '',
            date: '',
            paragraph: [

            ]
        },
    ]
};

export default theData