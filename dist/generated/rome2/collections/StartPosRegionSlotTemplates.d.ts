import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Regions } from "./Regions";
import { SlotTypes } from "./SlotTypes";
import { SlotTemplates } from "./SlotTemplates";
export declare namespace StartPosRegionSlotTemplates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _campaign: string;
        readonly _region: string;
        readonly _slotType: string;
        readonly _slotTemplate: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
        get region(): Regions.Entry | undefined;
        get slotType(): SlotTypes.Entry | undefined;
        get slotTemplate(): SlotTemplates.Entry | undefined;
    }
}
export default StartPosRegionSlotTemplates;
