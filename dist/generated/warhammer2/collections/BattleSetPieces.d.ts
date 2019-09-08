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
        readonly battleType: BattleTypes.Entry | undefined;
        readonly bmdLayerType: BmdExportTypes.Entry | undefined;
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
        readonly introMovie: Videos.Entry | undefined;
        readonly outroMovieWin: Videos.Entry | undefined;
        readonly outroMovieLose: Videos.Entry | undefined;
        readonly battleEnvironmentAudio: AudioBattleEnvironments.Entry | undefined;
        readonly campaignPreBattleIntroMovie: Videos.Entry | undefined;
    }
}
export default BattleSetPieces;
