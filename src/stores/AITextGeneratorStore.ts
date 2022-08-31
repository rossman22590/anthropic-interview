import { observable, makeObservable } from "mobx";
import { RootStore } from "./RootStore";
import { MobXStore } from "./MobxStore";

interface IAITextGeneratorStore {
  userText: string;
  aiText: string;
}

export class AITextGeneratorStore
  extends MobXStore
  implements IAITextGeneratorStore
{
  @observable userText: string;
  @observable aiText: string;
  constructor(rootStore: RootStore) {
    super();
    this.userText = "";
    this.aiText = "";
    makeObservable(this);
  }
}
