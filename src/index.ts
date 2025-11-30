import LoggingConstants from './constants';

interface TracedFunction<T extends any[], R> {
  (...args: T): R;
}

function trace<T extends any[], R>(fn: (...args: T) => R) {
  return function (this: any, ...args: T): R {

    console.log(LoggingConstants.FUNCTION_STARTED);
    console.log(LoggingConstants.PARAMETERS_LABEL);
    args.forEach(element => {
      console.log(`arg${args.indexOf(element)} = ${element}`)
    });
    
    try {      
      const result = fn.apply(this, args);
      console.log(LoggingConstants.FUNCTION_ENDED);
      return result; 
    } catch (error) {
      console.log('error')
    }
  } as TracedFunction<T, R>;
}

export { trace };