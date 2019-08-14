import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '龙爱理',
    id: 96,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '刺客',
    transfer: ['影舞者', '鬼剑士'],
    camp: '旅人',
    avatar: '/assets/avatar/light/龙爱理.png',
    card: [{
        type: '20攻击鬼剑龙爱理',
        src: '/assets/card/light/龙爱理.jpg'
    }],
    skill: [{
        skinName: '龙爱理',
        leader: '所有队员伤害增加50%，获得怒气降低50%',
        talent: '龙爱理消耗的命运钱币降低为30%,命运联结中获得的属性增加30%,自身及联结所需Cost降低30%',
        utl: '龙爱理对敌方单体造成大量光属性伤害，并使其怒气降低30点',
        fate: '龙爱理命运联结中攻击与防御的30%（按Lv.10计算）增加给自己以外的队友'
    }, {
        skinName: '祭典·龙爱理',
        leader: '所有队员伤害增加55%，获得怒气降低60%',
        talent: '龙爱理消耗的命运钱币降低为30%,命运联结中获得的属性增加30%,自身及联结所需Cost降低30%',
        utl: '龙爱理对敌方单体造成大量光属性伤害，并使其怒气降低30点',
        fate: '龙爱理命运联结中攻击与防御的30%（按Lv.10计算）增加给自己以外的队友'
    }, ],
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