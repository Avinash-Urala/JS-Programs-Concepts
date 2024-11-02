function dfs(graph, starting_node, target_node) {
    let stack = [starting_node];
    let visited = new Set();
    let parent = {};

    visited.add(starting_node);

    while(stack.length > 0) {
        let node = stack.pop();

        console.log(node);
        let neighbors = graph[node];

        if(node === target_node) {
            return constructPath(parent, starting_node, target_node)
        }

        for(let neighbor of neighbors) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor);
                parent[neighbor] = node;
            }
        }
    }
}

function constructPath(parent, starting_node, target_node) {
    const path = [];
    for(let at = target_node; at !== undefined; at = parent[at]) {
        path.push(at);
    }
    return path.reverse();
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
};

console.log(dfs(graph, 'A', 'F'));