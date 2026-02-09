import {AnalyzerService} from "./AnalyzerService";
import {EvaluationInput} from "./evaluationInput";


const analyzer = new AnalyzerService();

// Testing
const scenario1: EvaluationInput = {
    processId: "PROCESS-01",
    before: {
        timestamp: Date.now() - 60_000,
        status: "RUNNING",
        performance: 92
    },
    after: {
        timestamp: Date.now(),
        status: "STOPPED", // UNEXPECTED_STOP
        performance: 75   // PERFORMANCE_DROP
    }
};

const scenario2: EvaluationInput = {
    processId: "PROCESS-02",
    before: {
        timestamp: Date.now() - 60_000,
        status: "STOPPED",
        performance: 60
    },
    after: {
        timestamp: Date.now(),
        status: "RUNNING",   // RECOVERY
        performance: 85     // PERFORMANCE_IMPROVED
    }
};

const scenario3: EvaluationInput = {
    processId: "PROCESS-03",
    before: {
        timestamp: Date.now() - 60_000,
        status: "RUNNING",
        performance: 80
    },
    after: {
        timestamp: Date.now(),
        status: "RUNNING",    // NO_CHANGE
        performance: 80      // NO_CHANGE
    }
};

console.log("Scenario 1:", analyzer.operacionalDesviation(scenario1));
console.log("Scenario 2:", analyzer.operacionalDesviation(scenario2));
console.log("Scenario 3:", analyzer.operacionalDesviation(scenario3));