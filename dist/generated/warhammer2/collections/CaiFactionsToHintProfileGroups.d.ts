import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { CaiHintProfileGroups } from "./CaiHintProfileGroups";
export declare namespace CaiFactionsToHintProfileGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _hintProfileGroupKey: string;
        readonly campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: Factions.Entry | undefined;
        readonly hintProfileGroupKey: CaiHintProfileGroups.Entry | undefined;
    }
}
export default CaiFactionsToHintProfileGroups;
