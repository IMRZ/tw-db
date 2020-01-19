
import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryRetinueDetails } from "./MercenaryRetinueDetails";
import { Retinues } from "./Retinues";

export namespace MercenaryRetinueLevelDetails {
  export const KEY = new CollectionKey("mercenary_retinue_level_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _owningMercenaryRetinue: string;
    readonly level: number;
    readonly additionalCostToRecruit: number;
    readonly _spawnsRetinue: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._owningMercenaryRetinue = values["owning_mercenary_retinue"];
      this.level = values["level"];
      this.additionalCostToRecruit = values["additional_cost_to_recruit"];
      this._spawnsRetinue = values["spawns_retinue"];
    }
    
    get owningMercenaryRetinue(): MercenaryRetinueDetails.Entry | undefined {
      const collection = <MercenaryRetinueDetails.Entry[]>this.collectionCache.getCollection(MercenaryRetinueDetails.KEY, MercenaryRetinueDetails.Entry);
      return collection.find(entry => entry.key === this._owningMercenaryRetinue);
    }
    
    get spawnsRetinue(): Retinues.Entry | undefined {
      const collection = <Retinues.Entry[]>this.collectionCache.getCollection(Retinues.KEY, Retinues.Entry);
      return collection.find(entry => entry.key === this._spawnsRetinue);
    }
  }
}

export default MercenaryRetinueLevelDetails;
