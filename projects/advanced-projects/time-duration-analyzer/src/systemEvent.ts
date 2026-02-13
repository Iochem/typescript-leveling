import {Snapshot} from "./snapshot";

export interface SystemEvent{
    initialActivity: Snapshot;
    finalActivity: Snapshot;
}