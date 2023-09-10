export default class CharacterClass {
  private _health: number
  private _fed: number
  private _isAlive: boolean
  private _healthMultipliar
  private _images = {
    alive: "./images/character/sheepNew.gif",
    dead: "./images/character/rip.gif",
  }
  constructor() {
    this._healthMultipliar = 1
    this._health = 100
    this._fed = 100
    this._isAlive = true
  }

  //getters

  public get fed(): number {
    return this._fed
  }

  public get health(): number {
    return this._health
  }

  public get isAlive(): boolean {
    return this._isAlive
  }

  public set fed(value: number) {
    //max fed === 100
    if (this._fed <= 0 || value <= 0) {
      this._fed = 0
    } else {
      this._fed = value
    }
  }

  public set health(value: number) {
    if (this.health <= 0 || value <= 0) {
      this.die()
    } else {
      this.health = value
    }
  }

  //functions
  // feed √, heal √, die √
  public feed(amount: number) {
    console.log(this._fed);
    
    if (this._fed + amount >= 100) {
      this._fed = 100
    } else if (this._fed + amount <= 0) {
      this._fed = 0
    }else {
      this._fed += amount
    }

    
  }

  public heal(amount: number) {
    console.log("hp: "+this._health);
    if(this._fed <30){
      this._healthMultipliar = 2
    }else {
      this._healthMultipliar = 1
    }
    if ((this._health + (amount*this._healthMultipliar)) >= 100) {
      this._health = 100
    } else {
      this._health += (amount*this._healthMultipliar)
    }
    if(this._health<=0) this.die();

    console.log("hp: "+this._health);
    
  }

  public die() {
    this._health = 0
    this._isAlive = false
  }

  public revive(){
    this._health = 100
    this._fed = 100
    this._isAlive = true
    
  }

  public show() {
    return (
      <div>
        {
          (this._isAlive) 
          ?<img src={this._images.alive} alt=""/>
          :<img src={this._images.dead} alt=""/>
        }
      </div>
    )
  }
}
