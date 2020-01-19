import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { Technologies } from "./Technologies";
export declare namespace StartPosTechnologies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: number;
        readonly _technology: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): StartPosFactions.Entry | undefined;
        get technology(): Technologies.Entry | undefined;
    }
}
export default StartPosTechnologies;
