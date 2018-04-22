export const TICKETS_RECEIVED = "TICKETS:RECEIVED";

export function ticketsReceived(state) {
    return {
        type: TICKETS_RECEIVED,
        state
    };
}