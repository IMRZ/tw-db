import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMarkerTypes } from "./CampaignMarkerTypes";
export declare namespace CampaignInteractableMarkerInfos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly name: string;
        readonly tooltip: string;
        readonly _markerType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get markerType(): CampaignMarkerTypes.Entry | undefined;
    }
}
export default CampaignInteractableMarkerInfos;
