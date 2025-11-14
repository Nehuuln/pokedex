export class Pokemon{

  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<string>;
  rarete: string;
  created: Date;


  constructor(){
    this.id = 0;
    this.hp = 0;
    this.cp = 0;
    this.name = "";
    this.picture = 'https://qvexmeaxafazljnlsjbi.supabase.co/storage/v1/object/public/pokedex/small/1.webp';
    this.types = [];
    this.rarete = '⭐';
    this.created = new Date();
  }

}