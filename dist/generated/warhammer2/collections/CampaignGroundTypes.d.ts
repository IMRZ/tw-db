import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignGroundTypes } from "./AudioCampaignGroundTypes";
import { Cursors } from "./Cursors";
export declare namespace CampaignGroundTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        readonly movementCost: number;
        readonly onscreenName: string;
        readonly isSea: boolean;
        readonly icon: string;
        readonly _audioType: string;
        readonly _standardCursor: string;
        readonly _selectionCursor: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly audioType: AudioCampaignGroundTypes.Entry | undefined;
        readonly standardCursor: Cursors.Entry | undefined;
        readonly selectionCursor: Cursors.Entry | undefined;
    }
}
export default CampaignGroundTypes;
