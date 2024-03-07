const { routeRobot, goalOrientedRobot, VillageState } = require('./robot');


function countSteps(state, robot, memory) {
    for (let steps = 0; ; steps++) {
        if (state.parcels.length == 0) {
            return steps;
        } else {
            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
        }
    }
}

function compareRobots(robot1, memory1, robot2, memory2) {
    let stepsR1 = 0;
    let stepsR2 = 0;
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random();
        stepsR1 += countSteps(state, robot1, memory1);
        stepsR2 += countSteps(state, robot2, memory2);
    }
    console.log('Average Robot 1 = ' + (stepsR1 / 100).toFixed(2))
    console.log('Average Robot 2 = ' + (stepsR2 / 100).toFixed(2))
}

compareRobots(routeRobot, [], goalOrientedRobot, []);