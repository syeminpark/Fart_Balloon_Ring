class sound{
    constructor(){
        this.osc=0
        this.mod=0
        this.env=0
        this.filter=0

        this.carrierFreq=97
        this.modFreq=1
        this.modDepth=random(20,50)

        this.cverb=0

    }

    fartSound(){
        this.osc=  new p5.Oscillator('sawtooth');
        this.osc.freq(this.carrierFreq)
        this.osc.start()

        this.mod= new p5.Oscillator('sine');
        this.mod.start()
        this.mod.disconnect()
        this.mod.freq(this.modFreq)
        this.mod.amp(this.modDepth)

        this.osc.freq(this.mod)
    
        this.env=  new p5.Envelope(1, 0.3, 0.1, 0.1);


        this.filter=new p5.LowPass()
        this.filter.freq(500)
        this.filter.res(0.5)

        this.osc.disconnect()
        this.osc.connect(this.filter)
-
        this.env.play(this.osc)
      

    }
}