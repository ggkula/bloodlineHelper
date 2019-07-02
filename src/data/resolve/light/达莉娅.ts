import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '达莉娅',
    id: 26,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '牧师',
    transfer: ['神使', '执政'],
    camp: '圣地',
    avatar: '/assets/avatar/light/达莉娅.png',
    card: [{
        type: '20血量神使达莉娅',
        src: '/assets/card/light/达莉娅.jpg'
    },{
        type: '20回复执政官达莉娅',
        src: '/assets/card/light/达莉娅.jpg'
    }],
    skill: [{
        skinName: '达莉娅',
        leader: '战场上所有角色攻击降低25%，达莉娅回复增加50%',
        talent: '达莉娅普通攻击无法造成伤害，但可以为所有队员回复一定的生命，回复后血量低于60%的队员受到的伤害降低10%，持续1回合',
        utl: '血量百分比最低的队友无敌1回合，并在下回合行动前回复其50%血量',
        fate: '所有队员受到克制属性的伤害减少10%'
    }],
    resolves: [
        {
            auth: '',
            date: '',
            paragraph: [
                ''
            ]
        }
    ]
};

export default theData