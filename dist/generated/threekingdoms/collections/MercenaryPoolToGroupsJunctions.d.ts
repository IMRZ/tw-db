import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryPools } from "./MercenaryPools";
import { MercenaryUnitGroups } from "./MercenaryUnitGroups";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Technologies } from "./Technologies";
export declare namespace MercenaryPoolToGroupsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _pool: string;
        readonly _group: string;
        readonly initialUnitCount: number;
        readonly _factionRequirement: string;
        readonly _subcultureRequirement: string;
        readonly _techRequirement: string;
        constructor(collectionCache: CollectionCache, values: any);
        get pool(): MercenaryPools.Entry | undefined;
        get group(): MercenaryUnitGroups.Entry | undefined;
        get factionRequirement(): Factions.Entry | undefined;
        get subcultureRequirement(): CulturesSubcultures.Entry | undefined;
        get techRequirement(): Technologies.Entry | undefined;
    }
}
export default MercenaryPoolToGroupsJunctions;
