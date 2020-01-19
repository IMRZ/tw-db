import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { GameModes } from "./GameModes";
export declare namespace CampaignGameModeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaign: string;
        readonly _gameMode: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
        get gameMode(): GameModes.Entry | undefined;
    }
}
export default CampaignGameModeJunctions;
