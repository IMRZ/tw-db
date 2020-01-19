
import { CollectionCache, CollectionKey } from "../../../common";
import { Cursors } from "./Cursors";
import { CursorMouseEvents } from "./CursorMouseEvents";

export namespace CursorTransitions {
  export const KEY = new CollectionKey("cursor_transitions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _initiatingCursor: string;
    readonly _resultingCursor: string;
    readonly _mouseEvent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._initiatingCursor = values["initiating_cursor"];
      this._resultingCursor = values["resulting_cursor"];
      this._mouseEvent = values["mouse_event"];
    }
    
    get initiatingCursor(): Cursors.Entry | undefined {
      const collection = <Cursors.Entry[]>this.collectionCache.getCollection(Cursors.KEY, Cursors.Entry);
      return collection.find(entry => entry.key === this._initiatingCursor);
    }
    
    get resultingCursor(): Cursors.Entry | undefined {
      const collection = <Cursors.Entry[]>this.collectionCache.getCollection(Cursors.KEY, Cursors.Entry);
      return collection.find(entry => entry.key === this._resultingCursor);
    }
    
    get mouseEvent(): CursorMouseEvents.Entry | undefined {
      const collection = <CursorMouseEvents.Entry[]>this.collectionCache.getCollection(CursorMouseEvents.KEY, CursorMouseEvents.Entry);
      return collection.find(entry => entry.key === this._mouseEvent);
    }
  }
}

export default CursorTransitions;
