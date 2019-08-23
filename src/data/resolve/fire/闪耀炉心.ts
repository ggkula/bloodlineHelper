import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '闪耀炉心',
    id: 107,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '异族',
    avatar: '/assets/avatar/fire/闪耀炉心.png',
    card: [{
        type: '20血量战神闪耀炉心',
        src: '/assets/card/fire/闪耀炉心.jpg'
    }],
    skill: [{
        skinName: '诺露琪',
        leader: '炉心成为队长血量上限增加150%，伤害与回复增加65%，每回合开始时友方每有一名角色自己回复4%生命。',
        talent: '闪耀炉心释放矮人怒吼，使全队被复仇的斗志所激励，所有队员的暴击概率提升10%',
        utl: '闪耀炉心召唤出矮人巨锤，对敌方全体造成中量火属性伤害',
        fate: '闪耀炉心拥有灰矮人族长之力，免疫石化、麻痹与点燃效果（本联结不增加Cost）'
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
