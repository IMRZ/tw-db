import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSubjects } from "./CampaignSubjects";
import { EffectBundles } from "./EffectBundles";
import { CampaignSubjectStrings } from "./CampaignSubjectStrings";
export declare namespace CampaignSubjectEvolutions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _campaignSubjectKey: string;
        readonly _effectBundleKey: string;
        readonly minTurns: number;
        readonly maxTurns: number;
        readonly weighting: number;
        readonly _flavourText: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignSubjectKey(): CampaignSubjects.Entry | undefined;
        get effectBundleKey(): EffectBundles.Entry | undefined;
        get flavourText(): CampaignSubjectStrings.Entry | undefined;
    }
}
export default CampaignSubjectEvolutions;
