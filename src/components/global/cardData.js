var property = ['光','暗','水','火','树','雷'];
var occupation = ['射手','法师','刺客','战士','牧师'];
var camp = ['旅人','法塔','圣地','异族','异世界'];
var transfer = {
  archer: ['游侠','箭术长','风吟者','神枪手'],
  wizard: ['巫师','术士','贤者'],
  assassin: ['影舞者','鬼剑士','嗜灵者','忍者'],
  warrior: ['战神','饮命者','黑骑士'],
  priest: ['神使','执政官','武姬','秘牧']
};
var potential = ['血量20%','攻击20%','防御20%','回复20%','全属性8%'];

export default {
  cardData:[
    {
      name: '八页法师·夜刃',
      property: property[1],
      occupation: occupation[1],
      camp: camp[3],
      transfer: [transfer.wizard[0],transfer.wizard[1]],
      potential: potential[1],
      fighting: 3450,
      hp: 44539,
      atk: 16286,
      def: 12752,
      rep: 15378,
      leader: {
        name: '经验增幅·Ⅲ',
        content: '所有队员战后获得经验增加50%',
      },
      talent: {
        name: '魔王血脉·Ⅳ',
        content: '主角光环：夜刃所需COST降低5点，必杀技伤害增加10%，通过命运联结获得的属性增加20%',
      },
      skill: {
        name: '死亡音爆·Ⅲ',
        content: '使用咒法力量，对敌方全体造成中量暗属性伤害',
      },
      destiny: {
        name: '古典法师',
        content: '夜刃使所有敌人的必杀伤害降低10%，所有队友必杀伤害增加10%',
      },
      destiny_1: '夜莱',
      destiny_2: '灰者',
      destiny_3: '莉萝·艾（80级）',
      reCost: 7,
      fiCost: 13,
      card_id: 4,
      id: 1,
      rhythm_num: null,
      archer_num: null,
      evaluation_num: null,
      headUrl: [],
      picture: [],
      skin: false,
      skin_skill: true,
      content:[
        {
          title:'评价',
          text:[
            '一张从入坑第一天开始在v10以下血族玩家手上永远不会闲置的卡。',
            '满破需要花费的资源说大也不大说小也不小，如果准备把夜刃当主力或者公会商店已经没什么好换的卡的话可以考虑去换炉心和灰星来满破他，不过据说更多人是因为刚好练的卡里有灰星炉心命运？',
            '夜刃在pvp上主要以漆黑之觋(皮肤)的形态出现，因为c少，大招强力而受到了不少真爱党的青睐。在夜刃夜莱同时出场的情况下，夜刃的极限攻击在所有法师里仅次于露露缇雅，位居第二（不算拉斯特和雷克斯buff），大招有着单体大招的怒气和普通法师中量的伤害，同时还能削减对方全体10点怒气，不得不说皮肤夜刃的大招在法师里算是数一数二的。',
            '当然夜刃的缺点也很明显，即使是极限面板加上夜莱的加成，他的硬度在法师里也是属于脆皮一类，况且如果没有夜莱的buff夜刃的攻防都会下降一个档次，变成一个大招有特效但是伤害不是很够还脆的辣鸡法师（滑稽',
          ]
        },
        {
          title:'专属武器',
          text:'HP、防御+666，攻击有20%的吸血'
        }
      ],
    }
  ]
}
