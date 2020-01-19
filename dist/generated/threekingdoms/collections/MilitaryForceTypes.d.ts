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
        readonly _secondarySlotType: string;
        readonly generalCanBeReplaced: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get primarySlotTemplate(): SlotTemplates.Entry | undefined;
        get secondarySlotTemplate(): SlotTemplates.Entry | undefined;
        get primarySlotType(): SlotTypes.Entry | undefined;
        get secondarySlotType(): SlotTypes.Entry | undefined;
    }
}
export default MilitaryForceTypes;
