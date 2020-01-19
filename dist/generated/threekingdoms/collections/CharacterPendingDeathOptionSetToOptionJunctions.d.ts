import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterPendingDeathOptionSets } from "./CharacterPendingDeathOptionSets";
import { CharacterPendingDeathOptions } from "./CharacterPendingDeathOptions";
export declare namespace CharacterPendingDeathOptionSetToOptionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _optionSet: string;
        readonly _option: string;
        constructor(collectionCache: CollectionCache, values: any);
        get optionSet(): CharacterPendingDeathOptionSets.Entry | undefined;
        get option(): CharacterPendingDeathOptions.Entry | undefined;
    }
}
export default CharacterPendingDeathOptionSetToOptionJunctions;
