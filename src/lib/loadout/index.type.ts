interface Loadout
{
  // Meta-data
  id    : string;
  name  : string;

  // Stats
  affinity  : number
  attack    : number;
  defense   : number;
  health    : number;
  stamina   : number;

  dragonResistance  : number;
  fireResistance    : number;
  iceResistance     : number;
  thunderResistance : number;
  waterResistance   : number;

  element : {
    name    : string;
    attack  : number;
  };

  sharpness : {
    color : string;
    hits  : number;
  };

  // Equipment
  // arms  : Equipment;
  // body  : Equipment;
  // head  : Equipment;
  // legs  : Equipment;
  // waist : Equipment;

  // charm : {
  //   name    : string;
  //   ability : {
  //     name  : string;
  //     level : number;
  //   }[];
  // }
}

export default Loadout;
