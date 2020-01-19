
import { CollectionCache, CollectionKey } from "../../../common";
import { CombatPotentialsTypes } from "./CombatPotentialsTypes";
import { CombatPotentialsAdjustmentTypes } from "./CombatPotentialsAdjustmentTypes";
import { Banners } from "./Banners";

export namespace CombatPotentialsAdjustmentsForBannersJunctions {
  export const KEY = new CollectionKey("combat_potentials_adjustments_for_banners_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _combatPotentialType: string;
    readonly _combatPotentialAdjustmentType: string;
    readonly _banner: string;
    readonly absoluteAdjustment: number;
    readonly relativeAdjustment: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._combatPotentialType = values["combat_potential_type"];
      this._combatPotentialAdjustmentType = values["combat_potential_adjustment_type"];
      this._banner = values["banner"];
      this.absoluteAdjustment = values["absolute_adjustment"];
      this.relativeAdjustment = values["relative_adjustment"];
    }
    
    get combatPotentialType(): CombatPotentialsTypes.Entry | undefined {
      const collection = <CombatPotentialsTypes.Entry[]>this.collectionCache.getCollection(CombatPotentialsTypes.KEY, CombatPotentialsTypes.Entry);
      return collection.find(entry => entry.combatPotentialTypeKey === this._combatPotentialType);
    }
    
    get combatPotentialAdjustmentType(): CombatPotentialsAdjustmentTypes.Entry | undefined {
      const collection = <CombatPotentialsAdjustmentTypes.Entry[]>this.collectionCache.getCollection(CombatPotentialsAdjustmentTypes.KEY, CombatPotentialsAdjustmentTypes.Entry);
      return collection.find(entry => entry.combatPotentialAdjustmentType === this._combatPotentialAdjustmentType);
    }
    
    get banner(): Banners.Entry | undefined {
      const collection = <Banners.Entry[]>this.collectionCache.getCollection(Banners.KEY, Banners.Entry);
      return collection.find(entry => entry.banner === this._banner);
    }
  }
}

export default CombatPotentialsAdjustmentsForBannersJunctions;
