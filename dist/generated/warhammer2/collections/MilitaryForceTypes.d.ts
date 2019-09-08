import { CollectionCache, CollectionKey } from "../../../common";
import { SlotTemplates } from "./SlotTemplates";
import { SlotTypes } from "./SlotTypes";
export declare namespace MilitaryForceTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _primarySlotTemplate: string;
        readonly _secondarySlotTemplate: string;
        readonly _primarySlotType: string;
        readonly secondarySlotType: string;
        readonly generalCanBeReplaced: boolean;
        readonly spawnOnSea: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly primarySlotTemplate: SlotTemplates.Entry | undefined;
        readonly secondarySlotTemplate: SlotTemplates.Entry | undefined;
        readonly primarySlotType: SlotTypes.Entry | undefined;
    }
}
export default MilitaryForceTypes;
