import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Campaigns } from "./Campaigns";
export declare namespace MilitaryForceLegacyNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _subculture: string;
        readonly localisedName: string;
        readonly forArmy: boolean;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        get subculture(): CulturesSubcultures.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default MilitaryForceLegacyNames;
