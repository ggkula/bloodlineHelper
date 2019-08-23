import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '乔克',
    id: 110,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '射手',
    transfer: ['游侠', '箭术长', '风吟者'],
    camp: '旅人',
    avatar: '/assets/avatar/light/乔克.png',
    card: [{
        type: '20攻击游侠乔克',
        src: '/assets/card/light/乔克.jpg'
    },{
        type: '20攻击风吟者乔克',
        src: '/assets/card/light/乔克f.jpg'
    },],
    skill: [{
        skinName: '乔克',
        leader: '怒气未满的队员伤害增加40%',
        talent: '乔克进入战斗后，使怒气最高的敌人怒气降低25点,自身伤害增加10%，持续3回合',
        utl: '乔克收拢身旁环绕的扑克牌，对敌方单体造成超大量光属性伤害（该技能所需怒气降低15%）',
        fate: '乔克精通洗牌技巧，自身的伤害加成效果常驻,前3回合的伤害加成提升为30%'
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
