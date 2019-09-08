
import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodes } from "./TechnologyNodes";
import { CharacterTraitLevels } from "./CharacterTraitLevels";

export namespace TechnologyCharacterTraitsJunctions {
  export const KEY = new CollectionKey("technology_character_traits_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technologyNode: string;
    readonly _characterTrait: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technologyNode = values["technology_node"];
      this._characterTrait = values["character_trait"];
    }
    
    get technologyNode(): TechnologyNodes.Entry | undefined {
      const collection = <TechnologyNodes.Entry[]>this.collectionCache.getCollection(TechnologyNodes.KEY, TechnologyNodes.Entry);
      return collection.find(entry => entry.key === this._technologyNode);
    }
    
    get characterTrait(): CharacterTraitLevels.Entry | undefined {
      const collection = <CharacterTraitLevels.Entry[]>this.collectionCache.getCollection(CharacterTraitLevels.KEY, CharacterTraitLevels.Entry);
      return collection.find(entry => entry.key === this._characterTrait);
    }
  }
}

export default TechnologyCharacterTraitsJunctions;
