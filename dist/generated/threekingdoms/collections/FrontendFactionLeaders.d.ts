import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";
import { AudioVoActors } from "./AudioVoActors";
import { Videos } from "./Videos";
import { FrontendCharacters } from "./FrontendCharacters";
import { EffectBundles } from "./EffectBundles";
import { CampaignProgressionLevelDetails } from "./CampaignProgressionLevelDetails";
export declare namespace FrontendFactionLeaders {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _preludeBattle: string;
        readonly localisedDescription: string;
        readonly localisedActionPoints: string;
        readonly loadingScreenText: string;
        readonly loadingScreenImage: string;
        readonly overrideForceLocationX: number;
        readonly overrideForceLocationY: number;
        readonly localisedSubtitle: string;
        readonly localisedDifficulty: string;
        readonly _voiceover: string;
        readonly sortOrder: number;
        readonly victoryScreenImage: string;
        readonly defeatScreenImage: string;
        readonly _video: string;
        readonly _loadingScreenIntroVideo: string;
        readonly _frontendCharacter: string;
        readonly _factionLeaderEffectBundle: string;
        readonly _startingProgressionLevel: string;
        constructor(collectionCache: CollectionCache, values: any);
        get preludeBattle(): Battles.Entry | undefined;
        get voiceover(): AudioVoActors.Entry | undefined;
        get video(): Videos.Entry | undefined;
        get loadingScreenIntroVideo(): Videos.Entry | undefined;
        get frontendCharacter(): FrontendCharacters.Entry | undefined;
        get factionLeaderEffectBundle(): EffectBundles.Entry | undefined;
        get startingProgressionLevel(): CampaignProgressionLevelDetails.Entry | undefined;
    }
}
export default FrontendFactionLeaders;
