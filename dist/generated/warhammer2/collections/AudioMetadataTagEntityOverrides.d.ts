import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMetadataTags } from "./AudioMetadataTags";
import { AudioEntityTypes } from "./AudioEntityTypes";
export declare namespace AudioMetadataTagEntityOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _metadataTag: string;
        readonly _entityType: string;
        readonly soundEventBattleStart: string;
        readonly soundEventBattleStop: string;
        readonly soundEventCampaignStart: string;
        readonly soundEventCampaignStop: string;
        readonly cullingDistanceOverride: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly metadataTag: AudioMetadataTags.Entry | undefined;
        readonly entityType: AudioEntityTypes.Entry | undefined;
    }
}
export default AudioMetadataTagEntityOverrides;
