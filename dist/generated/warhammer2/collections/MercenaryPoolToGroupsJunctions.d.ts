import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryPools } from "./MercenaryPools";
import { MercenaryUnitGroups } from "./MercenaryUnitGroups";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Technologies } from "./Technologies";
import { TexcExpansions } from "./TexcExpansions";
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
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly pool: MercenaryPools.Entry | undefined;
        readonly group: MercenaryUnitGroups.Entry | undefined;
        readonly factionRequirement: Factions.Entry | undefined;
        readonly subcultureRequirement: CulturesSubcultures.Entry | undefined;
        readonly techRequirement: Technologies.Entry | undefined;
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
    }
}
export default MercenaryPoolToGroupsJunctions;
