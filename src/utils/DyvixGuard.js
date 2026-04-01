export const GaurdStatus = {
    Error: "error",
    Warn: "warn",
    Log: "log"
}
const PREFIX = "[DyvixUI]";

export function EvaluateFailure(message = "", status)
{
    const formatedmsg = `${PREFIX} - ${message}`;

    switch(status) {
        case GaurdStatus.Error:
            console.error(formatedmsg);
            return;
        case GaurdStatus.Warn:
            console.warn(formatedmsg);
        default:
            console.log(formatedmsg);
    }
}