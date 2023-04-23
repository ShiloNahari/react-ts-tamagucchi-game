
export default class GameClass {
  private _phase:string; // 'init'|'started'|'ended';
  private _score:number;
  private _startDate:Date;
  constructor(){
    this._phase = "init"
    this._score = 0
    this._startDate = new Date();
  }

  public get phase():string{
    return this._phase;
  }
  
  public get startDate():Date|null{
    return this._startDate;
  }

  public get score():number{
    return this._score
  }

  //method

  public start(){
    this._startDate = new Date();
    this._phase = 'started';
    this._score = 0;
  }

  public end(){
    this._phase = 'ended';
  }

  public addScore(points:number):number{
    this._score += points;
    return this.score;
  }
}