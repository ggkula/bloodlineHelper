import {EachData} from '../../../app/modal/dataModal'

const theData: EachData = {
    name: '鲜血使者',
    id: 34,
    attr: {
        key: 'dark',
        value: '暗'
    },
    job: '刺客',
    transfer: ['鬼剑', '影舞者'],
    camp: '圣地',
    avatar: '/assets/avatar/dark/鲜血使者.png',
    card: [{
        type: '20攻击鬼剑士鲜血使者',
        src: '/assets/card/dark/鲜血.jpg'
    },{
        type: '全属性8鬼剑士鲜血使者',
        src: '/assets/card/dark/鲜血8.jpg'
    }],
    skill: [{
        skinName: '鲜血使者',
        leader: '队伍中所有刺客伤害增加40%，暴击概率增加20%',
        talent: '召唤死神附体，鲜血使者每次攻击前自己的伤害增加15%，防御降低15%，该效果可叠加3次',
        utl: '鲜血使者从异次元中召唤死神合击，对敌方全体造成中量暗属性伤害',
        fate: '鲜血使者在战场中召唤死亡黑雾，使所有敌方角色受到伤害增加10%，但本方前排的角色也会受到50%的影响'
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