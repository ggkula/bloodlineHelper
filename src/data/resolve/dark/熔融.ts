import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '锌镉熔融',
    id: 6,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者', '嗜灵者'],
    camp: '法塔',
    avatar: '/assets/avatar/dark/锌镉熔融.png',
    card: [{
        type: '20攻击鬼剑锌镉熔融',
        src: '/assets/card/dark/锌镉熔融.jpg'
    }],
    skill: [{
        skinName: '锌镉熔融',
        leader: '战场上所有暗属性队员伤害增加60%',
        talent: '自身受到的伤害降低20%，受击12次后的下回合后失效。生效期间受击率大幅提高，若本回合受到伤害，下回合暴击率大幅提高',
        utl: '锌镉熔融对敌方全体造成少量暗属性伤害，有小概率使目标陷入重伤，持续2回合',
        fate: '回合开始时，若自身存活且金属掌握尚未失效，则前排的暗属性与刺客队友受到伤害减少15%'
    }],
    resolves: [
        {
            auth: '寒寒',
            date: '19年6月20日',
            paragraph: [
                '大家好，我是表面刺客实则坦克但是输出又高得不像一个坦克反而像一个刺客而且二三星是圣地四星五星又叛逃变成法塔了甚至在五星之前只有两个转职升到五星突然变成三个转职的锌镉熔融。',
                '首先要明确一件事情：锌镉熔融的两个专属里武器是重头，防具其实无足轻重——毕竟夜刃和锌镉熔融的强度差距有点大，即使双方能依靠锌镉熔融的专属防具获得强大的buff也不容易补回差距。顺带一提锌镉熔融的转职其实各有各的好处，不过综合来看的话最推荐的还是嗜灵，只不过在用的时候得记得放五号位才行（实在不行四号位也可以）。潜能个人比较推荐攻击，当然如果想用全属性或者是血量也没有太大的问题，毕竟很多定位比较特殊的卡都是有多潜能可选的存在的。',
                '锌镉熔融的专属武器回血受重伤影响，并且判定机制是这样的：假设锌镉熔融满血为2w，此时血量为5000，受到来自A总量为7000的伤害，由于伤害超过了现有的血量所以会触发效果增加一半的血条，此时血条变化为5000+10000-7000=8000 。而如果这个伤害总量是17000，那即使触发了专属武器的效果也救不了锌镉熔融。',
                '至于就业场所，锌镉熔融很明显是适合在暗和刺客多的队伍里使用的，不巧的是暗正是血族当前的版本第一色，并且满配的刺客队在当前版本也是属于一流的进攻队的。因此，锌镉熔融可以说是因为受到版本的影响而变得十分热门的。需要注意的是在用她的时候尽量不要单纯的把她当成一个坦克或刺客——就像以前的精神导师一样。',
                '推荐搭配：多暗的队伍，多刺的队伍，暗和刺都有的队伍（暗示焚奥戴），需要强力坦克兼输出的队伍'
            ]
        }
    ]
};

export default theData