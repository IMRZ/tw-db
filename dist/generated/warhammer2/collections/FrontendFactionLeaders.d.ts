import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";
import { TexcExpansions } from "./TexcExpansions";
import { Videos } from "./Videos";
import { AudioVoActors } from "./AudioVoActors";
export declare namespace FrontendFactionLeaders {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly uniform: string;
        readonly xOffset: number;
        readonly yOffset: number;
        readonly key: string;
        readonly characterImage: string;
        readonly _preludeBattle: string;
        readonly localisedDescription: string;
        readonly localisedActionPoints: string;
        readonly _gameExpansionKey: string;
        readonly _video: string;
        readonly loadingScreenText: string;
        readonly loadingScreenImage: string;
        readonly _loadingScreenIntroVideo: string;
        readonly overrideForceLocationX: number;
        readonly overrideForceLocationY: number;
        readonly _voiceover: string;
        readonly showFullIntroOption: boolean;
        readonly difficulty: string;
        readonly startposMap: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly preludeBattle: Battles.Entry | undefined;
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
        readonly video: Videos.Entry | undefined;
        readonly loadingScreenIntroVideo: Videos.Entry | undefined;
        readonly voiceover: AudioVoActors.Entry | undefined;
    }
}
export default FrontendFactionLeaders;
