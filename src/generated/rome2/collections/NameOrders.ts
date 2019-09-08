
import { CollectionCache, CollectionKey } from "../../../common";
import { NameTypes } from "./NameTypes";
import { NamesGroups } from "./NamesGroups";

export namespace NameOrders {
  export const KEY = new CollectionKey("name_orders");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _type: string;
    readonly order: number;
    readonly _nameGroup: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._type = values["type"];
      this.order = values["order"];
      this._nameGroup = values["name_group"];
    }
    
    get type(): NameTypes.Entry | undefined {
      const collection = <NameTypes.Entry[]>this.collectionCache.getCollection(NameTypes.KEY, NameTypes.Entry);
      return collection.find(entry => entry.key === this._type);
    }
    
    get nameGroup(): NamesGroups.Entry | undefined {
      const collection = <NamesGroups.Entry[]>this.collectionCache.getCollection(NamesGroups.KEY, NamesGroups.Entry);
      return collection.find(entry => entry.key === this._nameGroup);
    }
  }
}

export default NameOrders;
