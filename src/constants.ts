
class LoggingConstants {
    // Function lifecycle messages
    public static readonly FUNCTION_STARTED = 'Function started';
    public static readonly FUNCTION_ENDED = 'Function ended';
    
    // Parameter logging messages
    public static readonly PARAMETERS_LABEL = 'parameters';
    
    // Error messages
    public static readonly FUNCTION_ERROR = 'Function error occurred';
    public static readonly PARAMETER_ERROR = 'Invalid parameter';
    
    // Performance messages
    public static readonly EXECUTION_TIME = 'Execution time';
    public static readonly PERFORMANCE_WARNING = 'Function execution took longer than expected';
    
    // Debug messages
    public static readonly DEBUG_INFO = 'Debug information';
    public static readonly TRACE_INFO = 'Trace information';
}

export { LoggingConstants };
export default LoggingConstants;