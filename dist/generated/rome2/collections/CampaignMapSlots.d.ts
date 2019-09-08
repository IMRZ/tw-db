import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Slots } from "./Slots";
import { CampaignMapSlotsTemplates } from "./CampaignMapSlotsTemplates";
import { WarscapeUnderlayTextures } from "./WarscapeUnderlayTextures";
export declare namespace CampaignMapSlots {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly slotId: string;
        readonly _region: string;
        readonly _slotType: string;
        readonly _template: string;
        readonly rotation: number;
        readonly _underlay: string;
        readonly onscreen: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly region: Regions.Entry | undefined;
        readonly slotType: Slots.Entry | undefined;
        readonly template: CampaignMapSlotsTemplates.Entry | undefined;
        readonly underlay: WarscapeUnderlayTextures.Entry | undefined;
    }
}
export default CampaignMapSlots;
