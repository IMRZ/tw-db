import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkillNodes } from "./CharacterSkillNodes";
export declare namespace CharacterSkillNodeLevelUnlocks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _requiredSkillNode: string;
        readonly requiredSkillLevel: number;
        readonly _unlockSkillNode: string;
        readonly unlockSkillLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        get requiredSkillNode(): CharacterSkillNodes.Entry | undefined;
        get unlockSkillNode(): CharacterSkillNodes.Entry | undefined;
    }
}
export default CharacterSkillNodeLevelUnlocks;
