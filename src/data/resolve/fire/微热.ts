import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '微热',
    id: 12,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '法师',
    transfer: ['巫师', '术士'],
    camp: '法塔',
    avatar: '/assets/avatar/fire/微热.png',
    card: [{
        type: '20攻击术士微热',
        src: '/assets/card/fire/微热.jpg'
    }, {
        type: '20攻击巫师微热',
        src: '/assets/card/fire/微热w.jpg'
    }, {
        type: '20血量术士微热',
        src: '/assets/card/fire/微热x.jpg'
    }],
    skill: [{
        skinName: '微热巫女',
        leader: '火属性与法师队员每回合获得10点怒气，微热获得双倍效果',
        talent: '回合开始微热巫女有50%概率随机点燃一名敌人，持续3回合（点燃：非水属性敌人每回合损失10%生命，该效果可叠加）',
        utl: '微热巫女召唤火焰吞噬大地，对所有敌人造成少量火属性伤害,同时触发点燃效果，持续3回合',
        fate: '回合开始微热巫女点燃敌人的概率提升至80%，且额外使其防御降低25%，减防效果可叠加'
    }],
    resolves: [
        {
            auth: 'null',
            date: '19年6月21日',
            paragraph: [
                '建设中'
            ]
        }
    ]
};

export default theData