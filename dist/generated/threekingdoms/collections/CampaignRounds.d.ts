import { CollectionCache, CollectionKey } from "../../../common";
import { RandomLocalisationStrings } from "./RandomLocalisationStrings";
import { Seasons } from "./Seasons";
import { CampaignRoundSets } from "./CampaignRoundSets";
export declare namespace CampaignRounds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly index: number;
        readonly _text: string;
        readonly _season: string;
        readonly _roundSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get text(): RandomLocalisationStrings.Entry | undefined;
        get season(): Seasons.Entry | undefined;
        get roundSet(): CampaignRoundSets.Entry | undefined;
    }
}
export default CampaignRounds;
