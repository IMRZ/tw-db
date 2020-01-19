import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroundTypes } from "./CampaignGroundTypes";
export declare namespace CampaignAmbushGroundTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly ambushChanceOfSuccess: number;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): CampaignGroundTypes.Entry | undefined;
    }
}
export default CampaignAmbushGroundTypes;
