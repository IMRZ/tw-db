import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSubjects } from "./CampaignSubjects";
import { EffectBundles } from "./EffectBundles";
import { CampaignSubjectMessages } from "./CampaignSubjectMessages";
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
        readonly _arrivalMessage: string;
        readonly _departureMessage: string;
        readonly _flavourText: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignSubjectKey: CampaignSubjects.Entry | undefined;
        readonly effectBundleKey: EffectBundles.Entry | undefined;
        readonly arrivalMessage: CampaignSubjectMessages.Entry | undefined;
        readonly departureMessage: CampaignSubjectMessages.Entry | undefined;
        readonly flavourText: CampaignSubjectStrings.Entry | undefined;
    }
}
export default CampaignSubjectEvolutions;
