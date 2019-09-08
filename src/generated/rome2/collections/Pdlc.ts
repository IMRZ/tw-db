
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Pdlc {
  export const KEY = new CollectionKey("pdlc");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly steamId: number;
    readonly description: string;
    readonly releaseOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
      this.steamId = values["SteamID"];
      this.description = values["description"];
      this.releaseOrder = values["release_order"];
    }
    
  }
}

export default Pdlc;
