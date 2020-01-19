import { CollectionCache, CollectionKey } from "../../../common";
import { NamesGroups } from "./NamesGroups";
import { Factions } from "./Factions";
export declare namespace ShipNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: any;
        readonly _nameGroup: number;
        readonly shipName: string;
        readonly _exclusiveToFaction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get nameGroup(): NamesGroups.Entry | undefined;
        get exclusiveToFaction(): Factions.Entry | undefined;
    }
}
export default ShipNames;
