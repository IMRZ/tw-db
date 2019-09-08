import { CollectionCache, CollectionKey } from "../../../common";
import { UnitVariants } from "./UnitVariants";
import { Factions } from "./Factions";
import { UniformTypeEnums } from "./UniformTypeEnums";
export declare namespace UnitVariantsColours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitVariant: string;
        readonly _faction: string;
        readonly primaryColourR: number;
        readonly primaryColourG: number;
        readonly primaryColourB: number;
        readonly secondaryColourR: number;
        readonly secondaryColourG: number;
        readonly secondaryColourB: number;
        readonly tertiaryColourR: number;
        readonly tertiaryColourG: number;
        readonly tertiaryColourB: number;
        readonly _soldierType: string;
        readonly key: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitVariant: UnitVariants.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
        readonly soldierType: UniformTypeEnums.Entry | undefined;
    }
}
export default UnitVariantsColours;
