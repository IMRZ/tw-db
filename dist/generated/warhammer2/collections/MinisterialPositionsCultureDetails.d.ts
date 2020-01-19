import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { MinisterialPositionsStrings } from "./MinisterialPositionsStrings";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
export declare namespace MinisterialPositionsCultureDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ministerialPositionKey: string;
        readonly _localisedStringKey: string;
        readonly _cultureKey: string;
        readonly _subcultureKey: string;
        readonly _factionKey: string;
        readonly uniqueId: number;
        readonly xCoordinate: number;
        readonly yCoordinate: number;
        readonly _localisedDescriptionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ministerialPositionKey(): MinisterialPositions.Entry | undefined;
        get localisedStringKey(): MinisterialPositionsStrings.Entry | undefined;
        get cultureKey(): Cultures.Entry | undefined;
        get subcultureKey(): CulturesSubcultures.Entry | undefined;
        get factionKey(): Factions.Entry | undefined;
        get localisedDescriptionKey(): MinisterialPositionsStrings.Entry | undefined;
    }
}
export default MinisterialPositionsCultureDetails;
