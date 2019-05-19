export class BotCommand {

  private _name: string;
  private _descr: string;
  private _usage: string;


  constructor(name: string, descr: string, usage: string) {
    this._name = name;
    this._descr = descr;
    this._usage = usage;
  }

  get usage(): string {
    return this._usage;
  }

  set usage(value: string) {
    this._usage = value;
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
