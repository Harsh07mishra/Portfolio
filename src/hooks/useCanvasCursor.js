import { useEffect } from "react";

const useCanvasCursor = () => {
  function Wave(options) {
    this.init(options || {});
  }

  Wave.prototype = {
    init: function (options) {
      this.phase = options.phase || 0;
      this.offset = options.offset || 0;
      this.frequency = options.frequency || 0.0006;
      this.amplitude = options.amplitude || 1;
    },
    update: function () {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    },
  };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
  }

  function Line(options) {
    this.init(options || {});
  }

  Line.prototype = {
    init: function (options) {
      this.spring = (options.spring || 0.3) + 0.05 * Math.random() - 0.001;
      this.friction = config.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (let i = 0; i < config.size; i++) {
        const node = new Node();
        node.x = pos.x;
        node.y = pos.y;
        this.nodes.push(node);
      }
    },
    update: function () {
      let spring = this.spring;
      let node = this.nodes[0];

      node.vx += (pos.x - node.x) * spring;
      node.vy += (pos.y - node.y) * spring;

      for (let i = 0; i < this.nodes.length; i++) {
        node = this.nodes[i];

        if (i > 0) {
          const prev = this.nodes[i - 1];
          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;
          node.vx += prev.vx * config.dampening;
          node.vy += prev.vy * config.dampening;
        }

        node.vx *= this.friction;
        node.vy *= this.friction;
        node.x += node.vx;
        node.y += node.vy;
        spring *= config.tension;
      }
    },
    draw: function (ctx) {
      let x = this.nodes[0].x,
        y = this.nodes[0].y;

      ctx.beginPath();
      ctx.moveTo(x, y);

      for (let i = 1; i < this.nodes.length - 2; i++) {
        const node = this.nodes[i];
        const next = this.nodes[i + 1];
        x = (node.x + next.x) * 0.5;
        y = (node.y + next.y) * 0.5;
        ctx.quadraticCurveTo(node.x, node.y, x, y);
      }

      const node = this.nodes[this.nodes.length - 2];
      const last = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(node.x, node.y, last.x, last.y);
      ctx.stroke();
      ctx.closePath();
    },
  };

  const config = {
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  let ctx = null;
  let wave = null;
  let running = false;
  const pos = { x: 0, y: 0 };
  let lines = [];

  function createLines() {
    lines = [];
    for (let i = 0; i < config.trails; i++) {
      lines.push(new Line({ spring: 0.39 + (i / config.trails) * 0.005 }));
    }
  }

  function render() {
    if (!running || !ctx) return;

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${Math.round(wave.update())},50%,50%,0.25)`;
    ctx.lineWidth = 1;

    for (let i = 0; i < config.trails; i++) {
      lines[i].update();
      lines[i].draw(ctx);
    }

    requestAnimationFrame(render);
  }

  useEffect(() => {
    const canvas = document.getElementById("cursor-canvas");
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    running = true;

    wave = new Wave({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.00075,
      offset: 285,
    });

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    resizeCanvas();
    createLines();
    render();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      running = false;
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};

export default useCanvasCursor;
