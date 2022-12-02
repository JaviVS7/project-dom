const d = document;
let x = 0,
  y = 0;
export function shortcuts(e) {
  console.log(e);
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  //Teclas especiales
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`);

  //Interactividad
  if (e.altKey && e.key === "a") {
    alert("Haz lanzado una alerta con el teclado");
  }
  if (e.altKey && e.key === "c") {
    confirm("Haz lanzado una confirmacion con el teclado");
  }
  if (e.altKey && e.key === "p") {
    prompt("Haz lanzado un aviso con el teclado");
  }
}

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();
  console.clear();
  console.log(limitBall, limitStage);

  // const move = (direction) => {};
  switch (e.keyCode) {
    case 37: //leftarrow
      // move("left");
      e.preventDefault();
      if (limitBall.left > limitStage.left) x--;
      break;
    case 38: //uparrow
      // move("up");
      e.preventDefault();
      if (limitBall.top > limitStage.top) y--;
      break;
    case 39: //rightarrow
      // move("right");
      e.preventDefault();
      if (limitBall.right < limitStage.right) x++;
      break; //downarrow
    case 40:
      // move("down");
      e.preventDefault();
      if (limitBall.bottom < limitStage.bottom) y++;
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
