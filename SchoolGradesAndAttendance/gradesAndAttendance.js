function getScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let finalScore;

    if(scoreA){
        finalScore = 'Você tirou A =)'
    } else if(scoreB) {
        finalScore = 'Você tirou B'
    } else if(scoreC){
        finalScore = 'Você tirou C'
    } else if(scoreD){
        finalScore = 'Você tirou D'
    } else if(scoreF){
        finalScore = 'Você tirou F ;('
    } else{
        finalScore = 'Favor digitar uma nota entre 0 e 100'
    }

    return finalScore
}

console.log(getScore(78))


function getAttendance(attendance){

    let schooldates = 50
    const finalAttendance = ((attendance*100)/schooldates)
    

    let badAttendanceRate = finalAttendance >=0  && finalAttendance < 75
    let mediumAttendanceRate = finalAttendance >= 75 && finalAttendance < 90
    let goodAttendaceRate = finalAttendance >= 90 && finalAttendance <= 100

    let attendanceRate;

    if(badAttendanceRate){
       attendanceRate = 'Você reprovou por faltas em excesso.'
    } else if(mediumAttendanceRate) { 
        attendanceRate = 'Cuidado! Você já tem muitas faltas.'
    } else if(goodAttendaceRate){
        attendanceRate = 'Você tem boa presença nas aulas.'
    } else {
        attendanceRate ='Erro'
    }

    return  attendanceRate + ' ' + 'Presença total: ' + finalAttendance + '%'
}


function Student(name, score, attendance) {
    this.name= name
    this.score = score
    this.attendance = attendance
}

const Matheus = new Student("Matheus", getScore(78), getAttendance(38))
const Joao = new Student("João", getScore(99), getAttendance(45))
const Rodrigo = new Student("Rodrigo", getScore(55), getAttendance(32))

console.log(Matheus)
console.log(Joao)
console.log(Rodrigo)

