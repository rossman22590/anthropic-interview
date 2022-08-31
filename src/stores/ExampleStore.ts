import { observable, makeObservable, action, computed } from "mobx";
import { RootStore } from "./RootStore";
import { MobXStore } from "./MobxStore";

interface IExampleStore {
  showExampleComponent: boolean;
}

export class ExampleStore extends MobXStore implements IExampleStore {
  @observable showExampleComponent: boolean;
  constructor(rootStore: RootStore) {
    super();
    this.showExampleComponent = false;
    makeObservable(this);
  }
}
