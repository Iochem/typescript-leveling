import {EvaluationInput} from "./evaluationInput";
import {ResultReturn} from "./types";
import {conditionDetection, stateDetection} from "./deviationDetection";


export class AnalyzerService { // Orchestration functions

    operacionalDesviation(input: EvaluationInput): ResultReturn{
        //sends the data to the functions
        const state = stateDetection(input.before, input.after);
        const condition = conditionDetection(input.before, input.after);

        return{
            processId: input.processId,
            stateChange: state,
            performanceChange: condition
        }

    }
}