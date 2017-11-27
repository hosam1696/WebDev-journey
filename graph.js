class Vertix {
    constructor(label) {
        this.label = label;
    }
}

class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        for (let i = 0; i <this.vertices;++i) {
            this.adj[i] = [];
            this.adj[i].push('')
        }
    }

    addEdge(v,w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++
    }

    toString() {

    }
}