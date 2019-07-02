import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '永罪之裏',
    id: 30,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '法师',
    transfer: ['巫师', '术士'],
    camp: '法塔',
    avatar: '/assets/avatar/thunder/永罪之裏.png',
    card: [{
        type: '20攻击巫师永罪之裏',
        src: '/assets/card/thunder/永罪之裏.jpg'
    },{
        type: '全属性8巫师永罪',
        src: '/assets/card/thunder/永罪之裏8.jpg'
    },],
    skill: [{
        skinName: '永罪之裏',
        leader: '法塔阵营的队友伤害提升40%，怒气速度提升20%',
        talent: '所有队友法师职业每回合获取4点怒气，牧师职业回复提升20%，战士职业5%减伤，射手职业伤害提升10%，刺客职业暴击率提升10%',
        utl: '永罪之裏对所有敌人造成少量雷属性伤害，并有小概率麻痹目标1回合',
        fate: '所有敌人法师职业怒气获取速度降低10%，牧师职业回复降低20%，战士职业受到的伤害提升10%，射手职业伤害降低10%，刺客职业暴击率下降10%'
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