import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '艾莉娅',
    id: 79,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '牧师',
    transfer: ['神使', '执政'],
    camp: '异世界',
    avatar: '/assets/avatar/light/艾莉娅.png',
    card: [{
        type: '20血量神使艾莉娅',
        src: '/assets/card/light/艾莉娅.jpg'
    }],
    skill: [{
        skinName: '艾莉娅',
        leader: '所有队员收到伤害降低20%，光属性队员前3回合效果翻倍',
        talent: '所有队员每回合开始时暴击率增加5%（光属性与牧师队员效果翻倍），最多可叠加5层，每次触发暴击后效果重置',
        utl: '艾莉娅为所有队员恢复中量生命',
        fate: '回合开始时，每名上回合暴击的队员可以为艾莉娅提供10点怒气，若艾莉娅暴击，可额外为所有队员回复5%生命与5点怒气'
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