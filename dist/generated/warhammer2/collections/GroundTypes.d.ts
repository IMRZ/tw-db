import { CollectionCache, CollectionKey } from "../../../common";
import { Cursors } from "./Cursors";
import { UnitAttributes } from "./UnitAttributes";
import { AudioBattleGroundTypes } from "./AudioBattleGroundTypes";
export declare namespace GroundTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        readonly description: string;
        readonly _standardCursor: string;
        readonly _selectionCursor: string;
        readonly _penaltyImmuneAttribute: string;
        readonly onscreenName: string;
        readonly _audioType: string;
        readonly burnRate: number;
        readonly colourRed: number;
        readonly colourGreen: number;
        readonly colourBlue: number;
        readonly minimumThreshold: number;
        constructor(collectionCache: CollectionCache, values: any);
        get standardCursor(): Cursors.Entry | undefined;
        get selectionCursor(): Cursors.Entry | undefined;
        get penaltyImmuneAttribute(): UnitAttributes.Entry | undefined;
        get audioType(): AudioBattleGroundTypes.Entry | undefined;
    }
}
export default GroundTypes;
