
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAttributeSets } from "./CharacterAttributeSets";
import { CharacterAttributeTypes } from "./CharacterAttributeTypes";

export namespace CharacterAttributes {
  export const KEY = new CollectionKey("character_attributes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _setName: string;
    readonly _attributeType: string;
    readonly baseValue: number;
    readonly minRange: number;
    readonly maxRange: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._setName = values["set_name"];
      this._attributeType = values["attribute_type"];
      this.baseValue = values["base_value"];
      this.minRange = values["min_range"];
      this.maxRange = values["max_range"];
    }
    
    get setName(): CharacterAttributeSets.Entry | undefined {
      const collection = <CharacterAttributeSets.Entry[]>this.collectionCache.getCollection(CharacterAttributeSets.KEY, CharacterAttributeSets.Entry);
      return collection.find(entry => entry.setName === this._setName);
    }
    
    get attributeType(): CharacterAttributeTypes.Entry | undefined {
      const collection = <CharacterAttributeTypes.Entry[]>this.collectionCache.getCollection(CharacterAttributeTypes.KEY, CharacterAttributeTypes.Entry);
      return collection.find(entry => entry.type === this._attributeType);
    }
  }
}

export default CharacterAttributes;
