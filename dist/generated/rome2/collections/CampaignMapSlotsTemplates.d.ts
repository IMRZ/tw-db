import { CollectionCache, CollectionKey } from "../../../common";
import { Slots } from "./Slots";
export declare namespace CampaignMapSlotsTemplates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly templateName: string;
        readonly _slot: string;
        readonly levels: number;
        readonly artFile: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly slot: Slots.Entry | undefined;
    }
}
export default CampaignMapSlotsTemplates;
