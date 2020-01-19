import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { FrontendCharacters } from "./FrontendCharacters";
export declare namespace FrontendCampaignSelectionMapPins {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _faction: string;
        readonly locationX: number;
        readonly locationY: number;
        readonly _frontendCharacter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get frontendCharacter(): FrontendCharacters.Entry | undefined;
    }
}
export default FrontendCampaignSelectionMapPins;
