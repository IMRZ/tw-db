import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAreasOfInterest } from "./CampaignMapAreasOfInterest";
export declare namespace CampaignMapAreasOfInterestLabelPositions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignMapAreaOfInterest: string;
        readonly logicalPositionX: number;
        readonly logicalPositionY: number;
        readonly key: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignMapAreaOfInterest(): CampaignMapAreasOfInterest.Entry | undefined;
    }
}
export default CampaignMapAreasOfInterestLabelPositions;
