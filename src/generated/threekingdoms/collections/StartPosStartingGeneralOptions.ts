
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { EffectBundles } from "./EffectBundles";

export namespace StartPosStartingGeneralOptions {
  export const KEY = new CollectionKey("start_pos_starting_general_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _general: number;
    readonly _replacesGeneral: number;
    readonly turnsLocked: number;
    readonly precedence: number;
    readonly _frontendFactionLeader: string;
    readonly _effectBundle: string;
    readonly uiTooltipLockReason: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._general = values["general"];
      this._replacesGeneral = values["replaces_general"];
      this.turnsLocked = values["turns_locked"];
      this.precedence = values["precedence"];
      this._frontendFactionLeader = values["frontend_faction_leader"];
      this._effectBundle = values["effect_bundle"];
      this.uiTooltipLockReason = values["ui_tooltip_lock_reason"];
    }
    
    get general(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._general);
    }
    
    get replacesGeneral(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._replacesGeneral);
    }
    
    get frontendFactionLeader(): FrontendFactionLeaders.Entry | undefined {
      const collection = <FrontendFactionLeaders.Entry[]>this.collectionCache.getCollection(FrontendFactionLeaders.KEY, FrontendFactionLeaders.Entry);
      return collection.find(entry => entry.key === this._frontendFactionLeader);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default StartPosStartingGeneralOptions;
