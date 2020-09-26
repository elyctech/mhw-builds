import React, {
  ReactElement
} from "react";

import BuildsViewMain from "./main";

import buildService from "../../../../app/build-service";

export default function BuildsView() : ReactElement
{
  return (
    <BuildsViewMain
      buildService  = {buildService}
    />
  );
}
