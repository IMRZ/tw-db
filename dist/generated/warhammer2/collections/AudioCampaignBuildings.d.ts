import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioCampaignBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly ambienceStartEvent: string;
        readonly ambienceStopEvent: string;
        readonly ambienceOnlyPlayIfPrimary: boolean;
        readonly ambienceOnlyPlayIfPort: boolean;
        readonly oneShotEvent: string;
        readonly oneShotMinTime: number;
        readonly oneShotMaxTime: number;
        readonly oneShotOnlyPlayIfPrimary: boolean;
        readonly oneShotOnlyPlayIfPort: boolean;
        readonly selectedEvent: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioCampaignBuildings;
