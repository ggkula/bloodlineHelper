import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '周茹冰',
    id: 37,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '射手',
    transfer: ['游侠', '箭术长'],
    camp: '旅人',
    avatar: '/assets/avatar/thunder/周茹冰.png',
    card: [{
        type: '20攻击箭术长周茹冰',
        src: '/assets/card/thunder/周茹冰.jpg'
    }],
    skill: [{
        skinName: '周茹冰',
        leader: '战斗开始时随机选择3名敌人，若其非雷属性则麻痹2回合',
        talent: '周茹冰武器的升级消耗降低50%，从中获得的属性增加50%,若转职为箭术长，破防的效果持续为2回合',
        utl: '周茹冰使用长弓对敌方全体进行高空攻击，造成中量雷属性伤害',
        fate: '周茹冰位于后排时伤害增加10%，对于非战士职业的敌人暴击概率增加30%（本联结不增加Cost）'
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