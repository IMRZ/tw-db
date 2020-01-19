import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticComponents } from "./CaiPersonalityDiplomaticComponents";
import { CaiDiplomacyComponentEvents } from "./CaiDiplomacyComponentEvents";
import { CaiPersonalityDiplomaticComponentTargets } from "./CaiPersonalityDiplomaticComponentTargets";
export declare namespace CaiPersonalityDiplomaticComponentValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _personalityComponentId: string;
        readonly _diplomacyComponentId: string;
        readonly initialValue: number;
        readonly value1: number;
        readonly turn1: number;
        readonly value2: number;
        readonly turn2: number;
        readonly _target: string;
        constructor(collectionCache: CollectionCache, values: any);
        get personalityComponentId(): CaiPersonalityDiplomaticComponents.Entry | undefined;
        get diplomacyComponentId(): CaiDiplomacyComponentEvents.Entry | undefined;
        get target(): CaiPersonalityDiplomaticComponentTargets.Entry | undefined;
    }
}
export default CaiPersonalityDiplomaticComponentValues;
