
import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { FrontendCharacters } from "./FrontendCharacters";

export namespace FrontendFactionLeaderUniqueCharacters {
  export const KEY = new CollectionKey("frontend_faction_leader_unique_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedDescription: string;
    readonly sortOrder: string;
    readonly _frontendFactionLeader: string;
    readonly _frontendCharacter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedDescription = values["localised_description"];
      this.sortOrder = values["sort_order"];
      this._frontendFactionLeader = values["frontend_faction_leader"];
      this._frontendCharacter = values["frontend_character"];
    }
    
    get frontendFactionLeader(): FrontendFactionLeaders.Entry | undefined {
      const collection = <FrontendFactionLeaders.Entry[]>this.collectionCache.getCollection(FrontendFactionLeaders.KEY, FrontendFactionLeaders.Entry);
      return collection.find(entry => entry.key === this._frontendFactionLeader);
    }
    
    get frontendCharacter(): FrontendCharacters.Entry | undefined {
      const collection = <FrontendCharacters.Entry[]>this.collectionCache.getCollection(FrontendCharacters.KEY, FrontendCharacters.Entry);
      return collection.find(entry => entry.key === this._frontendCharacter);
    }
  }
}

export default FrontendFactionLeaderUniqueCharacters;
