import Loadout from "../../lib/loadout/index.type";

const loadoutService = {
  getAllLoadouts()  : Loadout[]
  {
    return [
      {
        "name"  : "Meta Charged Blade"
      },
      {
        "name"  : "Meta Lance"
      }
    ];
  }
};

export default loadoutService;
