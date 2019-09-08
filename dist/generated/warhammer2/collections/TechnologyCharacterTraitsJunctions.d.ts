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
        readonly technologyNode: TechnologyNodes.Entry | undefined;
        readonly characterTrait: CharacterTraitLevels.Entry | undefined;
    }
}
export default TechnologyCharacterTraitsJunctions;
