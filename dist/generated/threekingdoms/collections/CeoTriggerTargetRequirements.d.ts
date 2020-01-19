import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTriggerTargets } from "./CeoTriggerTargets";
import { Ceos } from "./Ceos";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
import { CeoEquipmentManagerTypes } from "./CeoEquipmentManagerTypes";
export declare namespace CeoTriggerTargetRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _triggerTarget: string;
        readonly _requiredCeo1: string;
        readonly _requiredCeo2: string;
        readonly _requiredCeo3: string;
        readonly _targetCeoManager: string;
        readonly _targetEquipmentManager: string;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get triggerTarget(): CeoTriggerTargets.Entry | undefined;
        get requiredCeo1(): Ceos.Entry | undefined;
        get requiredCeo2(): Ceos.Entry | undefined;
        get requiredCeo3(): Ceos.Entry | undefined;
        get targetCeoManager(): CeoTemplateManagerTypes.Entry | undefined;
        get targetEquipmentManager(): CeoEquipmentManagerTypes.Entry | undefined;
    }
}
export default CeoTriggerTargetRequirements;
