export class BotCommand {

  private _name: string;
  private _descr: string;


  constructor(name: string, descr: string) {
    this._name = name;
    this._descr = descr;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get descr(): string {
    return this._descr;
  }

  set descr(value: string) {
    this._descr = value;
  }
}
