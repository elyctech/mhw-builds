import React, {
  ReactElement
} from "react";

import {
  LoadoutRow
} from "../../../../components/loadout-row";

import LoadoutService from "../../../../../lib/loadout/service/index.type";

interface LoadoutsViewMainProps
{
  loadoutService  : LoadoutService;
}

export default function LoadoutsViewMain(
  props : LoadoutsViewMainProps
) : ReactElement
{
  const loadouts  = props.loadoutService.getAllLoadouts();

  return (
    <>
      {
        loadouts.map(
          (loadout) : ReactElement =>
          {
            return <LoadoutRow
              key   = {loadout.name}
              name  = {loadout.name}
            />;
          }
        )
      }
    </>
  );
}
