import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Dilemmas } from "./Dilemmas";
export declare namespace CampaignGroupGovernorIndependenceDilemmas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _dilemma: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get dilemma(): Dilemmas.Entry | undefined;
    }
}
export default CampaignGroupGovernorIndependenceDilemmas;
