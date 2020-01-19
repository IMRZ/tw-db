import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueTemplates } from "./RetinueTemplates";
import { RetinueSlotTypes } from "./RetinueSlotTypes";
import { RetinueSlotUpgradeTrees } from "./RetinueSlotUpgradeTrees";
export declare namespace RetinueTemplateSlots {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _retinueTemplate: string;
        readonly slotIndex: number;
        readonly _slotType: string;
        readonly _upgradeTree: string;
        constructor(collectionCache: CollectionCache, values: any);
        get retinueTemplate(): RetinueTemplates.Entry | undefined;
        get slotType(): RetinueSlotTypes.Entry | undefined;
        get upgradeTree(): RetinueSlotUpgradeTrees.Entry | undefined;
    }
}
export default RetinueTemplateSlots;
