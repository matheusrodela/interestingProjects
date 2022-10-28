function transformTemperature(temperature){
    const containsCelsius = temperature.toLowerCase().includes('c')
    const containsFahrenheit = temperature.toLowerCase().includes('f')

    //Fluxo de erro
    if (!containsCelsius && !containsFahrenheit) {
        throw new Error('Favor inserir uma unidade de temperatura válida (F ou C).')
    }

    //Fluxo de erro - vamos além
    let regexpMoreThanOneLetter = /\D{2}/; // retorma texto se receber 2 ou mais caracteres não numéricos 
    if (temperature.match(regexpMoreThanOneLetter)) {
        return 'Favor inserir apenas uma letra para a unidade de temperatura (F ou C).'
    }


    //Fluxo ideal, de F para C
    let noTermperatureSign = Number(temperature.toLowerCase().replace('f','')); // recebe originalmente como string por isso foi necessário mudar para number
    let newTemperatureSign = '°C'
    let calculus = (fahrenheit) => ((fahrenheit - 32) * 5/9).toFixed(1).replace('.',',')


    //Fluxo alternativo, de C para F
    if(containsCelsius){
        noTermperatureSign = Number(temperature.toLowerCase().replace('c','')); 
        newTemperatureSign = '°F'
        calculus = (celsius) => (celsius * 9/5 + 32).toFixed(1).replace('.',',')
    }

    return calculus(noTermperatureSign) + newTemperatureSign
}

/*
Na função calculus, o argumento (fahrenheit) vai ser usado na função.
No return da função, chamamos a função calculus e damos a ela o argumento 'noTermperatureSign'. Com isso, o valor de fahrenheit passa a ser 'noTermperatureSign'. Daí a matematica é feita. 
*/

try {
     console.log(transformTemperature('50f'))
     console.log(transformTemperature('10C'))
    transformTemperature('64t')
} catch(error){
    console.log(error.message) //console.log(error) - mostra o objeto de erro completo (linha, tipo de erro e etc.)
}