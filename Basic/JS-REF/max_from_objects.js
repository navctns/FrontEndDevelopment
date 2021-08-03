let objects = [{id: 0, votes: 5}, {id: 1, votes: 3}, {id: 2, votes: 11}]

let maxObj = objects.reduce((max, obj) => (max.votes > obj.votes) ? max : obj);

