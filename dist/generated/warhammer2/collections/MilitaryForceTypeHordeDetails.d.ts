import { CollectionCache, CollectionKey } from "../../../common";
import { MilitaryForceTypes } from "./MilitaryForceTypes";
import { SlotTemplates } from "./SlotTemplates";
import { SlotTypes } from "./SlotTypes";
export declare namespace MilitaryForceTypeHordeDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _forceType: string;
        readonly _primarySlotTemplate: string;
        readonly _primarySlotType: string;
        readonly _secondarySlotTemplate: string;
        readonly _secondarySlotType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get forceType(): MilitaryForceTypes.Entry | undefined;
        get primarySlotTemplate(): SlotTemplates.Entry | undefined;
        get primarySlotType(): SlotTypes.Entry | undefined;
        get secondarySlotTemplate(): SlotTemplates.Entry | undefined;
        get secondarySlotType(): SlotTypes.Entry | undefined;
    }
}
export default MilitaryForceTypeHordeDetails;
