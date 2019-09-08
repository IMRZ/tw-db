import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { EffectBundleAdvancementStages } from "./EffectBundleAdvancementStages";
export declare namespace EffectBundlesToEffectsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectBundleKey: string;
        readonly _effectKey: string;
        readonly value: number;
        readonly _effectScope: string;
        readonly _advancementStage: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effectBundleKey: EffectBundles.Entry | undefined;
        readonly effectKey: Effects.Entry | undefined;
        readonly effectScope: CampaignEffectScopes.Entry | undefined;
        readonly advancementStage: EffectBundleAdvancementStages.Entry | undefined;
    }
}
export default EffectBundlesToEffectsJunctions;
