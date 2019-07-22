import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '春日',
    id: 46,
    attr: {
        key: 'tree',
        value: '木'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞', '忍者'],
    camp: '旅人',
    avatar: '/assets/avatar/tree/春日.png',
    card: [{
        type: '20攻击忍者春日',
        src: '/assets/card/tree/春日.jpg'
    }],
    skill: [{
        skinName: '春日',
        leader: '所有队员暴击概率增加35%，春日伤害增加30%',
        talent: '春日潜行在暗影中伏击敌人，第1回合攻击暴击率与暴击伤害提升60%',
        utl: '对敌方单体造成超大量树属性伤害，并使其防御降低20%，持续2回合',
        fate: '春日释放大叶轮闪后，可以使下2次攻击再次获得八门之术的效果'
    }, {
        skinName: '祭典·春日',
        leader: '所有队员暴击概率增加35%，春日伤害增加30%',
        talent: '春日潜行在暗影中伏击敌人，第1回合攻击暴击率与暴击伤害提升60%',
        utl: '对敌方单体造成超大量树属性伤害（该技能所需怒气降低15%）',
        fate: '春日释放大叶轮闪后，可以使下2次攻击再次获得八门之术的效果'
    }, ],
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