import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { MercenaryRetinueFactionGroups } from "./MercenaryRetinueFactionGroups";
export declare namespace MercenaryRetinueCampaignGroupsToFactionGroupJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly autoId: number;
        readonly _campaignGroup: string;
        readonly _factionGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get factionGroup(): MercenaryRetinueFactionGroups.Entry | undefined;
    }
}
export default MercenaryRetinueCampaignGroupsToFactionGroupJunctions;
