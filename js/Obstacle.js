import Node from './Node.js';
import Utils from './Utils.js';

const vec3 = glMatrix.vec3;
const mat4 = glMatrix.mat4;
const mat3 = glMatrix.mat3;

export default class Obstacle extends Node {
    
    constructor(mesh, image, options) {
        super(options);

        Utils.init(this, this.constructor.defaults, options);

        this.mesh = mesh;
        this.image = image;
    }

    update(dt) {
      var o = this; //obstacle
      const down = vec3.set(vec3.create(), 0, 0.98, 0);
      const rotation = [];
      console.log(o);
      let acc = vec3.create();

      o.rotation[1] += 0.01;
      vec3.scaleAndAdd(o.velocity, o.velocity, acc, dt * o.acceleration);

      const len = vec3.len(o.velocity);
        if (len > o.maxSpeed) {
            vec3.scale(o.velocity, o.velocity, o.maxSpeed / len);
        }
    }

}

Obstacle.defaults = {
    aspect           : 1,
    fov              : 1.5,
    near             : 0.01,
    far              : 100,
    velocity         : [0, 0, 0],
    mouseSensitivity : 0.002,
    maxSpeed         : 3,
    friction         : 0.2,
    acceleration     : 20,
};