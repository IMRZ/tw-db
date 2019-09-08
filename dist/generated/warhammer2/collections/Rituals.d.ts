import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { RitualCategories } from "./RitualCategories";
import { ResourceCosts } from "./ResourceCosts";
export declare namespace Rituals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        readonly completionPayload: RitualPayloads.Entry | undefined;
        readonly category: RitualCategories.Entry | undefined;
        readonly startPayload: RitualPayloads.Entry | undefined;
        readonly expendedResources: ResourceCosts.Entry | undefined;
        readonly requiredResources: ResourceCosts.Entry | undefined;
    }
}
export default Rituals;
