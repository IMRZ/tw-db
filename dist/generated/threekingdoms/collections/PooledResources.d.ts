import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResourceFactors } from "./PooledResourceFactors";
import { PooledResourceOverflowBehaviours } from "./PooledResourceOverflowBehaviours";
import { PooledResourcesResetPolicies } from "./PooledResourcesResetPolicies";
import { PooledResourceIncomePolicies } from "./PooledResourceIncomePolicies";
export declare namespace PooledResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        get defaultFactor(): PooledResourceFactors.Entry | undefined;
        get overflowBehaviour(): PooledResourceOverflowBehaviours.Entry | undefined;
        get resetPolicy(): PooledResourcesResetPolicies.Entry | undefined;
        get incomePolicy(): PooledResourceIncomePolicies.Entry | undefined;
    }
}
export default PooledResources;
