
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemSynergyPolicies } from "./CaiConstructionSystemSynergyPolicies";
import { BuildingChains } from "./BuildingChains";
import { BuildingLevels } from "./BuildingLevels";
import { CaiConstructionSystemSynergyLevels } from "./CaiConstructionSystemSynergyLevels";
import { BuildingInstances } from "./BuildingInstances";
import { BuildingSuperchains } from "./BuildingSuperchains";

export namespace CaiConstructionSystemSynergies {
  export const KEY = new CollectionKey("cai_construction_system_synergies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _synergyPolicyKey: string;
    readonly _existingBuildingChainKey: string;
    readonly _existingBuildingLevelInclusiveStart: string;
    readonly _existingBuildingLevelInclusiveEnd: string;
    readonly _potentialBuidingChainKey: string;
    readonly _potentialBuildingLevelInclusiveStart: string;
    readonly _potentialBuildingLevelInclusiveEnd: string;
    readonly _synergyLevelKey: string;
    readonly _existingBuildingInstance: string;
    readonly _existingBuildingSuperChain: string;
    readonly _potentialBuildingInstance: string;
    readonly _potentialBuildingSuperChain: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._synergyPolicyKey = values["synergy_policy_key"];
      this._existingBuildingChainKey = values["existing_building_chain_key"];
      this._existingBuildingLevelInclusiveStart = values["existing_building_level_inclusive_start"];
      this._existingBuildingLevelInclusiveEnd = values["existing_building_level_inclusive_end"];
      this._potentialBuidingChainKey = values["potential_buiding_chain_key"];
      this._potentialBuildingLevelInclusiveStart = values["potential_building_level_inclusive_start"];
      this._potentialBuildingLevelInclusiveEnd = values["potential_building_level_inclusive_end"];
      this._synergyLevelKey = values["synergy_level_key"];
      this._existingBuildingInstance = values["existing_building_instance"];
      this._existingBuildingSuperChain = values["existing_building_super_chain"];
      this._potentialBuildingInstance = values["potential_building_instance"];
      this._potentialBuildingSuperChain = values["potential_building_super_chain"];
    }
    
    get synergyPolicyKey(): CaiConstructionSystemSynergyPolicies.Entry | undefined {
      const collection = <CaiConstructionSystemSynergyPolicies.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemSynergyPolicies.KEY, CaiConstructionSystemSynergyPolicies.Entry);
      return collection.find(entry => entry.key === this._synergyPolicyKey);
    }
    
    get existingBuildingChainKey(): BuildingChains.Entry | undefined {
      const collection = <BuildingChains.Entry[]>this.collectionCache.getCollection(BuildingChains.KEY, BuildingChains.Entry);
      return collection.find(entry => entry.key === this._existingBuildingChainKey);
    }
    
    get existingBuildingLevelInclusiveStart(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._existingBuildingLevelInclusiveStart);
    }
    
    get existingBuildingLevelInclusiveEnd(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._existingBuildingLevelInclusiveEnd);
    }
    
    get potentialBuidingChainKey(): BuildingChains.Entry | undefined {
      const collection = <BuildingChains.Entry[]>this.collectionCache.getCollection(BuildingChains.KEY, BuildingChains.Entry);
      return collection.find(entry => entry.key === this._potentialBuidingChainKey);
    }
    
    get potentialBuildingLevelInclusiveStart(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._potentialBuildingLevelInclusiveStart);
    }
    
    get potentialBuildingLevelInclusiveEnd(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._potentialBuildingLevelInclusiveEnd);
    }
    
    get synergyLevelKey(): CaiConstructionSystemSynergyLevels.Entry | undefined {
      const collection = <CaiConstructionSystemSynergyLevels.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemSynergyLevels.KEY, CaiConstructionSystemSynergyLevels.Entry);
      return collection.find(entry => entry.key === this._synergyLevelKey);
    }
    
    get existingBuildingInstance(): BuildingInstances.Entry | undefined {
      const collection = <BuildingInstances.Entry[]>this.collectionCache.getCollection(BuildingInstances.KEY, BuildingInstances.Entry);
      return collection.find(entry => entry.key === this._existingBuildingInstance);
    }
    
    get existingBuildingSuperChain(): BuildingSuperchains.Entry | undefined {
      const collection = <BuildingSuperchains.Entry[]>this.collectionCache.getCollection(BuildingSuperchains.KEY, BuildingSuperchains.Entry);
      return collection.find(entry => entry.key === this._existingBuildingSuperChain);
    }
    
    get potentialBuildingInstance(): BuildingInstances.Entry | undefined {
      const collection = <BuildingInstances.Entry[]>this.collectionCache.getCollection(BuildingInstances.KEY, BuildingInstances.Entry);
      return collection.find(entry => entry.key === this._potentialBuildingInstance);
    }
    
    get potentialBuildingSuperChain(): BuildingSuperchains.Entry | undefined {
      const collection = <BuildingSuperchains.Entry[]>this.collectionCache.getCollection(BuildingSuperchains.KEY, BuildingSuperchains.Entry);
      return collection.find(entry => entry.key === this._potentialBuildingSuperChain);
    }
  }
}

export default CaiConstructionSystemSynergies;
