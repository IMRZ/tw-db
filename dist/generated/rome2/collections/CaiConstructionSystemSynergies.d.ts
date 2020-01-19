import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemSynergyPolicies } from "./CaiConstructionSystemSynergyPolicies";
import { BuildingChains } from "./BuildingChains";
import { BuildingLevels } from "./BuildingLevels";
import { CaiConstructionSystemSynergyLevels } from "./CaiConstructionSystemSynergyLevels";
import { BuildingInstances } from "./BuildingInstances";
import { BuildingSuperchains } from "./BuildingSuperchains";
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
        constructor(collectionCache: CollectionCache, values: any);
        get synergyPolicyKey(): CaiConstructionSystemSynergyPolicies.Entry | undefined;
        get existingBuildingChainKey(): BuildingChains.Entry | undefined;
        get existingBuildingLevelInclusiveStart(): BuildingLevels.Entry | undefined;
        get existingBuildingLevelInclusiveEnd(): BuildingLevels.Entry | undefined;
        get potentialBuidingChainKey(): BuildingChains.Entry | undefined;
        get potentialBuildingLevelInclusiveStart(): BuildingLevels.Entry | undefined;
        get potentialBuildingLevelInclusiveEnd(): BuildingLevels.Entry | undefined;
        get synergyLevelKey(): CaiConstructionSystemSynergyLevels.Entry | undefined;
        get existingBuildingInstance(): BuildingInstances.Entry | undefined;
        get existingBuildingSuperChain(): BuildingSuperchains.Entry | undefined;
        get potentialBuildingInstance(): BuildingInstances.Entry | undefined;
        get potentialBuildingSuperChain(): BuildingSuperchains.Entry | undefined;
    }
}
export default CaiConstructionSystemSynergies;
