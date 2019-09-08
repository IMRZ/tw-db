
import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalParties } from "./PoliticalParties";

export namespace FrontendFactionLeaders {
  export const KEY = new CollectionKey("frontend_faction_leaders");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly uniform: string;
    readonly animation: string;
    readonly xOffset: number;
    readonly yOffset: number;
    readonly _party: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.uniform = values["uniform"];
      this.animation = values["animation"];
      this.xOffset = values["x_offset"];
      this.yOffset = values["y_offset"];
      this._party = values["party"];
    }
    
    get party(): PoliticalParties.Entry | undefined {
      const collection = <PoliticalParties.Entry[]>this.collectionCache.getCollection(PoliticalParties.KEY, PoliticalParties.Entry);
      return collection.find(entry => entry.key === this._party);
    }
  }
}

export default FrontendFactionLeaders;
