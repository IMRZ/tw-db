
import { CollectionCache, CollectionKey } from "../../../common";
import { UiColours } from "./UiColours";

export namespace CharacterAttributeTypes {
  export const KEY = new CollectionKey("character_attribute_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;
    readonly localizedName: string;
    readonly localizedDescription: string;
    readonly _colour: string;
    readonly icon: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
      this.localizedName = values["localized_name"];
      this.localizedDescription = values["localized_description"];
      this._colour = values["colour"];
      this.icon = values["icon"];
      this.sortOrder = values["sort_order"];
    }
    
    get colour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._colour);
    }
  }
}

export default CharacterAttributeTypes;
