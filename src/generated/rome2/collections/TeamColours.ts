
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TeamColours {
  export const KEY = new CollectionKey("team_colours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly alliance: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly armyIndex: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.alliance = values["alliance"];
      this.r = values["r"];
      this.g = values["g"];
      this.b = values["b"];
      this.armyIndex = values["army_index"];
    }
    
  }
}

export default TeamColours;
