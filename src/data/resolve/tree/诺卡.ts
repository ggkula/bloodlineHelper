import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '诺卡',
    id: 92,
    attr: {
        key: 'tree',
        value: '木'
    },
    job: '射手',
    transfer: ['游侠', '箭术'],
    camp: '异族',
    avatar: '/assets/avatar/tree/诺卡.png',
    card: [{
        type: '20攻击游侠诺卡',
        src: '/assets/card/tree/诺卡.jpg'
    }],
    skill: [{
        skinName: '诺卡',
        leader: '树属性队员血量和防御增加35%',
        talent: '诺卡武器的升级消耗降低50%，从中获得的属性增加50%,攻击后减少目标30%的防御，该效果仅在本回合内生效',
        utl: '诺卡操纵无人机“咕咕”，对敌方全体造成中量树属性伤害',
        fate: '队伍中存在3名及以上树属性队员时，队伍中战士和牧师队员血量增加10%，位于后排的树属性队员攻击增加15%。'
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