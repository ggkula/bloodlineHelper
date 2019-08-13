import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '索菲亚',
    id: 91,
    attr: {
        key: 'fire',
        value: '水'
    },
    job: '牧师',
    transfer: ['神使', '执政官'],
    camp: '旅人',
    avatar: '/assets/avatar/fire/炎夏-索菲亚.png',
    card: [{
        type: '20血量神使索菲亚',
        src: '/assets/card/fire/索菲亚.jpg'
    }],
    skill: [{
        skinName: '炎夏·索菲亚',
        leader: '寄居在索菲娅体内的强力魔法能量可使火、雷属性敌人造成的伤害降低35%，索菲娅自身回复提高30%的效果',
        talent: '索菲娅释放出魔法能量，每回合开始时所有队员的怒气增加5点',
        utl: '索菲娅为所有队员恢复中量生命，并增加自身15%防御，持续2回合',
        fate: '“咆哮”的魔法护盾使敌方光暗属性队员造成的伤害降低10%'
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