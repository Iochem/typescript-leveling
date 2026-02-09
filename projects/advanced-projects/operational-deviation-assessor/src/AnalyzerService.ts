import {EvaluationInput} from "./evaluationInput";
import {ResultReturn} from "./types";
import {ConditionDetection, StateDetection} from "./deviationDetection";


export class AnalyzerService { // Orchestration functions

    operacionalDesviation(input: EvaluationInput): ResultReturn{
        //sends the data to the functions
        const state = StateDetection(input.before, input.after);
        const condition = ConditionDetection(input.before, input.after);

        return{
            processId: input.processId,
            stateChange: state,
            performanceChange: condition
        }

    }
}