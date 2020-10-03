import React, {
  ReactElement
} from "react";

import LoadoutsViewMain from "./main";

import loadoutService from "../../../../app/loadout-service";

export default function LoadoutsView() : ReactElement
{
  return (
    <LoadoutsViewMain
      loadoutService  = {loadoutService}
    />
  );
}
