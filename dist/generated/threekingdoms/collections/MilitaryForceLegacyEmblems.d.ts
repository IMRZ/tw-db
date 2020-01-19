import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace MilitaryForceLegacyEmblems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly isArmy: boolean;
        readonly _factionKey: string;
        readonly _culureKey: string;
        readonly _subcultureKey: string;
        readonly icon: string;
        readonly bannerDecorator: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factionKey(): Factions.Entry | undefined;
        get culureKey(): Cultures.Entry | undefined;
        get subcultureKey(): CulturesSubcultures.Entry | undefined;
    }
}
export default MilitaryForceLegacyEmblems;
