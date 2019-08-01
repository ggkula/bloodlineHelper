import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '辉者',
    id: 81,
    attr: {
        key: 'tree',
        value: '木'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞'],
    camp: '圣地',
    avatar: '/assets/avatar/tree/辉者.png',
    card: [{
        type: '20攻击鬼剑辉者',
        src: '/assets/card/tree/辉者.jpg'
    }],
    skill: [{
        skinName: '辉者',
        leader: '所有队员暴击后回复20%生命，且第一次暴击获得60怒气',
        talent: '辉者拥有双巧手，暴击伤害增加50%，且副手武器的成长属性与主手武器一致',
        utl: '挥舞强大的剑气对敌方单体造成大量树属性伤害，并有概率使敌人中毒',
        fate: '使敌人中毒的概率增加15%，对火属性敌人暴击概率增加35%（本联结不增加Cost）'
    },{
        skinName: '皮肤·辉者',
        leader: '所有队员暴击后回复20%生命，且第一次暴击获得60怒气',
        talent: '辉者拥有双巧手，暴击伤害增加50%，且副手武器的成长属性与主手武器一致',
        utl: '挥舞强大的剑气对敌方单体造成超大量树属性伤害',
        fate: '辉者的攻击有额外35%的概率使敌人中毒，持续3回合（本联结不增加Cost）'
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