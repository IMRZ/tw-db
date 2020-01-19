
import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { RitualCategories } from "./RitualCategories";
import { ResourceCosts } from "./ResourceCosts";
import { RitualTargets } from "./RitualTargets";

export namespace Rituals {
  export const KEY = new CollectionKey("rituals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly displayName: string;
    readonly description: string;
    readonly interruptable: boolean;
    readonly castTime: number;
    readonly _completionPayload: string;
    readonly cooldownTime: number;
    readonly _category: string;
    readonly slaveCost: number;
    readonly globalCooldownTime: number;
    readonly icon: string;
    readonly _startPayload: string;
    readonly failureCooldownTime: number;
    readonly hostile: boolean;
    readonly _expendedResources: string;
    readonly _requiredResources: string;
    readonly _target: string;
    readonly delayPayloadApplication: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.displayName = values["display_name"];
      this.description = values["description"];
      this.interruptable = !!values["interruptable"];
      this.castTime = values["cast_time"];
      this._completionPayload = values["completion_payload"];
      this.cooldownTime = values["cooldown_time"];
      this._category = values["category"];
      this.slaveCost = values["slave_cost"];
      this.globalCooldownTime = values["global_cooldown_time"];
      this.icon = values["icon"];
      this._startPayload = values["start_payload"];
      this.failureCooldownTime = values["failure_cooldown_time"];
      this.hostile = !!values["hostile"];
      this._expendedResources = values["expended_resources"];
      this._requiredResources = values["required_resources"];
      this._target = values["target"];
      this.delayPayloadApplication = !!values["delay_payload_application"];
    }
    
    get completionPayload(): RitualPayloads.Entry | undefined {
      const collection = <RitualPayloads.Entry[]>this.collectionCache.getCollection(RitualPayloads.KEY, RitualPayloads.Entry);
      return collection.find(entry => entry.key === this._completionPayload);
    }
    
    get category(): RitualCategories.Entry | undefined {
      const collection = <RitualCategories.Entry[]>this.collectionCache.getCollection(RitualCategories.KEY, RitualCategories.Entry);
      return collection.find(entry => entry.id === this._category);
    }
    
    get startPayload(): RitualPayloads.Entry | undefined {
      const collection = <RitualPayloads.Entry[]>this.collectionCache.getCollection(RitualPayloads.KEY, RitualPayloads.Entry);
      return collection.find(entry => entry.key === this._startPayload);
    }
    
    get expendedResources(): ResourceCosts.Entry | undefined {
      const collection = <ResourceCosts.Entry[]>this.collectionCache.getCollection(ResourceCosts.KEY, ResourceCosts.Entry);
      return collection.find(entry => entry.id === this._expendedResources);
    }
    
    get requiredResources(): ResourceCosts.Entry | undefined {
      const collection = <ResourceCosts.Entry[]>this.collectionCache.getCollection(ResourceCosts.KEY, ResourceCosts.Entry);
      return collection.find(entry => entry.id === this._requiredResources);
    }
    
    get target(): RitualTargets.Entry | undefined {
      const collection = <RitualTargets.Entry[]>this.collectionCache.getCollection(RitualTargets.KEY, RitualTargets.Entry);
      return collection.find(entry => entry.key === this._target);
    }
  }
}

export default Rituals;
