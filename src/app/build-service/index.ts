import Build from "../../lib/build/index.type";

const buildService = {
  getAllBuilds()  : Build[]
  {
    return [
      {
        "name"  : "Meta Charged Blade"
      },
      {
        "name"  : "Meta Lance"
      }
    ];
  }
};

export default buildService;
