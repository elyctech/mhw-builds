import React, {
  ReactElement
} from "react";

import {
  Typography
} from "@rmwc/typography";

import {
  LoadoutRow
} from "../../../../components/loadout-row";

import LoadoutService from "../../../../../lib/loadout/service/index.type";

import "@rmwc/typography/styles";
import "./index.scss";

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
    <div
      className = "loadoutsViewMain"
    >
      <div
        className = "loadoutsViewMainTitle"
      >
        <Typography
          use = "headline4"
        >
          Loadouts
        </Typography>
      </div>
      <div>
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
      </div>
    </div>
  );
}
