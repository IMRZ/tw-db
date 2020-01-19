import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosRegionSlotSets } from "./StartPosRegionSlotSets";
import { SlotTypes } from "./SlotTypes";
import { SlotTemplates } from "./SlotTemplates";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace StartPosRegionSlotSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _startPosRegionSlotSet: string;
        readonly _slotType: string;
        readonly _slotTemplate: string;
        readonly _buildingLevel: string;
        constructor(collectionCache: CollectionCache, values: any);
        get startPosRegionSlotSet(): StartPosRegionSlotSets.Entry | undefined;
        get slotType(): SlotTypes.Entry | undefined;
        get slotTemplate(): SlotTemplates.Entry | undefined;
        get buildingLevel(): BuildingLevels.Entry | undefined;
    }
}
export default StartPosRegionSlotSetItems;
