
import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResourceFactors } from "./PooledResourceFactors";
import { PooledResourceOverflowBehaviours } from "./PooledResourceOverflowBehaviours";
import { PooledResourcesResetPolicies } from "./PooledResourcesResetPolicies";
import { PooledResourceIncomePolicies } from "./PooledResourceIncomePolicies";

export namespace PooledResources {
  export const KEY = new CollectionKey("pooled_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly displayName: string;
    readonly positiveFactorsDisplayName: string;
    readonly negativeFactorsDisplayName: string;
    readonly description: string;
    readonly _defaultFactor: string;
    readonly persistentFactors: boolean;
    readonly aiIgnored: boolean;
    readonly minimum: number;
    readonly maximum: number;
    readonly _overflowBehaviour: string;
    readonly _resetPolicy: string;
    readonly _incomePolicy: string;
    readonly iconPath: string;
    readonly uiValueScaleFactor: number;
    readonly foreignDiplomacyViewTooltip: string;
    readonly shared: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.displayName = values["display_name"];
      this.positiveFactorsDisplayName = values["positive_factors_display_name"];
      this.negativeFactorsDisplayName = values["negative_factors_display_name"];
      this.description = values["description"];
      this._defaultFactor = values["default_factor"];
      this.persistentFactors = !!values["persistent_factors"];
      this.aiIgnored = !!values["ai_ignored"];
      this.minimum = values["minimum"];
      this.maximum = values["maximum"];
      this._overflowBehaviour = values["overflow_behaviour"];
      this._resetPolicy = values["reset_policy"];
      this._incomePolicy = values["income_policy"];
      this.iconPath = values["icon_path"];
      this.uiValueScaleFactor = values["ui_value_scale_factor"];
      this.foreignDiplomacyViewTooltip = values["foreign_diplomacy_view_tooltip"];
      this.shared = !!values["shared"];
    }
    
    get defaultFactor(): PooledResourceFactors.Entry | undefined {
      const collection = <PooledResourceFactors.Entry[]>this.collectionCache.getCollection(PooledResourceFactors.KEY, PooledResourceFactors.Entry);
      return collection.find(entry => entry.key === this._defaultFactor);
    }
    
    get overflowBehaviour(): PooledResourceOverflowBehaviours.Entry | undefined {
      const collection = <PooledResourceOverflowBehaviours.Entry[]>this.collectionCache.getCollection(PooledResourceOverflowBehaviours.KEY, PooledResourceOverflowBehaviours.Entry);
      return collection.find(entry => entry.key === this._overflowBehaviour);
    }
    
    get resetPolicy(): PooledResourcesResetPolicies.Entry | undefined {
      const collection = <PooledResourcesResetPolicies.Entry[]>this.collectionCache.getCollection(PooledResourcesResetPolicies.KEY, PooledResourcesResetPolicies.Entry);
      return collection.find(entry => entry.key === this._resetPolicy);
    }
    
    get incomePolicy(): PooledResourceIncomePolicies.Entry | undefined {
      const collection = <PooledResourceIncomePolicies.Entry[]>this.collectionCache.getCollection(PooledResourceIncomePolicies.KEY, PooledResourceIncomePolicies.Entry);
      return collection.find(entry => entry.key === this._incomePolicy);
    }
  }
}

export default PooledResources;
