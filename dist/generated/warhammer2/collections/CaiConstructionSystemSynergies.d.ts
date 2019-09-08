import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemSynergyPolicies } from "./CaiConstructionSystemSynergyPolicies";
import { BuildingChains } from "./BuildingChains";
import { BuildingLevels } from "./BuildingLevels";
import { CaiConstructionSystemSynergyLevels } from "./CaiConstructionSystemSynergyLevels";
import { BuildingInstances } from "./BuildingInstances";
import { BuildingSuperchains } from "./BuildingSuperchains";
import { CaiConstructionSystemSynergyScopes } from "./CaiConstructionSystemSynergyScopes";
export declare namespace CaiConstructionSystemSynergies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        readonly _synergyScopeKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly synergyPolicyKey: CaiConstructionSystemSynergyPolicies.Entry | undefined;
        readonly existingBuildingChainKey: BuildingChains.Entry | undefined;
        readonly existingBuildingLevelInclusiveStart: BuildingLevels.Entry | undefined;
        readonly existingBuildingLevelInclusiveEnd: BuildingLevels.Entry | undefined;
        readonly potentialBuidingChainKey: BuildingChains.Entry | undefined;
        readonly potentialBuildingLevelInclusiveStart: BuildingLevels.Entry | undefined;
        readonly potentialBuildingLevelInclusiveEnd: BuildingLevels.Entry | undefined;
        readonly synergyLevelKey: CaiConstructionSystemSynergyLevels.Entry | undefined;
        readonly existingBuildingInstance: BuildingInstances.Entry | undefined;
        readonly existingBuildingSuperChain: BuildingSuperchains.Entry | undefined;
        readonly potentialBuildingInstance: BuildingInstances.Entry | undefined;
        readonly potentialBuildingSuperChain: BuildingSuperchains.Entry | undefined;
        readonly synergyScopeKey: CaiConstructionSystemSynergyScopes.Entry | undefined;
    }
}
export default CaiConstructionSystemSynergies;
