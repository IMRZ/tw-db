import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMarkerTypes } from "./CampaignMarkerTypes";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace CampaignMarkers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _markerType: string;
        readonly file: string;
        readonly _group: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly markerType: CampaignMarkerTypes.Entry | undefined;
        readonly group: CampaignGroups.Entry | undefined;
    }
}
export default CampaignMarkers;
