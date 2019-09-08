import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCharacterArtSetsCampaignGroups } from "./CampaignCharacterArtSetsCampaignGroups";
import { Campaigns } from "./Campaigns";
export declare namespace CampaignCharacterArtSetsGroupJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly group: CampaignCharacterArtSetsCampaignGroups.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default CampaignCharacterArtSetsGroupJunctions;
