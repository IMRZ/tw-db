
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquipmentManagerTypes } from "./CeoEquipmentManagerTypes";

export namespace CeoEquippedSetBonuses {
  export const KEY = new CollectionKey("ceo_equipped_set_bonuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _location: string;
    readonly title: string;
    readonly description: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._location = values["location"];
      this.title = values["title"];
      this.description = values["description"];
      this.iconPath = values["icon_path"];
    }
    
    get location(): CeoEquipmentManagerTypes.Entry | undefined {
      const collection = <CeoEquipmentManagerTypes.Entry[]>this.collectionCache.getCollection(CeoEquipmentManagerTypes.KEY, CeoEquipmentManagerTypes.Entry);
      return collection.find(entry => entry.key === this._location);
    }
  }
}

export default CeoEquippedSetBonuses;
