
import { CollectionCache, CollectionKey } from "../../../common";
import { MountableArtilleryUnits } from "./MountableArtilleryUnits";
import { Factions } from "./Factions";

export namespace MountableArtilleryUnitsCustomBattles {
  export const KEY = new CollectionKey("mountable_artillery_units_custom_battles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _mountableArtillery: string;
    readonly cap: number;
    readonly probability: number;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._mountableArtillery = values["mountable_artillery"];
      this.cap = values["cap"];
      this.probability = values["probability"];
      this._faction = values["faction"];
    }
    
    get mountableArtillery(): MountableArtilleryUnits.Entry | undefined {
      const collection = <MountableArtilleryUnits.Entry[]>this.collectionCache.getCollection(MountableArtilleryUnits.KEY, MountableArtilleryUnits.Entry);
      return collection.find(entry => entry._unitKey === this._mountableArtillery);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default MountableArtilleryUnitsCustomBattles;
