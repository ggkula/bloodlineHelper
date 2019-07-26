import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '伊莱雯',
    id: 58,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '射手',
    transfer: ['游侠', '箭术长'],
    camp: '旅人',
    avatar: '/assets/avatar/light/伊莱雯.png',
    card: [{
        type: '20攻击游侠伊莱雯',
        src: '/assets/card/light/伊莱雯.jpg'
    }],
    skill: [{
        skinName: '伊莱雯',
        leader: '所有队员受到伤害降低10%，后排的光属性队员攻击增加50%',
        talent: 'cost降低4点，可以装备2件机枪类武器,与其他的【人形少女】同时在场时，伊莱雯的血量增加15%',
        utl: '伊莱雯对敌方单体造成超大量光属性伤害',
        fate: '回合开始时，队伍中每有一名【人形少女】存活，射手队员的伤害增加8%，【人形少女】可以获得双倍加成（技能实测效果：和巡林同场不会获得双倍的快乐）'
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