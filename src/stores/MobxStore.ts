import { action } from "mobx";
export class MobXStore {
  @action set = (
    observable: Extract<keyof this, string>,
    newValue: any
  ): void => {
    this[observable] = newValue;
  };
}
