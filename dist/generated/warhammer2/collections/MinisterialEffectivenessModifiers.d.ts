import { CollectionCache, CollectionKey } from "../../../common";
import { GovernmentTypes } from "./GovernmentTypes";
export declare namespace MinisterialEffectivenessModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly leaderMinisterLevel: number;
        readonly _governmentType: string;
        readonly effectivenessBonus: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly governmentType: GovernmentTypes.Entry | undefined;
    }
}
export default MinisterialEffectivenessModifiers;
