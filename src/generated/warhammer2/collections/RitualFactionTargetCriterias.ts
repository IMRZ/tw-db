
import { CollectionCache, CollectionKey } from "../../../common";
import { FactionSets } from "./FactionSets";
import { Tristates } from "./Tristates";
import { UiInfoRitualTargetCriterias } from "./UiInfoRitualTargetCriterias";

export namespace RitualFactionTargetCriterias {
  export const KEY = new CollectionKey("ritual_faction_target_criterias");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _permittedFactionSet: string;
    readonly _isHumanOnly: string;
    readonly _uiInfo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._permittedFactionSet = values["permitted_faction_set"];
      this._isHumanOnly = values["is_human_only"];
      this._uiInfo = values["ui_info"];
    }
    
    get permittedFactionSet(): FactionSets.Entry | undefined {
      const collection = <FactionSets.Entry[]>this.collectionCache.getCollection(FactionSets.KEY, FactionSets.Entry);
      return collection.find(entry => entry.key === this._permittedFactionSet);
    }
    
    get isHumanOnly(): Tristates.Entry | undefined {
      const collection = <Tristates.Entry[]>this.collectionCache.getCollection(Tristates.KEY, Tristates.Entry);
      return collection.find(entry => entry.id === this._isHumanOnly);
    }
    
    get uiInfo(): UiInfoRitualTargetCriterias.Entry | undefined {
      const collection = <UiInfoRitualTargetCriterias.Entry[]>this.collectionCache.getCollection(UiInfoRitualTargetCriterias.KEY, UiInfoRitualTargetCriterias.Entry);
      return collection.find(entry => entry.key === this._uiInfo);
    }
  }
}

export default RitualFactionTargetCriterias;
