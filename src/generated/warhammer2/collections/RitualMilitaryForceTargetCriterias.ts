
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Tristates } from "./Tristates";
import { UiInfoRitualTargetCriterias } from "./UiInfoRitualTargetCriterias";

export namespace RitualMilitaryForceTargetCriterias {
  export const KEY = new CollectionKey("ritual_military_force_target_criterias");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _requiredSubculture: string;
    readonly _onSea: string;
    readonly _own: string;
    readonly _uiInfo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._requiredSubculture = values["required_subculture"];
      this._onSea = values["on_sea"];
      this._own = values["own"];
      this._uiInfo = values["ui_info"];
    }
    
    get requiredSubculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._requiredSubculture);
    }
    
    get onSea(): Tristates.Entry | undefined {
      const collection = <Tristates.Entry[]>this.collectionCache.getCollection(Tristates.KEY, Tristates.Entry);
      return collection.find(entry => entry.id === this._onSea);
    }
    
    get own(): Tristates.Entry | undefined {
      const collection = <Tristates.Entry[]>this.collectionCache.getCollection(Tristates.KEY, Tristates.Entry);
      return collection.find(entry => entry.id === this._own);
    }
    
    get uiInfo(): UiInfoRitualTargetCriterias.Entry | undefined {
      const collection = <UiInfoRitualTargetCriterias.Entry[]>this.collectionCache.getCollection(UiInfoRitualTargetCriterias.KEY, UiInfoRitualTargetCriterias.Entry);
      return collection.find(entry => entry.key === this._uiInfo);
    }
  }
}

export default RitualMilitaryForceTargetCriterias;
