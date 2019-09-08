
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { BattleTypeSetupLimits } from "./BattleTypeSetupLimits";

export namespace BattleTypeFactionPresets {
  export const KEY = new CollectionKey("battle_type_faction_presets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _weightingType: number;
    readonly id: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._weightingType = values["weighting_type"];
      this.id = values["id"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get weightingType(): BattleTypeSetupLimits.Entry | undefined {
      const collection = <BattleTypeSetupLimits.Entry[]>this.collectionCache.getCollection(BattleTypeSetupLimits.KEY, BattleTypeSetupLimits.Entry);
      return collection.find(entry => entry.id === this._weightingType);
    }
  }
}

export default BattleTypeFactionPresets;
