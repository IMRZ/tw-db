
import { CollectionCache, CollectionKey } from "../../../common";
import { NamesGroups } from "./NamesGroups";
import { Factions } from "./Factions";

export namespace ShipNames {
  export const KEY = new CollectionKey("ship_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: any;
    readonly _nameGroup: number;
    readonly shipName: string;
    readonly _exclusiveToFaction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._nameGroup = values["name_group"];
      this.shipName = values["Ship_Name"];
      this._exclusiveToFaction = values["exclusive_to_faction"];
    }
    
    get nameGroup(): NamesGroups.Entry | undefined {
      const collection = <NamesGroups.Entry[]>this.collectionCache.getCollection(NamesGroups.KEY, NamesGroups.Entry);
      return collection.find(entry => entry.key === this._nameGroup);
    }
    
    get exclusiveToFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._exclusiveToFaction);
    }
  }
}

export default ShipNames;
