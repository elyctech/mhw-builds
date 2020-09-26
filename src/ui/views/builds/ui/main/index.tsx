import React, {
  ReactElement
} from "react";

import {
  BuildCard
} from "../../../../components/build-card";

import BuildService from "../../../../../lib/build/service/index.type";

interface BuildsViewMainProps
{
  buildService  : BuildService;
}

export default function BuildsViewMain(
  props : BuildsViewMainProps
) : ReactElement
{
  const builds  = props.buildService.getAllBuilds();

  return (
    <>
      {
        builds.map(
          (build) : ReactElement =>
          {
            return <BuildCard
              key   = {build.name}
              name  = {build.name}
            />;
          }
        )
      }
    </>
  );
}
