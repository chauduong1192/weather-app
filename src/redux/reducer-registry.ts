/**
 * See http://nicolasgallagher.com/redux-modules-and-code-splitting/
 * for reasoning and explanations on how this works
 */

class ReducerRegistry {
  private emitChange: any = null;
  private reducers: any = {};

  getReducers() {
    return { ...this.reducers };
  }

  register(name: string, reducer: any) {
    this.reducers = { ...this.reducers, [name]: reducer };
    if (this.emitChange) {
      this.emitChange(this.getReducers());
    }
  }

  setChangeListener(listener: any) {
    this.emitChange = listener;
  }

  // Preserve initial state for not-yet-loaded reducers
  getCombinedReducers(initialState = {}) {
    const reducers = this.getReducers();
    const reducerNames = Object.keys(reducers);
    Object.keys(initialState).forEach((item) => {
      if (reducerNames.indexOf(item) === -1) {
        reducers[item]  = (state = null) => state;
      }
    });
    return reducers;
  }
}

const reducerRegistry = new ReducerRegistry();
export { reducerRegistry };
export default reducerRegistry;
