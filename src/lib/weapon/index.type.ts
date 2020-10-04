interface Weapon
{
  affinity  : number;
  attack    : string;
  name      : string;
  type      : string;

  element : {
    attack  : number;
    name    : string;
  }
}

export default Weapon;
