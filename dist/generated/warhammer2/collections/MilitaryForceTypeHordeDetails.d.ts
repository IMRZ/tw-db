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
        readonly forceType: MilitaryForceTypes.Entry | undefined;
        readonly primarySlotTemplate: SlotTemplates.Entry | undefined;
        readonly primarySlotType: SlotTypes.Entry | undefined;
        readonly secondarySlotTemplate: SlotTemplates.Entry | undefined;
        readonly secondarySlotType: SlotTypes.Entry | undefined;
    }
}
export default MilitaryForceTypeHordeDetails;
