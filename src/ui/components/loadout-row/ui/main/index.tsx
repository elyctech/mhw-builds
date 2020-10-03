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
      <Typography
        use = "subtitle2"
      >
        {name}
      </Typography>
    </div>
  );
}
