import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '崇音',
    id: 64,
    attr: {
        key: 'water',
        value: '水'
    },
    job: '法师',
    transfer: ['术士', '巫师'],
    camp: '异族',
    avatar: '/assets/avatar/water/崇音.png',
    card: [{
        type: '20攻击巫师崇音',
        src: '/assets/card/water/崇音.jpg'
    }],
    skill: [{
        skinName: '崇音',
        leader: '所有队员受到的伤害降低15%，受到暴击的伤害降低50%',
        talent: '血量高于50%时伤害增加20%,血量低于50%时将伤害的20%转为治疗自己',
        utl: '崇音释放拉斯特阴影蛛神轰炸术，对敌方全体造成中量水属性伤害',
        fate: '暗能量在崇音体内翻滚流淌，开场吸取敌方每人3点怒气给主人（崇音获得15点怒气）'
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