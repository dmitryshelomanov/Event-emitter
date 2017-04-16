class EventEmitter
{
  constructor ()
  {
    this.events = {};
    this.instance = null;
  }
  
  static getInstance ()
  {
    if (! this.instance) {
      return this.instance = new EventEmitter;
    }
    return this.instance;
  }
  
  on (name, callback)
  {
    if (this.events[name]) {
      this.events[name].push (callback);
    } else {
      this.events[name] = [callback];
    }
  }
  
  emit (name, ...rest)
  {
    if (this.events[name]) {
      this.events[name].forEach (cb => {
        cb.apply (this, rest);
      });
    }
  }
}