
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventsOptionSets } from "./CdirEventsOptionSets";
import { CdirEventsOptions } from "./CdirEventsOptions";
import { CdirEventsTargets } from "./CdirEventsTargets";

export namespace CdirEventOptionSetItems {
  export const KEY = new CollectionKey("cdir_event_option_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _optionSet: string;
    readonly _option: string;
    readonly value: string;
    readonly _target: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._optionSet = values["option_set"];
      this._option = values["option"];
      this.value = values["value"];
      this._target = values["target"];
    }
    
    get optionSet(): CdirEventsOptionSets.Entry | undefined {
      const collection = <CdirEventsOptionSets.Entry[]>this.collectionCache.getCollection(CdirEventsOptionSets.KEY, CdirEventsOptionSets.Entry);
      return collection.find(entry => entry.key === this._optionSet);
    }
    
    get option(): CdirEventsOptions.Entry | undefined {
      const collection = <CdirEventsOptions.Entry[]>this.collectionCache.getCollection(CdirEventsOptions.KEY, CdirEventsOptions.Entry);
      return collection.find(entry => entry.optionKey === this._option);
    }
    
    get target(): CdirEventsTargets.Entry | undefined {
      const collection = <CdirEventsTargets.Entry[]>this.collectionCache.getCollection(CdirEventsTargets.KEY, CdirEventsTargets.Entry);
      return collection.find(entry => entry.targetKey === this._target);
    }
  }
}

export default CdirEventOptionSetItems;
