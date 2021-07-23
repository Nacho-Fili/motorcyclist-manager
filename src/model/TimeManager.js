export default class TimeManager{

    times = []

    constructor(initialTime, endTime, separator){
        let currentTime = initialTime
        const hours = initialTime.differenceBetween(endTime)

        for(let i = 0; i <= hours; i++){            
            this.times.push(currentTime)
            currentTime = currentTime.plus(separator)
            this.times.push(currentTime)
            currentTime = currentTime.plus(separator)
        }
    }

    stringifyList = () => {
        return this.times.map(time => time.stringify())
    }
}