import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { ComposedEntities } from "./ComposedEntities";
import { Variants } from "./Variants";
import { ColourLutTypes } from "./ColourLutTypes";
export declare namespace UnitVariants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly _faction: string;
        readonly _composedEntity: string;
        readonly _manVariant: string;
        readonly unitCard: string;
        readonly _mountVariant: string;
        readonly _animalVariant: string;
        readonly _colourLutType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get composedEntity(): ComposedEntities.Entry | undefined;
        get manVariant(): Variants.Entry | undefined;
        get mountVariant(): Variants.Entry | undefined;
        get animalVariant(): Variants.Entry | undefined;
        get colourLutType(): ColourLutTypes.Entry | undefined;
    }
}
export default UnitVariants;
