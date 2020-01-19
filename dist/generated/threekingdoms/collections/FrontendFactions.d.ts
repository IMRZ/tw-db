import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { FrontendFactionLeaderPlaystyles } from "./FrontendFactionLeaderPlaystyles";
export declare namespace FrontendFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly activeYearsStart: number;
        readonly activeYearsEnd: number;
        readonly sortOrder: number;
        readonly _playstyle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get playstyle(): FrontendFactionLeaderPlaystyles.Entry | undefined;
    }
}
export default FrontendFactions;
