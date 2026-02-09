

export interface Snapshot{
    timestamp: number
    status: 'RUNNING' | 'STOPPED'
    performance: number      // 0–100
}