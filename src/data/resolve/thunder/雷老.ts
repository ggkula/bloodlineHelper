import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '雷老',
    id: 111,
    attr: {
        key: 'thunder',
        value: '雷'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '法塔',
    avatar: '/assets/avatar/thunder/雷老.png',
    card: [{
        type: '20攻击战神山老',
        src: '/assets/card/tree/山老.jpg'
    }],
    skill: [{
        skinName: '山老',
        leader: '树、雷属性敌人伤害降低35%，山姥受到伤害降低20%',
        talent: '山姥启动震击模式，普通攻击时能对场上的所有敌人造成少量伤害',
        utl: '山姥启动摧毁模式，瞬移至敌人面前进行2次重击，对单体造成超大量树属性伤害',
        fate: '山姥获得魔像充能，受到的伤害降低25%，该效果随着山姥血量降低会逐渐减弱'
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
