import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkillNodes } from "./CharacterSkillNodes";
import { Ancillaries } from "./Ancillaries";
export declare namespace CharacterSkillNodeAncillaryLocks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterSkillNode: string;
        readonly _ancillaryLock: string;
        constructor(collectionCache: CollectionCache, values: any);
        get characterSkillNode(): CharacterSkillNodes.Entry | undefined;
        get ancillaryLock(): Ancillaries.Entry | undefined;
    }
}
export default CharacterSkillNodeAncillaryLocks;
