const listeners = [];

const dyvixToast = {
  success: (message) => emit({ message: message, type: "success" }),
  error: (message) => emit({ message: message, type: "error" }),
  info: (message) => emit({ message: message, type: "info" }),
  warning: (message) => emit({ message: message, type: "warning" }),
};

function emit(toast) {
  listeners.forEach((cb) => cb(toast));
}

export function subscribe(cb) {
  listeners.push(cb);
  return () => listeners.splice(listeners.indexOf(cb), 1);
}

export default dyvixToast;