export const GaurdStatus = {
    Error: "error",
    Warn: "warn",
    Log: "log",
    Success: "success"
}
const PREFIX = "[DyvixUI]";

export function EvaluateFailure(message = "", status)
{
    const formatedmsg = `${PREFIX} - ${message}`;

    switch(status) {
        case GaurdStatus.Error:
            console.error(formatedmsg);
            return null;
        case GaurdStatus.Warn:
            console.warn(formatedmsg);
            break;
        case GaurdStatus.Log:
            console.log(formatedmsg);
    }
}