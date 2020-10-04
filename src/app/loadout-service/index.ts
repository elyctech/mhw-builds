import Loadout from "../../lib/loadout/index.type";

const loadoutService = {
  getAllLoadouts()  : Loadout[]
  {
    return [
      {
        "id"    : "meta-charge-blade",
        "name"  : "Meta Charge Blade",

        "affinity"  : 60,
        "attack"    : 1024,
        "defense"   : 902,
        "health"    : 100,
        "stamina"   : 100,

        "dragonResistance"  : 7,
        "fireResistance"    : 15,
        "iceResistance"     : -15,
        "thunderResistance" : 3,
        "waterResistance"   : -10,

        "element" : {
          "name"    : "Blast",
          "attack"  : 240
        },

        "sharpness" : {
          "color" : "Purple",
          "hits"  : 10
        }
      },
      {
        "id"    : "meta-lance",
        "name"  : "Meta Lance",

        "affinity"  : 60,
        "attack"    : 1024,
        "defense"   : 902,
        "health"    : 100,
        "stamina"   : 100,

        "dragonResistance"  : 7,
        "fireResistance"    : 15,
        "iceResistance"     : -15,
        "thunderResistance" : 3,
        "waterResistance"   : -10,

        "element" : {
          "name"    : "Blast",
          "attack"  : 240
        },

        "sharpness" : {
          "color" : "Purple",
          "hits"  : 10
        }
      }
    ];
  }
};

export default loadoutService;
