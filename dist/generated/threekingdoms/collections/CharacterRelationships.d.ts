import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipCaps } from "./CharacterRelationshipCaps";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";
export declare namespace CharacterRelationships {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly priority: number;
        readonly triggerThreshold: number;
        readonly _cap: string;
        readonly name: string;
        readonly icon: string;
        readonly hidden: boolean;
        readonly invalidationThreshold: number;
        readonly passiveDecay: number;
        readonly mourningPeriod: number;
        readonly maxMemories: number;
        readonly _invalidUsage: string;
        readonly _diplomaticEventWhenLeaders: string;
        constructor(collectionCache: CollectionCache, values: any);
        get cap(): CharacterRelationshipCaps.Entry | undefined;
        get invalidUsage(): SpecialAbilityInvalidUsageFlags.Entry | undefined;
        get diplomaticEventWhenLeaders(): CaiDiplomacyEvents.Entry | undefined;
    }
}
export default CharacterRelationships;
