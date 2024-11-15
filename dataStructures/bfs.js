function bfs(graph, starting_node) {
    let queue = [starting_node];
    let visited = new Set();

    visited.add(starting_node);
    while(queue.length > 0) {
        let node = queue.pop();

        console.log(node);
        let neighbors = graph[node] || [];

        for(let neighbor of neighbors) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.unshift(neighbor);
            }
        }

    }
    
}

// const graph = {
//     A: ['B', 'C'],
//     B: ['A', 'D', 'E'],
//     C: ['A', 'F'],
//     D: ['B'],
//     E: ['B', 'F'],
//     F: ['C', 'E'],
// };
const graph = {
    A: ['B', 'C', 'D'],
  B: ['E', 'F'],
  C: ['G', 'H'],
  D: ['I', 'J'],
  E: ['D'],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
}
bfs(graph, 'A');