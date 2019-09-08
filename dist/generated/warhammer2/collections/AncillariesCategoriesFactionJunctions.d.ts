import { CollectionCache, CollectionKey } from "../../../common";
import { AncillariesCategories } from "./AncillariesCategories";
import { Factions } from "./Factions";
export declare namespace AncillariesCategoriesFactionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ancillaryCategory: string;
        readonly _faction: string;
        readonly allowedPerCharacter: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly ancillaryCategory: AncillariesCategories.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
    }
}
export default AncillariesCategoriesFactionJunctions;
