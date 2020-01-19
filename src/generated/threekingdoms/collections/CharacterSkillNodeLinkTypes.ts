
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterSkillNodeLinkTypes {
  export const KEY = new CollectionKey("character_skill_node_link_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly linkType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.linkType = values["link_type"];
    }
    
  }
}

export default CharacterSkillNodeLinkTypes;
