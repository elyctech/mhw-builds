import React, {
  ReactElement
} from "react";

import {
  Typography
} from "@rmwc/typography";

interface BuildCardMainProps
{
  name  : string;
}

export default function BuildCardMain(
  props : BuildCardMainProps
) : ReactElement
{
  const {
    name
  } = props;

  return (
    <Typography
      use = "subtitle2"
    >
      {name}
    </Typography>
  );
}
