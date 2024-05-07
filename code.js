function are_isomorphic(graph1, graph2) {
    var tmp = [];
    var found = false;
    var tmpgraph1 = graph1.slice();
    var tmpgraph2 = graph2.slice();
    if (graph1.length != graph2.length) {
        return false;
    }
    for (var i = 0; i < graph1.length; i++) {
        tmp = graph1[i].toString();
        for (var k = 0; k < graph2.length; k++) {
            if (tmp == graph2[k].toString()) {
                tmpgraph2 = tmpgraph2.splice(k, 1);
                tmpgraph1 = tmpgraph1.splice(i, 1);
                found = true;  
                k = Infinity;
            }
        }
        if (found == false) {
            return false;
        }
        found = false;
    }
    return true;
}

module.exports = {are_isomorphic};
