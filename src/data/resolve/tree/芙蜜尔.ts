import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '芙蜜尔',
    id: 67,
    attr: {
        key: 'tree',
        value: '木'
    },
    job: '法师',
    transfer: ['巫师', '术士'],
    camp: '异族',
    avatar: '/assets/avatar/tree/芙蜜尔.png',
    card: [{
        type: '20攻击巫师芙蜜尔',
        src: '/assets/card/tree/芙蜜尔.jpg'
    }],
    skill: [{
        skinName: '芙蜜尔',
        leader: '所有队员受到伤害降低15%（水与树属性队员效果翻倍），芙蜜尔每回合开始时获得10点怒气',
        talent: '回合开始时，芙蜜尔获得7点怒气，若队伍中存在3名（及以上）树或水属性队员，则效果翻倍',
        utl: '芙蜜尔从地面召唤大量荆棘，对敌方全体造成中量树属性伤害',
        fate: '攻击时有概率束缚敌方近战角色1回合,芙蜜尔死亡后守护队友，使他们受到除火属性外的伤害减少（死亡后的次回合开始生效，效果随防具成长，最高20%）'
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