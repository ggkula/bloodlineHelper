import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '永夜·莉萝艾',
    id: 7,
    attr: {
        key: 'fire',
        value: '火'
    },
    job: '牧师',
    transfer: ['神使', '执政官', '武姬'],
    camp: '异族',
    avatar: '/assets/avatar/fire/御.png',
    card: [{
        type: '20血量神使御',
        src: '/assets/card/fire/御x.jpg'
    }, {
        type: '20攻击神使御',
        src: '/assets/card/fire/御.jpg'
    }],
    skill: [{
        skinName: '御',
        leader: '牧师队员的血量与攻击增加15%，战斗开始时御获得50点怒气,与谦同时在场时，谦的队长技同时生效',
        talent: '御的武器无需升级,回合开始时，为所有的受伤队员回复少量生命,与谦或晓同时在场时，御的血量上限增加20%',
        utl: '拂晓化身为巨兽对敌方单体造成大量火属性伤害，并震慑所有敌人，使他们的伤害与防御降低20%，持续1回合',
        fate: '御以一己之力守护子民，使敌人的群体类攻击的伤害降低30%'
    }],
    resolves: [
        {
            auth: '',
            date: '19年6月20日',
            paragraph: [
                ''
            ]
        }
    ]
};

export default theData