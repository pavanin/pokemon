pokemonTypes={
  fire : {
    canDefeat:(type)=>{return ['steel','bug','ice','grass'].includes(type)},
  },
  water : {
    canDefeat:(type)=>{return ['fire','ground','rock'].includes(type)},
  },
  grass : {
    canDefeat:(type)=>{return ['water','ground','rock'].includes(type)},
  },
  electric : {
    canDefeat:(type)=>{return ['water','flying'].includes(type)},
  },
  normal : {
    canDefeat:(type)=>{return [].includes(type)},
  },
  ground : {
    canDefeat:(type)=>{return ['fire','electric','poison','rock','steel'].includes(type)},
  },
  rock : {
    canDefeat:(type)=>{return ['fire','ice','flying','bug'].includes(type)},
  },
  fighting : {
    canDefeat:(type)=>{return ['normal','ice','rock','dark','steel'].includes(type)},
  },
  steel : {
    canDefeat:(type)=>{return ['rock','ice','fairy'].includes(type)},
  },
  ice : {
    canDefeat:(type)=>{return ['grass','ground','flying','dragon'].includes(type)},
  },
  poison : {
    canDefeat:(type)=>{return ['grass','fairy'].includes(type)},
  },
  psychic : {
    canDefeat:(type)=>{return ['fighting','poison'].includes(type)},
  },
  bug : {
    canDefeat:(type)=>{return ['grass','psychic','dark'].includes(type)},
  },
  flying : {
    canDefeat:(type)=>{return ['grass','fighting','bug'].includes(type)},
  },
  dragon : {
    canDefeat:(type)=>{return ['dragon'].includes(type)},
  },
  fairy : {
    canDefeat:(type)=>{return ['fighting','dragon','dark'].includes(type)},
  },
  ghost : {
    canDefeat:(type)=>{return ['psychic','ghost'].includes(type)},
  },
  dark : {
    canDefeat:(type)=>{return ['psychic','ghost'].includes(type)},
  }
};
