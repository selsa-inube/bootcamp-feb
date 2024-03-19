const {
  findRoute,
  roadGraph,
  routeRobot,
  goalOrientedRobot,
} = require("./robot");
const { compareRobots } = require("./1_Measuring_a_robot");

function myRobot({ place, parcels }, route) {
  function distance(graph, from, to) {
    return findRoute(graph, from, to).length;
  }
  console.log("route.length = " + route.length);
  // Si la ruta está vacía, determinamos la mejor ruta para un paquete
  if (route.length == 0) {
    let shortestRoute = 0;
    let shortestDistance = Infinity;
    var routeTemp = null;

    for (let parcel of parcels) {
      // console.log("------------------");
      // console.log("place = " + place);
      // console.log("parcel = " + parcel);
      // console.log("parcel.place = " + parcel.place);
      // console.log("parcel.address = " + parcel.address);

      if (parcel.place != place) {
        routeTemp = findRoute(roadGraph, place, parcel.place);
      } else {
        routeTemp = findRoute(roadGraph, place, parcel.address);
      }

      // console.log("routeTemp = " + routeTemp);
      // console.log("routeTemp.length  = " + routeTemp.length);

      // Calculamos la distancia total de esta ruta
      let totalDistance =
        routeTemp.length + distance(roadGraph, parcel.place, parcel.address);

      // Actualizamos la ruta más corta si es necesario
      if (totalDistance < shortestDistance) {
        shortestRoute = routeTemp.concat(
          findRoute(roadGraph, parcel.place, parcel.address),
        );
        shortestDistance = totalDistance;
      }
    }

    // Asignamos la mejor ruta encontrada
    route = shortestRoute;
  }

  // Devolvemos la dirección y la memoria según la ruta calculada
  return { direction: route[0], memory: route.slice(1) };
}

// compareRobots(goalOrientedRobot, [], myRobot, []);
compareRobots(goalOrientedRobot, [], myRobot, []);
//runRobotAnimation(VillageState.random(), yourRobot, memory);
