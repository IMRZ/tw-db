
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { SlotSets } from "./SlotSets";
import { Tristates } from "./Tristates";
import { UiInfoRitualTargetCriterias } from "./UiInfoRitualTargetCriterias";

export namespace RitualRegionTargetCriterias {
  export const KEY = new CollectionKey("ritual_region_target_criterias");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _requiredSubculture: string;
    readonly _requireForeignSlotSetPresent: string;
    readonly _requireSubcultureForeignSlotsPresent: string;
    readonly _own: string;
    readonly _targetsRuins: string;
    readonly _uiInfo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._requiredSubculture = values["required_subculture"];
      this._requireForeignSlotSetPresent = values["require_foreign_slot_set_present"];
      this._requireSubcultureForeignSlotsPresent = values["require_subculture_foreign_slots_present"];
      this._own = values["own"];
      this._targetsRuins = values["targets_ruins"];
      this._uiInfo = values["ui_info"];
    }
    
    get requiredSubculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._requiredSubculture);
    }
    
    get requireForeignSlotSetPresent(): SlotSets.Entry | undefined {
      const collection = <SlotSets.Entry[]>this.collectionCache.getCollection(SlotSets.KEY, SlotSets.Entry);
      return collection.find(entry => entry.key === this._requireForeignSlotSetPresent);
    }
    
    get requireSubcultureForeignSlotsPresent(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._requireSubcultureForeignSlotsPresent);
    }
    
    get own(): Tristates.Entry | undefined {
      const collection = <Tristates.Entry[]>this.collectionCache.getCollection(Tristates.KEY, Tristates.Entry);
      return collection.find(entry => entry.id === this._own);
    }
    
    get targetsRuins(): Tristates.Entry | undefined {
      const collection = <Tristates.Entry[]>this.collectionCache.getCollection(Tristates.KEY, Tristates.Entry);
      return collection.find(entry => entry.id === this._targetsRuins);
    }
    
    get uiInfo(): UiInfoRitualTargetCriterias.Entry | undefined {
      const collection = <UiInfoRitualTargetCriterias.Entry[]>this.collectionCache.getCollection(UiInfoRitualTargetCriterias.KEY, UiInfoRitualTargetCriterias.Entry);
      return collection.find(entry => entry.key === this._uiInfo);
    }
  }
}

export default RitualRegionTargetCriterias;
