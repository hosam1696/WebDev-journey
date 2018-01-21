class Calculator {

    constructor() {
        /******  Selectors   ********/
        this.btns = document.querySelectorAll('#calculator button');
        this.displayDiv = document.querySelector('[data-res="dis"]');
        this.processDiv = document.querySelector('[data-res="proc"]');
        this.displayResult = 0;
        this.processResult = '';
        this.availableOperators = /[\+x÷\-\*\/c]/g;
        this.convermathOperators = /[x÷]/gi;
        this.finishCalc = false;
        this.operatorsToReplace = { 'x': '*', '÷': '/' };
        this.calcLog = new Log();
        this.logDiv = this.calcLog.selector;
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', this.btnClick(), false)
        });
        document.addEventListener('keydown', ev=>{
            let key = ev.key;
            let isBackSpace = ev.which == 8;
            if (/\d+/.test(key)) {
                this.disOnProcess(key);
            } else if (this.availableOperators.test(key) && ev.which != 8) {
                this.disOnProcess(key, false, key);
            } else if (isBackSpace) {
                this.processDiv.innerText = this.processResult = this.removeLatest(this.processResult);
            } else {
                (key=== '='||key === 'Enter')&& this.disOnProcess(null, true)
            }
        }, false);
    }

    btnClick(ev) {
        return (ev) => {
            let val = ev.target.value;
            this.disOnProcess(val, val == '=', ev.target.textContent);
        }
    }

    disOnResult(res) {
        !res && (res = 0);
        [this.displayDiv.innerText, this.displayResult, this.finishCalc] = [res, res, true];
        this.displayLog()
    }


    disOnProcess(proc, ps = false, operatorText=null) {
        const procResLen = this.processResult.length;

        if (ps) {
            if (this.lastopIsMatch)
                this.processDiv.innerText = this.processResult = this.removeLatest(this.processResult);
            this.processDiv.innerText = String(this.processResult).replace(this.convermathOperators, m=>this.operatorsToReplace[m]);
            this.disOnResult(eval(this.processDiv.innerText));
        } else if (proc === 'c') {
            this.processDiv.innerText = this.processResult = this.removeLatest(this.processResult);
        } else if (proc === 'ce') {
            this.reset();
        } else if (proc === '@') {
            this.processDiv.innerText = this.processResult = this.displayResult;
        } else if (this.processResult === '' && this.finishCalc === false && this.numIsOperator(proc)) { // the first input is an operator
            return false;
        }
        else {
            if (this.lastopIsMatch && this.numIsOperator(proc)) { // last operator will override the current operator
                this.processResult = this.processResult.substring(0, procResLen - 1).concat(operatorText ? operatorText : proc);
                this.processDiv.innerText = this.processResult;
                this.decorateResult();
            } else {
                if (this.displayResult !== 0 && this.finishCalc) { // if user had done previous calculations
                    this.processResult = String(Number(this.displayResult)).concat(operatorText ? operatorText : proc);
                } else {
                    
                    this.processResult = String(this.processResult).concat(operatorText ?operatorText:proc);
                }
            }

            this.processDiv.innerText = String(this.processResult).replace(this.convermathOperators, m => this.operatorsToReplace[m]);
            this.finishCalc = false;
        }
        this.decorateResult();
        return this.processResult;
    }

    reset() {
        [this.processResult, this.processDiv.innerText, this.finishCalc] = ['', '', false];
    }

    removeLatest(str) {
        let end = str.length - 1;
        return end > 0 ? str.substr(0, end) : this.displayResult;
    }

    decorateResult() {
        this.processDiv.innerHTML = this.processResult.replace(this.availableOperators, '<span>$&</span>');
    }

    get lastopIsMatch() {
        return this.availableOperators.test(this.processResult[this.processResult.length - 1])
    }

    numIsOperator(num) {
        return Boolean(num.match(this.availableOperators))
    }

    displayLog() {
        const [expression, result] = [this.processDiv.textContent, eval(this.processDiv.innerText)];        
        this.calcLog.saveLog({ expression, result, date: Date.now() })
        if (this.logDiv.scrollHeight > 265)
            this.logDiv.scrollTop = this.logDiv.scrollHeight
    }
}