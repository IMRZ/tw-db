import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { RitualCategories } from "./RitualCategories";
import { ResourceCosts } from "./ResourceCosts";
import { RitualTargets } from "./RitualTargets";
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
        readonly _target: string;
        readonly delayPayloadApplication: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get completionPayload(): RitualPayloads.Entry | undefined;
        get category(): RitualCategories.Entry | undefined;
        get startPayload(): RitualPayloads.Entry | undefined;
        get expendedResources(): ResourceCosts.Entry | undefined;
        get requiredResources(): ResourceCosts.Entry | undefined;
        get target(): RitualTargets.Entry | undefined;
    }
}
export default Rituals;
