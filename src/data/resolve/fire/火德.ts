import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '彼岸樱·德丽莎',
    id: 28,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '战士',
    transfer: ['学院长', '战神', '饮命者'],
    camp: '异世界',
    avatar: '/assets/avatar/fire/火德.png',
    card: [{
        type: '20血量学园长德丽莎',
        src: '/assets/card/light/德.jpg'
    }, {
        type: '20攻击学园长德丽莎',
        src: '/assets/card/light/德g.jpg'
    }, {
        type: '全8学园长德丽莎',
        src: '/assets/card/light/德8.jpg'
    }],
    skill: [
        // {
        // skinName: '德丽莎',
        // leader: '所有队员暴击率增加20%（【崩坏学园2】角色效果翻倍），德丽莎受到的伤害降低40%',
        // talent: '德丽莎升级装备的速度提高,剩余敌人越多，自身减伤越高（最多20%）,每有一名【崩坏学园2】队员，全队血量增加3%',
        // utl: '德丽莎对敌方全体造成少量光属性伤害，并使目标攻击降低20%，持续2回合',
        // fate: '敌方射手与刺客第一回合无法暴击，战士、法师与牧师第一回合获取怒气降低50%'
        // },
        {
            skinName: '彼岸樱·德丽莎',
            leader: '所有队员暴击率增加20%（【崩坏学园2】角色效果翻倍），德丽莎伤害增加60%',
            talent: '德莉莎升级装备的速度提高，剩余敌人越多，自身伤害越高（最多40%）；每有一名【崩坏学园2】队员，全队血量增加3%；学院长转职效果变更为攻击与暴击增加15%',
            utl: '德莉莎对敌方全体造成少量火属性伤害，并有小概率对非水属性目标造成点燃，持续3回合',
            fate: '敌方射手与刺客第一回合无法暴击，战士、法师与牧师第一回合获取怒气降低50%'
        },
    ],
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