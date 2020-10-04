import React, {
  ReactElement
} from "react";

import {
  Typography
} from "@rmwc/typography";

import "@rmwc/typography/styles";
import "./index.scss";

interface LoadoutRowMainProps
{
  // Meta-data
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

  elementName   : string;
  elementAttack : number;

  sharpnessColor  : string;
  sharpnessHits   : number;
}

export default function LoadoutRowMain(
  props : LoadoutRowMainProps
) : ReactElement
{
  const {
    affinity,
    attack,
    defense,
    dragonResistance,
    elementAttack,
    elementName,
    fireResistance,
    health,
    iceResistance,
    name,
    sharpnessColor,
    sharpnessHits,
    stamina,
    thunderResistance,
    waterResistance
  } = props;

  return (
    <div
      className = "mhwLoadoutRow"
    >
      <div
        className = "loadoutTitle"
      >
        <Typography
          use = "headline6"
        >
          {name}
        </Typography>
      </div>
      <table>
        <tbody>
          <tr>
            {/* Health */}
            <td>
              <Typography
                use = "body2"
              >
                Health
              </Typography>
              <Typography
                className = "loadoutStatValue"
                use       = "body2"
              >
                {health}
              </Typography>
            </td>
            {/* Stamina */}
            <td>
              <span
                className = "loadoutStatTitle"
              >
                Stamina
              </span>
              <span
                className = "loadoutStatValue"
              >
                {stamina}
              </span>
            </td>
            {/* Attack */}
            <td>
              <span
                className = "loadoutStatTitle"
              >
                Attack
              </span>
              <span
                className = "loadoutStatValue"
              >
                {attack}
              </span>
            </td>
            {/* Sharpness */}
            <td>
              <span
                className = "loadoutStatTitle"
              >
                Sharpness
              </span>
              <span
                className = "loadoutStatValue"
              >
                {sharpnessHits} {sharpnessColor}
              </span>
            </td>
            {/* Affinity */}
            <td>
              <span
                className = "loadoutStatTitle"
              >
                Affinity
              </span>
              <span
                className = "loadoutStatValue"
              >
                {affinity}
              </span>
            </td>
            {/* Element */}
            <td>
              <span
                className = "loadoutStatTitle"
              >
                {elementName}
              </span>
              <span
                className = "loadoutStatValue"
              >
                {elementAttack}
              </span>
            </td>
          </tr>
          <tr>
            {/* Defense */}
            <td>
              <Typography
                use = "body2"
              >
                Defense
              </Typography>
              <Typography
                className = "loadoutStatValue"
                use       = "body2"
              >
                {defense}
              </Typography>
            </td>
            {/* Fire */}
            <td>
              <span
                className = "loadoutStatTitle"
              >
                Fire
              </span>
              <span
                className = "loadoutStatValue"
              >
                {fireResistance}
              </span>
            </td>
            {/* Water */}
            <td>
              <span
                className = "loadoutStatTitle"
              >
                Water
              </span>
              <span
                className = "loadoutStatValue"
              >
                {waterResistance}
              </span>
            </td>
            {/* Thunder */}
            <td>
              <span
                className = "loadoutStatTitle"
              >
                Thunder
              </span>
              <span
                className = "loadoutStatValue"
              >
                {thunderResistance}
              </span>
            </td>
            {/* Ice */}
            <td>
              <span
                className = "loadoutStatTitle"
              >
                Ice
              </span>
              <span
                className = "loadoutStatValue"
              >
                {iceResistance}
              </span>
            </td>
            {/* Dragon */}
            <td>
              <span
                className = "loadoutStatTitle"
              >
                Dragon
              </span>
              <span
                className = "loadoutStatValue"
              >
                {dragonResistance}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
