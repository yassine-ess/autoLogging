// A.I generated code
const { trace } = require('../src/index'); // Import the trace function from the TypeScript module

test('trace runs the inner wrapped function', () => {
  const tracedFunction = trace(() => {
    console.log('inner function message');
    return true;
  });
  
  var result = tracedFunction();
  
  expect(result).toBe(true);
});

test('trace logs inner function start and end', ()=>{

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    const tracedFunction = trace(() => {
      console.log("some work...")
    });

    tracedFunction();
    
    // Assert that console.log was called with start and end messages
    expect(consoleSpy).toHaveBeenCalledWith("Function started");
    expect(consoleSpy).toHaveBeenCalledWith("Function ended");
    
    consoleSpy.mockRestore();
});


test('trace shows passed parameters initial values', ()=>{
  const consoleSpy = jest.spyOn(console,'log').mockImplementation();

  const tracedFunction = trace((name: string, nbr: number) => {
      console.log('some work...')
  })

  tracedFunction("abc",123);

  expect(consoleSpy).toHaveBeenCalledWith("parameter: abc");
  expect(consoleSpy).toHaveBeenCalledWith("parameter: " + 123);  

})