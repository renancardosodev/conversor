const calculo = document.querySelector('.calculo')
const resultado = document.querySelector('.resultado')
const botoes = [...document.querySelectorAll('#btn')]
const check = document.querySelector('#checkbox-theme')

check.addEventListener('change', () => document.body.classList.toggle('dark'))

class Calculator {
    constructor(calculo, resultado){
        this.calculo = calculo
        this.resultado = resultado
        this.current = ""
    }

    addDigito(digito){
        if (digito === '.' && resultado.innerText.includes('.')){
            return
        }
        this.current = digito
        this.update() 
    }

    processamento(op){
        let opValue 
        const previous = Number(this.calculo.innerText.split(' ')[0])
        const current = Number(this.resultado.innerText)

        if(this.resultado.innerText === '' && op !== 'C'){
            if(this.calculo.innerText !== ''){
                this.changeOp(op)
            }
            return
        }

        switch(op){
            case '+':
                opValue = previous + current
                this.update(opValue, op, current, previous)
                break
            case '-':
                opValue = previous + current
                this.update(opValue, op, current, previous)
                break
            case '/':
                opValue = previous + current
                this.update(opValue, op, current, previous)
                break
            case '*':
                opValue = previous + current
                this.update(opValue, op, current, previous)
                break
            case '+':
                opValue = previous + current
                this.update(opValue, op, current, previous)
                break
            case "'":
                opValue = previous + current
                this.processDel()
                break
            case "CE":
                opValue = previous + current
                this.processCE()
                break
            case "C":
                opValue = previous + current
                this.processC()
                break
            case "=":
                opValue = previous + current
                this.processIgual()
                break
            default:
                return
        }
    }

    update(opValue = null, op = null, current = null, previous = null) {
        if(opValue === null){
            this.resultado.innerText += this.current
        }else{
            if (previous === 0){
                opValue = current
            }if (op === '*'){
                this.calculo.innerText = `${opValue} x `
                this.resultado.innerText = ''
            }else{
                this.calculo.innerText = `${opValue} ${op}`
                this.resultado.innerText = ''
            }
        }
    }

    changeOp(op){
        const mathOp = ['+', '-', '/', '*']

        if(!mathOp.includes(op)){
            return
        }
        this.calculo.innerText = this.calculo.innerText.slice(0, -1) + op
    }

    processDel(){
        this.resultado.innerText = this.resultado.innerText.slice(0, -1)
    }

    processCE(){
        this.resultado.innerText = ''
    }

    processC(){
        this.resultado.innerText = ''
        this.calculo.innerText = ''
    }

    processIgual(){
        const operation = calculo.innerText.split(' ')[1]
        this.processamento(operation)
    }
}


const calcular = new Calculator (calculo, resultado)



botoes.map((btn) => {
    btn.addEventListener('click', (e)=>{
        const value = e.target.innerText

        if(Number(value) >= 0 || value === '.'){
            calcular.addDigito(value)
        }else{
            if(value === 'x'){
                calcular.processamento('*')  
            }else{
                calcular.processamento(value)
            }
        }
    })
})