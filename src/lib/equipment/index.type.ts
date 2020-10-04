interface Equipment
{
  name  : string;
  slots : {
    decoration  : {
      name    : string;
      ability : {
        name  : string;
        level : number;
      }[];
    }
  }[];
}

export default Equipment;
