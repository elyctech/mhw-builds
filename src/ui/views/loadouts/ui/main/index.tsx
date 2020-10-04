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
                affinity          = {loadout.affinity}
                attack            = {loadout.attack}
                defense           = {loadout.defense}
                dragonResistance  = {loadout.dragonResistance}
                elementAttack     = {loadout.element.attack}
                elementName       = {loadout.element.name}
                fireResistance    = {loadout.fireResistance}
                health            = {loadout.health}
                iceResistance     = {loadout.iceResistance}
                key               = {loadout.id}
                name              = {loadout.name}
                sharpnessColor    = {loadout.sharpness.color}
                sharpnessHits     = {loadout.sharpness.hits}
                stamina           = {loadout.stamina}
                thunderResistance = {loadout.thunderResistance}
                waterResistance   = {loadout.waterResistance}
              />;
            }
          )
        }
      </div>
    </div>
  );
}
