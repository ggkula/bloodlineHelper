import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '战争姬',
    id: 74,
    attr: {
        key: 'light',
        value: '光'
    },
    job: '战士',
    transfer: ['战神', '饮命者'],
    camp: '圣地',
    avatar: '/assets/avatar/light/战争姬.png',
    card: [{
        type: '20血量战神战争姬',
        src: '/assets/card/light/战争姬.jpg'
    }, {
        type: '全属性8战神战争姬',
        src: '/assets/card/light/战争姬8.jpg'
    }, {
        type: '20攻击饮命者战争姬',
        src: '/assets/card/light/战争姬y.jpg'
    }],
    skill: [{
        skinName: '战争姬',
        leader: '所有队员必杀技伤害增加80%，获得经验增加50%',
        talent: '战争姬拥有神体守恒，每回合开始回复15%生命',
        utl: '进入圣地领域对敌方单体进行神罚，造成超大量光属性伤害',
        fate: '神体守恒的回血效果可额外生效1次,若回合开始前战争姬血量低于35%，伤害增加35%'
    }, {
        skinName: '神力公主·战争姬',
        leader: '所有队员必杀技伤害增加80%，获得经验增加50%',
        talent: '战争姬拥有神体守恒，每回合开始回复15%生命；进入战斗后回复降低10%，防御增加10%',
        utl: '进入圣地领域对敌方单体进行神罚，造成超大量光属性伤害',
        fate: '神体守恒的回血效果可额外生效1次,若回合开始前战争姬血量低于35%，伤害增加35%'
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