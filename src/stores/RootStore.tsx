import { makeObservable, observable } from "mobx";
import { AITextGeneratorStore } from "./AITextGeneratorStore";
import { ExampleStore } from "./ExampleStore";

import { MobXStore } from "./MobxStore";

interface IRootStore {
  observableValue: number;
  exampleStore: ExampleStore;
  aiTextGenStore: AITextGeneratorStore;
}
export class RootStore extends MobXStore implements IRootStore {
  @observable observableValue: number;
  @observable exampleStore: ExampleStore;
  @observable aiTextGenStore: AITextGeneratorStore;
  constructor() {
    super();
    this.observableValue = 0;
    this.exampleStore = new ExampleStore(this);
    this.aiTextGenStore = new AITextGeneratorStore(this);
    makeObservable(this);
    //by passing this to the user store, we're able to access any store in any other store.
    //idea from : https://dev.to/shevchenkonik/react-typescript-mobx-4mei
  }
}
