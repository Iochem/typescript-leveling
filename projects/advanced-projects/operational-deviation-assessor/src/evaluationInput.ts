import {Snapshot} from "./Snapshot";


export interface EvaluationInput{
    processId: string;
    before: Snapshot;
    after: Snapshot;
}