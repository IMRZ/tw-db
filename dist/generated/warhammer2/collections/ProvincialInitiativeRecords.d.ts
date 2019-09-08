import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { CampaignVfxCampaignVfxEventIds } from "./CampaignVfxCampaignVfxEventIds";
import { Religions } from "./Religions";
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
        readonly _religionRestriction: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effectBundle: EffectBundles.Entry | undefined;
        readonly campaignVfxId: CampaignVfxCampaignVfxEventIds.Entry | undefined;
        readonly religionRestriction: Religions.Entry | undefined;
    }
}
export default ProvincialInitiativeRecords;
