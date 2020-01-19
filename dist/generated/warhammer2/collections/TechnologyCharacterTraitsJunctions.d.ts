import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodes } from "./TechnologyNodes";
import { CharacterTraitLevels } from "./CharacterTraitLevels";
export declare namespace TechnologyCharacterTraitsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technologyNode: string;
        readonly _characterTrait: string;
        constructor(collectionCache: CollectionCache, values: any);
        get technologyNode(): TechnologyNodes.Entry | undefined;
        get characterTrait(): CharacterTraitLevels.Entry | undefined;
    }
}
export default TechnologyCharacterTraitsJunctions;
