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
  name  : string;
}

export default function LoadoutRowMain(
  props : LoadoutRowMainProps
) : ReactElement
{
  const {
    name
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
                100
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
                100
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
                1234
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
                10 Purple
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
                60
              </span>
            </td>
            {/* Element */}
            <td>
              <span
                className = "loadoutStatTitle"
              >
                Blast
              </span>
              <span
                className = "loadoutStatValue"
              >
                240
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
