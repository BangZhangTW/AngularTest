// @ts-ignore
import { IDictionaryBase } from "../_dictionary/i-dictionary-base";

export class MagazineList implements IDictionaryBase {

  sort: number = 0;

  countId: number = 0;

  number: string = "";

  name: string = "";

  description: string = "";

  image: string = "";

  lastChangeTime: number = 0;

  showUnread: boolean = false;

  width: number = 0;

  height: number= 0;
}
