import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { CampaignVfxCampaignVfxEventIds } from "./CampaignVfxCampaignVfxEventIds";
export declare namespace ProvincialInitiativeRecords {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedName: string;
        readonly _effectBundle: string;
        readonly order: number;
        readonly iconPath: string;
        readonly _campaignVfxId: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effectBundle(): EffectBundles.Entry | undefined;
        get campaignVfxId(): CampaignVfxCampaignVfxEventIds.Entry | undefined;
    }
}
export default ProvincialInitiativeRecords;
