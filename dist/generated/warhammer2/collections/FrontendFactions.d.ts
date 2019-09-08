import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Videos } from "./Videos";
export declare namespace FrontendFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly localisedMechanics: string;
        readonly localisedPlaystyle: string;
        readonly _video: string;
        readonly localisedInfo: string;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: Factions.Entry | undefined;
        readonly video: Videos.Entry | undefined;
    }
}
export default FrontendFactions;
