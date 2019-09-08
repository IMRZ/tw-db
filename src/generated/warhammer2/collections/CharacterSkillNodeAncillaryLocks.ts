
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkillNodes } from "./CharacterSkillNodes";
import { Ancillaries } from "./Ancillaries";

export namespace CharacterSkillNodeAncillaryLocks {
  export const KEY = new CollectionKey("character_skill_node_ancillary_locks");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterSkillNode: string;
    readonly _ancillaryLock: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterSkillNode = values["character_skill_node"];
      this._ancillaryLock = values["ancillary_lock"];
    }
    
    get characterSkillNode(): CharacterSkillNodes.Entry | undefined {
      const collection = <CharacterSkillNodes.Entry[]>this.collectionCache.getCollection(CharacterSkillNodes.KEY, CharacterSkillNodes.Entry);
      return collection.find(entry => entry.key === this._characterSkillNode);
    }
    
    get ancillaryLock(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillaryLock);
    }
  }
}

export default CharacterSkillNodeAncillaryLocks;
