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
        get region(): Regions.Entry | undefined;
        get slotType(): Slots.Entry | undefined;
        get template(): CampaignMapSlotsTemplates.Entry | undefined;
        get underlay(): WarscapeUnderlayTextures.Entry | undefined;
    }
}
export default CampaignMapSlots;
