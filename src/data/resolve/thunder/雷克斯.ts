import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '雷克斯',
    id: 38,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '法师',
        transfer: ['巫师', '术士'],
    camp: '异族',
    avatar: '/assets/avatar/thunder/雷克斯.png',
    card: [{
        type: '20攻击巫师雷克斯',
        src: '/assets/card/thunder/雷克斯.jpg'
    }],
    skill: [{
        skinName: '雷克斯',
        leader: '树与雷属性队员伤害增加40%，暴击时恢复15%生命',
        talent: '在白昼的星月幻想中，所有队员的必杀伤害增加15%，持续至战斗结束,友方的拉斯特攻击额外增加15%',
        utl: '雷克斯绘画出万千利剑，对敌方全体造成中量雷属性伤害',
        fate: '雷克斯进入战斗后绘制出假象恐吓敌人，使他们第一回合获得的怒气降低75%'
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