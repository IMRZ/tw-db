import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Slots } from "./Slots";
import { CampaignMapSlotsTemplates } from "./CampaignMapSlotsTemplates";
export declare namespace CampaignMapTownsAndPorts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly townId: string;
        readonly _region: string;
        readonly _slotType: string;
        readonly onscreenName: string;
        readonly _template: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly region: Regions.Entry | undefined;
        readonly slotType: Slots.Entry | undefined;
        readonly template: CampaignMapSlotsTemplates.Entry | undefined;
    }
}
export default CampaignMapTownsAndPorts;
