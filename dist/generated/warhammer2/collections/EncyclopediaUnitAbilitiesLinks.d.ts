import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilities } from "./UnitAbilities";
import { EncyclopediaPages } from "./EncyclopediaPages";
import { EncyclopediaBlocks } from "./EncyclopediaBlocks";
export declare namespace EncyclopediaUnitAbilitiesLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitAbility: string;
        readonly _manualPage: string;
        readonly _manualBlock: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitAbility: UnitAbilities.Entry | undefined;
        readonly manualPage: EncyclopediaPages.Entry | undefined;
        readonly manualBlock: EncyclopediaBlocks.Entry | undefined;
    }
}
export default EncyclopediaUnitAbilitiesLinks;
