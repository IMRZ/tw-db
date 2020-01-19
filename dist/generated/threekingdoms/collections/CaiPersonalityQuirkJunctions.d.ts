import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalities } from "./CaiPersonalities";
import { CaiPersonalityQuirks } from "./CaiPersonalityQuirks";
export declare namespace CaiPersonalityQuirkJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _personalityId: string;
        readonly _quirkId: string;
        constructor(collectionCache: CollectionCache, values: any);
        get personalityId(): CaiPersonalities.Entry | undefined;
        get quirkId(): CaiPersonalityQuirks.Entry | undefined;
    }
}
export default CaiPersonalityQuirkJunctions;
