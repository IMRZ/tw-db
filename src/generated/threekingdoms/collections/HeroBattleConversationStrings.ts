
import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";

export namespace HeroBattleConversationStrings {
  export const KEY = new CollectionKey("hero_battle_conversation_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly string: string;
    readonly _gameExpansionKey: string;
    readonly isFemale: boolean;
    readonly weighting: number;
    readonly gameModeRecords: boolean;
    readonly gameModeRomance: boolean;
    readonly mandarin: boolean;
    readonly french: boolean;
    readonly german: boolean;
    readonly italian: boolean;
    readonly spanish: boolean;
    readonly russian: boolean;
    readonly korean: boolean;
    readonly polish: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.string = values["string"];
      this._gameExpansionKey = values["game_expansion_key"];
      this.isFemale = !!values["is_female"];
      this.weighting = values["weighting"];
      this.gameModeRecords = !!values["game_mode_records"];
      this.gameModeRomance = !!values["game_mode_romance"];
      this.mandarin = !!values["mandarin"];
      this.french = !!values["french"];
      this.german = !!values["german"];
      this.italian = !!values["italian"];
      this.spanish = !!values["spanish"];
      this.russian = !!values["russian"];
      this.korean = !!values["korean"];
      this.polish = !!values["polish"];
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default HeroBattleConversationStrings;
