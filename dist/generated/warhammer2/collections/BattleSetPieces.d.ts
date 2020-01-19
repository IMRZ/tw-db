import { CollectionCache, CollectionKey } from "../../../common";
import { BattleTypes } from "./BattleTypes";
import { BmdExportTypes } from "./BmdExportTypes";
import { TexcExpansions } from "./TexcExpansions";
import { Videos } from "./Videos";
import { AudioBattleEnvironments } from "./AudioBattleEnvironments";
export declare namespace BattleSetPieces {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly battleName: string;
        readonly _battleType: string;
        readonly battleScript: string;
        readonly battleEnvironment: string;
        readonly battleDuration: number;
        readonly frontendIconOffsetX: number;
        readonly frontendIconOffsetY: number;
        readonly isPlayerAttacker: boolean;
        readonly _bmdLayerType: string;
        readonly useLargeArmies: boolean;
        readonly localisedName: string;
        readonly localisedDescription: string;
        readonly battlefieldFolder: string;
        readonly _gameExpansionKey: string;
        readonly teleportCost: number;
        readonly catchmentArea: string;
        readonly _introMovie: string;
        readonly _outroMovieWin: string;
        readonly _outroMovieLose: string;
        readonly _battleEnvironmentAudio: string;
        readonly _campaignPreBattleIntroMovie: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleType(): BattleTypes.Entry | undefined;
        get bmdLayerType(): BmdExportTypes.Entry | undefined;
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
        get introMovie(): Videos.Entry | undefined;
        get outroMovieWin(): Videos.Entry | undefined;
        get outroMovieLose(): Videos.Entry | undefined;
        get battleEnvironmentAudio(): AudioBattleEnvironments.Entry | undefined;
        get campaignPreBattleIntroMovie(): Videos.Entry | undefined;
    }
}
export default BattleSetPieces;
