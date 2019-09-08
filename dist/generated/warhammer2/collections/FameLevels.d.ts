import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { CampaignLocalisedStrings } from "./CampaignLocalisedStrings";
import { EffectBundles } from "./EffectBundles";
export declare namespace FameLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly level: number;
        readonly playerPrestige: number;
        readonly aiPrestige: number;
        readonly armyCap: number;
        readonly navyCap: number;
        readonly provinceInitiativeCap: number;
        readonly _campaign: string;
        readonly _descriptionLookup: string;
        readonly _effectBundle: string;
        readonly _titleLookup: string;
        readonly _tooltipLookup: string;
        readonly key: number;
        readonly allAgentsCap: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaign: Campaigns.Entry | undefined;
        readonly descriptionLookup: CampaignLocalisedStrings.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
        readonly titleLookup: CampaignLocalisedStrings.Entry | undefined;
        readonly tooltipLookup: CampaignLocalisedStrings.Entry | undefined;
    }
}
export default FameLevels;
