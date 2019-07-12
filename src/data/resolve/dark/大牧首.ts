import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '眸夜祭歌',
    id: 42,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '牧师',
    transfer: ['神使', '执政官'],
    camp: '旅人',
    avatar: '/assets/avatar/dark/眸夜祭歌.png',
    card: [{
        type: '20防御神使眸夜祭歌',
        src: '/assets/card/dark/大牧首.jpg'
    }],
    skill: [{
        skinName: '眸夜祭歌',
        leader: '所有队员受到伤害降低20%，暗属性队员前3回合效果翻倍',
        talent: '眸夜祭歌选择盾牌作为自身的防具，且升级防具的速度提高,夜之祈言所需的怒气降低30%；队伍中首次有角色血量低于50%时自身回复70怒气',
        utl: '眸夜祭歌指引能量汇聚，为非光属性队员恢复25%生命，防御增加30%，持续1回合',
        fate: '夜之祈言对眸夜祭歌产生双倍效果，且大幅增加自身的受击概率，持续1回合；自身行动前，场上首次出现血量低于50%的队友时，自己回满怒气的效果，该效果在一场战斗中只能触发一次。'
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