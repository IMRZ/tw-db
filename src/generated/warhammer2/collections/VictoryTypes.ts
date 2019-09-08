
import { CollectionCache, CollectionKey } from "../../../common";


export namespace VictoryTypes {
  export const KEY = new CollectionKey("victory_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly victoryType: string;
    readonly displayName: string;
    readonly treeY: number;
    readonly treeX: number;
    readonly icon: string;
    readonly lengthType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.victoryType = values["victory_type"];
      this.displayName = values["display_name"];
      this.treeY = values["tree_y"];
      this.treeX = values["tree_x"];
      this.icon = values["icon"];
      this.lengthType = values["length_type"];
    }
    
  }
}

export default VictoryTypes;
