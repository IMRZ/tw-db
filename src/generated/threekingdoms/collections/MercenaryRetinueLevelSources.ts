
import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryRetinueLevelDetails } from "./MercenaryRetinueLevelDetails";

export namespace MercenaryRetinueLevelSources {
  export const KEY = new CollectionKey("mercenary_retinue_level_sources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _mercenaryRetinueLevel: string;
    readonly chargesProvided: number;
    readonly hundrethsOfChargeReplenishedPerTurn: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._mercenaryRetinueLevel = values["mercenary_retinue_level"];
      this.chargesProvided = values["charges_provided"];
      this.hundrethsOfChargeReplenishedPerTurn = values["hundreths_of_charge_replenished_per_turn"];
    }
    
    get mercenaryRetinueLevel(): MercenaryRetinueLevelDetails.Entry | undefined {
      const collection = <MercenaryRetinueLevelDetails.Entry[]>this.collectionCache.getCollection(MercenaryRetinueLevelDetails.KEY, MercenaryRetinueLevelDetails.Entry);
      return collection.find(entry => entry.key === this._mercenaryRetinueLevel);
    }
  }
}

export default MercenaryRetinueLevelSources;
