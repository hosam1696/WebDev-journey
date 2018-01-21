class Log {
    constructor() {
        this.selector = document.getElementById('log-ins');
        this.clearBtn = document.getElementById('log-clear');
        this.sln = 'calc:log'; // stands for stored log name
        this.appName = 'HSA-CALCULATOR';
        this.url = 'https://codepen.io/hosamsam/pen/jaJQyE';
        this.appLog = { name: this.appName, url: this.url, log: [] };
        this.init()
    }

    init() {
        const storedLog = localStorage.getItem(this.sln);
        if (storedLog) {
            this.appLog = JSON.parse(storedLog);
            this.logs.forEach(log => {
                this.buildHTML(log)
            })
        } else {
            localStorage.setItem(this.sln, JSON.stringify(this.appLog))
        }

        this.clearBtn.addEventListener('click', (ev) => {
            ev.preventDefault();
            this.clear()
        }, false)

    }

    saveLog(log) {
        this.buildHTML(log);
        this.appLog.log.push(log);
        localStorage.setItem(this.sln, JSON.stringify(this.appLog));
    }
    buildHTML(log) {
        this.selector.innerHTML += `\
        <div class="res-log">
            <span>${log.expression} =</span>
            <span>${log.result}</span>
        </div>
        `;
    }
    clear() {
        localStorage.removeItem(this.sln);
        this.appLog = { name: this.appName, url: this.url, log: [] };
        this.selector.innerHTML = ''
    }
    get stored() {
        return this.appLog
    }
    get logs() {
        return this.appLog.log
    }
}