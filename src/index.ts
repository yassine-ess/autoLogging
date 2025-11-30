interface TracedFunction<T extends any[], R> {
  (...args: T): R;
}

function trace<T extends any[], R>(fn: (...args: T) => R) {
  return function (this: any, ...args: T): R {
    console.log("Function started");
    args.forEach(element => {
      console.log(`parameter: arg${element.} = ${element}`)
    });
    const result = fn.apply(this, args);
    console.log("Function ended");
    return result;
  } as TracedFunction<T, R>;
}

module.exports = { trace };