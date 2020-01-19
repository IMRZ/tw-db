
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { ContextualDiplomacyEventSets } from "./ContextualDiplomacyEventSets";

export namespace ActionResults {
  export const KEY = new CollectionKey("action_results");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _actorEffectBundle: string;
    readonly _targetEffectBundle: string;
    readonly actorEffectBundleTurns: number;
    readonly targetEffectBundleTurns: number;
    readonly _actingFactionEffectBundle: string;
    readonly actingFactionEffectBundleTurns: number;
    readonly _diplomaticEventSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._actorEffectBundle = values["actor_effect_bundle"];
      this._targetEffectBundle = values["target_effect_bundle"];
      this.actorEffectBundleTurns = values["actor_effect_bundle_turns"];
      this.targetEffectBundleTurns = values["target_effect_bundle_turns"];
      this._actingFactionEffectBundle = values["acting_faction_effect_bundle"];
      this.actingFactionEffectBundleTurns = values["acting_faction_effect_bundle_turns"];
      this._diplomaticEventSet = values["diplomatic_event_set"];
    }
    
    get actorEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._actorEffectBundle);
    }
    
    get targetEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._targetEffectBundle);
    }
    
    get actingFactionEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._actingFactionEffectBundle);
    }
    
    get diplomaticEventSet(): ContextualDiplomacyEventSets.Entry | undefined {
      const collection = <ContextualDiplomacyEventSets.Entry[]>this.collectionCache.getCollection(ContextualDiplomacyEventSets.KEY, ContextualDiplomacyEventSets.Entry);
      return collection.find(entry => entry.key === this._diplomaticEventSet);
    }
  }
}

export default ActionResults;
