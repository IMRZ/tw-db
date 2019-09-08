
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyKeys } from "./DiplomacyKeys";
import { DiplomacyKeyGroups } from "./DiplomacyKeyGroups";

export namespace DiplomacyKeysToDiplomacyKeyGroups {
  export const KEY = new CollectionKey("diplomacy_keys_to_diplomacy_key_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._group = values["group"];
    }
    
    get key(): DiplomacyKeys.Entry | undefined {
      const collection = <DiplomacyKeys.Entry[]>this.collectionCache.getCollection(DiplomacyKeys.KEY, DiplomacyKeys.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get group(): DiplomacyKeyGroups.Entry | undefined {
      const collection = <DiplomacyKeyGroups.Entry[]>this.collectionCache.getCollection(DiplomacyKeyGroups.KEY, DiplomacyKeyGroups.Entry);
      return collection.find(entry => entry.groupId === this._group);
    }
  }
}

export default DiplomacyKeysToDiplomacyKeyGroups;
