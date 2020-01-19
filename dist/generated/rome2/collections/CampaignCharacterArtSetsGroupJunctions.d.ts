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
        get group(): CampaignCharacterArtSetsCampaignGroups.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default CampaignCharacterArtSetsGroupJunctions;
