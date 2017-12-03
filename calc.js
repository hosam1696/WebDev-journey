class Calculator {

    constructor() {
        /******  Selectors   ********/
        this.btns = document.querySelectorAll('button');
        this.displayDiv = document.querySelector('[data-res="dis"]');
        this.processDiv = document.querySelector('[data-res="proc"]');
        this.displayResult = 0;
        this.processResult = '';
        this.availableOperators = /[\+\-\*\/c]/g;
        this.finishCalc = false;
    }

    init() {
        this.btns.forEach(btn => {
            btn.innerText = btn.value;
            btn.addEventListener('click', this.btnClick(), false)
        });
    }

    btnClick(ev) {
        return (ev) => {
            let val = ev.target.value;
            this.disOnProcess(val, val == '=');
        }
    }

    disOnResult(res) {
        !res && (res = 0);
        this.displayDiv.innerText = res;
        this.displayResult = res;
        this.finishCalc = true;
    }


    disOnProcess(proc, ps = false) {
        const procResLen = this.processResult.length;

        if (ps) {
            if (this.availableOperators.test(this.processResult[procResLen - 1]))
                this.processDiv.innerText = this.processResult = this.removeLatest(this.processResult);
            console.log(this.processResult);
            this.disOnResult(eval(this.processResult));
        } else if (proc === 'c') {
            this.processDiv.innerText = this.processResult = this.removeLatest(this.processResult);
        } else if (proc === 'ce') {
            this.reset();
        } else {
            if (this.displayResult !== 0 && this.finishCalc) {
                this.processResult = String(Number(this.displayResult)).concat(proc);
            } else {
                this.processResult = String(this.processResult).concat(proc);
            }
            this.processDiv.innerText = this.processResult;
            this.finishCalc = false;
        }
        this.decorateResult();
        return this.processResult;
    }

    reset() {
        this.processResult = '';
        this.processDiv.innerText = '';
        this.finishCalc = false;
    }

    removeLatest(str) {
        let end = str.length - 1;
        return end > 0 ? str.substr(0, end) : this.displayResult;
    }

    decorateResult() {
        this.processDiv.innerHTML = this.processResult.replace(this.availableOperators, '&nbsp;<span>$&</span>&nbsp;');
    }
}