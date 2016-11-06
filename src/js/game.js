function gameTemplate (game) {
  var fishHtml = renderFishes(game);
  var seaweedHtml = renderSeaweed(game);

  return `
     <div class="fish">
       ${fishHtml}
     </div>
     <div class="seaweed">
       ${seaweedHtml}
     </div>
    `;
};

function renderFishes (game) {
  return this.fish;
}

function renderSeaweed (game) {
  return this.seawead;
}


export { gameTemplate };
