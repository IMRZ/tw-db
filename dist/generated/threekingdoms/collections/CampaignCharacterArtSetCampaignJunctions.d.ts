import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
import { Campaigns } from "./Campaigns";
export declare namespace CampaignCharacterArtSetCampaignJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _artSetId: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        get artSetId(): CampaignCharacterArtSets.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default CampaignCharacterArtSetCampaignJunctions;
