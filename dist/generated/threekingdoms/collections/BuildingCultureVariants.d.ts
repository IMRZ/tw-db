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
        get building(): BuildingLevels.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get description(): BuildingDescriptionTexts.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get shortDescription(): BuildingShortDescriptionTexts.Entry | undefined;
        get flavour(): BuildingFlavourTexts.Entry | undefined;
    }
}
export default BuildingCultureVariants;
