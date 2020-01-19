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
        get effectBundle(): EffectBundles.Entry | undefined;
        get campaignVfxId(): CampaignVfxCampaignVfxEventIds.Entry | undefined;
        get religionRestriction(): Religions.Entry | undefined;
    }
}
export default ProvincialInitiativeRecords;
