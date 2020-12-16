class sound{
    constructor(){
        this.osc=0
        this.mod=0
        this.env=0
        this.filter=0
        this.x=1

        this.carrierFreq=0
        this.modFreq=1
        this.modDepth=random(20,50)

        this.osc=  new p5.Oscillator('sawtooth');
        this.mod= new p5.Oscillator('sine');
        this.filter=new p5.LowPass()
        this.env=  new p5.Envelope(this.x, 0.3, 0.1, 0.1)
    }

    fartSound(){

        this.carrierFreq=slider.value()

        this.osc.freq(this.carrierFreq)
        this.osc.start()

        this.mod.start()
        this.mod.disconnect()
        this.mod.freq(this.modFreq)
        this.mod.amp(this.modDepth)
        this.osc.freq(this.mod)
        
        this.filter.freq(500)
        this.filter.res(1)

        this.osc.disconnect()
        this.osc.connect(this.filter)
    
        this.env.play(this.osc)
        

    }
}