const STATE={
  PENDING:'pending',
  FULFILLED:'fulfilled',
  REJECTED:'rejected'
};

class MyPromise {
  #state = STATE.PENDING;
  #value = null;
  #rejectedCallbacks=[];
  #fulfilledCallbacks=[];

  constructor(executorFunc) {
    try {
      executorFunc(
        value=>this.#resolve(value),
        value=>this.#reject(value)
      );
    } catch (error) {
        this.#reject(error)
    }
    
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject)=>{
      
      const fulfilledCallback = () => {;
          if(!onFulfilled) return resolve(this.#value);

          queueMicrotask(()=>{
              try {
                const value = onFulfilled(this.#value);
                resolve(value);
              } catch (error) {
                reject(error);
              }
          });
        };

      const rejectedCallback = () => {
          if(!onRejected) return reject(this.#value);

          queueMicrotask(()=>{
              try {
                const value = onRejected(this.#value);
                resolve(value);
              } catch (error) {
                reject(error);
              }
          });
        };

       switch(this.#state){
         case STATE.PENDING:
           this.#fulfilledCallbacks.push(fulfilledCallback);
           this.#rejectedCallbacks.push(rejectedCallback);
           break;
         case STATE.FULFILLED:
            fulfilledCallback();
           break;
         case STATE.REJECTED:
            rejectedCallback();
           break;
         default: {
          throw new Error('Unexpected promise state');
        }
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  get state() {
    return this.#state;
  }

  get value() {
    return this.#value;
  }

  #resolve(value){
    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#fulfilledCallbacks.forEach(callback=>callback())
  }

  #reject(value){
    this.#value = value;
    this.#state = STATE.REJECTED;
    this.#rejectedCallbacks.forEach(callback=>callback())
  }
  
}

// Do not edit the line below.
exports.MyPromise = MyPromise;
