import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { Technologies } from "./Technologies";
export declare namespace StartPosTechnologies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: number;
        readonly _technology: string;
        readonly unique: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: StartPosFactions.Entry | undefined;
        readonly technology: Technologies.Entry | undefined;
    }
}
export default StartPosTechnologies;
