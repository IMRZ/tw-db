import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosRegions } from "./StartPosRegions";
import { CampaignMapAreasOfInterest } from "./CampaignMapAreasOfInterest";
export declare namespace RegionAreaOfInterestDisplayJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _region: string;
        readonly _areaOfInterest: string;
        constructor(collectionCache: CollectionCache, values: any);
        get region(): StartPosRegions.Entry | undefined;
        get areaOfInterest(): CampaignMapAreasOfInterest.Entry | undefined;
    }
}
export default RegionAreaOfInterestDisplayJunctions;
