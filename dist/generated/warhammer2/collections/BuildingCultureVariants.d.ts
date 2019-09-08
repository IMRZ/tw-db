import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { Cultures } from "./Cultures";
import { BuildingDescriptionTexts } from "./BuildingDescriptionTexts";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { BuildingShortDescriptionTexts } from "./BuildingShortDescriptionTexts";
import { BuildingFlavourTexts } from "./BuildingFlavourTexts";
export declare namespace BuildingCultureVariants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _building: string;
        readonly _culture: string;
        readonly name: string;
        readonly _description: string;
        readonly icon: string;
        readonly _subculture: string;
        readonly _faction: string;
        readonly disables: boolean;
        readonly _shortDescription: string;
        readonly _flavour: string;
        readonly displayTooltip: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly building: BuildingLevels.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
        readonly description: BuildingDescriptionTexts.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
        readonly shortDescription: BuildingShortDescriptionTexts.Entry | undefined;
        readonly flavour: BuildingFlavourTexts.Entry | undefined;
    }
}
export default BuildingCultureVariants;
