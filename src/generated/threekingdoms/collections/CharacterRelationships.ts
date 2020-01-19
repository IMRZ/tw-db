
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipCaps } from "./CharacterRelationshipCaps";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";

export namespace CharacterRelationships {
  export const KEY = new CollectionKey("character_relationships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly priority: number;
    readonly triggerThreshold: number;
    readonly _cap: string;
    readonly name: string;
    readonly icon: string;
    readonly hidden: boolean;
    readonly invalidationThreshold: number;
    readonly passiveDecay: number;
    readonly mourningPeriod: number;
    readonly maxMemories: number;
    readonly _invalidUsage: string;
    readonly _diplomaticEventWhenLeaders: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.priority = values["priority"];
      this.triggerThreshold = values["trigger_threshold"];
      this._cap = values["cap"];
      this.name = values["name"];
      this.icon = values["icon"];
      this.hidden = !!values["hidden"];
      this.invalidationThreshold = values["invalidation_threshold"];
      this.passiveDecay = values["passive_decay"];
      this.mourningPeriod = values["mourning_period"];
      this.maxMemories = values["max_memories"];
      this._invalidUsage = values["invalid_usage"];
      this._diplomaticEventWhenLeaders = values["diplomatic_event_when_leaders"];
    }
    
    get cap(): CharacterRelationshipCaps.Entry | undefined {
      const collection = <CharacterRelationshipCaps.Entry[]>this.collectionCache.getCollection(CharacterRelationshipCaps.KEY, CharacterRelationshipCaps.Entry);
      return collection.find(entry => entry.key === this._cap);
    }
    
    get invalidUsage(): SpecialAbilityInvalidUsageFlags.Entry | undefined {
      const collection = <SpecialAbilityInvalidUsageFlags.Entry[]>this.collectionCache.getCollection(SpecialAbilityInvalidUsageFlags.KEY, SpecialAbilityInvalidUsageFlags.Entry);
      return collection.find(entry => entry.flagKey === this._invalidUsage);
    }
    
    get diplomaticEventWhenLeaders(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._diplomaticEventWhenLeaders);
    }
  }
}

export default CharacterRelationships;
