import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '拉斯特',
    id: 66,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '法师',
    transfer: ['巫师', '术士'],
    camp: '异族',
    avatar: '/assets/avatar/dark/拉斯特.png',
    card: [{
        type: '20攻击巫师拉斯特',
        src: '/assets/card/dark/拉斯特.jpg'
    }],
    skill: [{
        skinName: '拉斯特',
        leader: '所有队员伤害增加30%，造成伤害的10%转为治疗自己',
        talent: '最后的血族长老，回合开始若血量低于50%，则伤害的30%转为治疗自己',
        utl: '拉斯特将战斗环境扭曲为血族领域，对敌方全体造成中量暗属性伤害',
        fate: '若回合开始时拉斯特受伤，则回合结束时有10%概率开启愚者的图书馆，获得所有怒气'
    }, {
        skinName: '千元皮肤-拉斯特',
        leader: '所有队员伤害增加30%，造成伤害的10%转为治疗自己',
        talent: '拉斯特使所有队员暂时拥有血族的能力：将每次伤害的8%转为治疗自己',
        utl: '拉斯特将战斗环境扭曲为血族领域，对敌方全体造成中量暗属性伤害',
        fate: '若回合开始时拉斯特受伤，则回合结束时有10%概率开启愚者的图书馆，获得所有怒气'
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