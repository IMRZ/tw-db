import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { NavalUnits } from "./NavalUnits";
export declare namespace UnitVariantsShips {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly _faction: string;
        readonly _unit: string;
        readonly variant: string;
        readonly unitCard: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: Factions.Entry | undefined;
        readonly unit: NavalUnits.Entry | undefined;
    }
}
export default UnitVariantsShips;
