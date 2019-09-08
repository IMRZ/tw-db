
import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";

export namespace Pdlc {
  export const KEY = new CollectionKey("pdlc");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly steamId: number;
    readonly description: string;
    readonly releaseOrder: number;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
      this.steamId = values["SteamID"];
      this.description = values["description"];
      this.releaseOrder = values["release_order"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default Pdlc;
