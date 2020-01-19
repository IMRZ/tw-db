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
        get preludeBattle(): Battles.Entry | undefined;
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
        get video(): Videos.Entry | undefined;
        get loadingScreenIntroVideo(): Videos.Entry | undefined;
        get voiceover(): AudioVoActors.Entry | undefined;
    }
}
export default FrontendFactionLeaders;
