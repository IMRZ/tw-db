
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace FactionStrategicThreatLevels {
  export const KEY = new CollectionKey("faction_strategic_threat_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly minimumThreatPlayer: number;
    readonly minimumThreatAi: number;
    readonly _effectBundle: string;
    readonly _displayTitleAi: string;
    readonly _displayDescriptionAi: string;
    readonly _displayTitlePlayer: string;
    readonly _displayDescriptionPlayer: string;
    readonly minimumThreatAiDisplay: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.minimumThreatPlayer = values["minimum_threat_player"];
      this.minimumThreatAi = values["minimum_threat_ai"];
      this._effectBundle = values["effect_bundle"];
      this._displayTitleAi = values["display_title_ai"];
      this._displayDescriptionAi = values["display_description_ai"];
      this._displayTitlePlayer = values["display_title_player"];
      this._displayDescriptionPlayer = values["display_description_player"];
      this.minimumThreatAiDisplay = values["minimum_threat_ai_display"];
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get displayTitleAi(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._displayTitleAi);
    }
    
    get displayDescriptionAi(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._displayDescriptionAi);
    }
    
    get displayTitlePlayer(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._displayTitlePlayer);
    }
    
    get displayDescriptionPlayer(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._displayDescriptionPlayer);
    }
  }
}

export default FactionStrategicThreatLevels;
