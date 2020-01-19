import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
export declare namespace UndercoverCharacterDiscoveredActions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _characterRelationshipTriggers: string;
        constructor(collectionCache: CollectionCache, values: any);
        get characterRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined;
    }
}
export default UndercoverCharacterDiscoveredActions;
