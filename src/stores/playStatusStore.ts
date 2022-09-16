import type { BonusItem } from "src/models/play-screen";
import { writable } from "svelte/store";
import { getId } from "../helpers/common";
export interface PlayStatus {
  bonus: BonusItem[];
}
const getPlayStatusStore = () => {
  let playStatus: PlayStatus = { bonus: [] };
  let { update, subscribe } = writable<PlayStatus>(playStatus);

  const addBonus = (item: BonusItem) => {
    update((val: PlayStatus) => {
      const index = val.bonus.findIndex((p: BonusItem) => p.id == item.id);
      if (index == -1) {
        val.bonus.push(item);
        val.bonus = val.bonus;
        val = val;
      }
      return val;
    });
  };

  const removeBonus = (id: string) => {
    update((val: PlayStatus) => {
      let d = val.bonus.slice(0);
      let index = d.findIndex((p: BonusItem) => p.id == id);
      if (index != -1) {
        d.splice(index, 1);
        val.bonus = d;
        val = val;
      }
      return val;
    });
  };
  return { subscribe, addBonus, removeBonus };
};
export const PlayStatusStore = getPlayStatusStore();
