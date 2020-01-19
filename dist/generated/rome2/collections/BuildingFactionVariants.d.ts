import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { Factions } from "./Factions";
import { BuildingDescriptionTexts } from "./BuildingDescriptionTexts";
import { BuildingShortDescriptionTexts } from "./BuildingShortDescriptionTexts";
export declare namespace BuildingFactionVariants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _building: string;
        readonly _faction: string;
        readonly onscreenName: string;
        readonly _artpiece: any;
        readonly _description: string;
        readonly icon: string;
        readonly _shortDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
        get building(): BuildingLevels.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get description(): BuildingDescriptionTexts.Entry | undefined;
        get shortDescription(): BuildingShortDescriptionTexts.Entry | undefined;
    }
}
export default BuildingFactionVariants;
