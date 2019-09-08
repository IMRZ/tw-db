
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitClass } from "./UnitClass";
import { CampaignAutoresolverStatVariables } from "./CampaignAutoresolverStatVariables";

export namespace CampaignAutoresolverModifiers {
  export const KEY = new CollectionKey("campaign_autoresolver_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _class: string;
    readonly _vsClass: string;
    readonly _statVariableId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._class = values["class"];
      this._vsClass = values["vs_class"];
      this._statVariableId = values["stat_variable_id"];
    }
    
    get class(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._class);
    }
    
    get vsClass(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._vsClass);
    }
    
    get statVariableId(): CampaignAutoresolverStatVariables.Entry | undefined {
      const collection = <CampaignAutoresolverStatVariables.Entry[]>this.collectionCache.getCollection(CampaignAutoresolverStatVariables.KEY, CampaignAutoresolverStatVariables.Entry);
      return collection.find(entry => entry.id === this._statVariableId);
    }
  }
}

export default CampaignAutoresolverModifiers;
