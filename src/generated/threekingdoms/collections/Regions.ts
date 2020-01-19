
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Regions {
  export const KEY = new CollectionKey("regions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreen: string;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly battleName: string;
    readonly inEncyclopedia: boolean;
    readonly isSea: boolean;
    readonly nameWithIconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreen = values["onscreen"];
      this.r = values["r"];
      this.g = values["g"];
      this.b = values["b"];
      this.battleName = values["battle_name"];
      this.inEncyclopedia = !!values["in_encyclopedia"];
      this.isSea = !!values["is_sea"];
      this.nameWithIconPath = values["name_with_icon_path"];
    }
    
  }
}

export default Regions;
