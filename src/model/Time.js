export default class Time{
    constructor(timeNumber){
        this.time = timeNumber
    }

    stringify = () => {
        let hour = Math.floor(this.time)
        const minutes = this.time - Math.floor(this.time)
        
        return `${hour}:${ Math.round(minutes*60) < 10 ? '0':''}${Math.round(minutes * 60)}`
    }

    differenceBetween = time => this.time >= time ? this.time - time.time : time.time - this.time

    plus = hours => new Time(this.time + hours)
}