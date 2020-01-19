import { CollectionCache, CollectionKey } from "../../../common";
import { CeoCategories } from "./CeoCategories";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
export declare namespace CeoEquipmentCategoryManagers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _category: string;
        readonly minimumSlots: number;
        readonly maximumSlots: number;
        readonly slotsCanBeEmpty: boolean;
        readonly slotsAllowEquippedInactiveCeos: boolean;
        readonly slotCeosArePermanentOnceEquipped: boolean;
        readonly slotCeosAreSelectable: boolean;
        readonly _ceoSourceLocation1: string;
        readonly _ceoSourceLocation2: string;
        readonly _ceoSourceLocation3: string;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): CeoCategories.Entry | undefined;
        get ceoSourceLocation1(): CeoTemplateManagerTypes.Entry | undefined;
        get ceoSourceLocation2(): CeoTemplateManagerTypes.Entry | undefined;
        get ceoSourceLocation3(): CeoTemplateManagerTypes.Entry | undefined;
    }
}
export default CeoEquipmentCategoryManagers;
