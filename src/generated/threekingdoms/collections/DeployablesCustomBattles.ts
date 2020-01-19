
import { CollectionCache, CollectionKey } from "../../../common";
import { Deployables } from "./Deployables";

export namespace DeployablesCustomBattles {
  export const KEY = new CollectionKey("deployables_custom_battles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deployable: string;
    readonly cap: number;
    readonly probability: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deployable = values["deployable"];
      this.cap = values["cap"];
      this.probability = values["probability"];
    }
    
    get deployable(): Deployables.Entry | undefined {
      const collection = <Deployables.Entry[]>this.collectionCache.getCollection(Deployables.KEY, Deployables.Entry);
      return collection.find(entry => entry.key === this._deployable);
    }
  }
}

export default DeployablesCustomBattles;
