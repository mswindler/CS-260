function changeImage() {
  if(document.querySelector('#kara').src == 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/10624710_567782073368635_8600910908131503707_n.jpg?oh=c8e21de22a90bfe021c11bec9cbd8801&oe=5A54225D')
    {
  document.querySelector('#kara').src = 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/1526341_567782120035297_6988144861973208407_n.jpg?oh=eeb74b2d2baf0534c283023c7cbe57cb&oe=5A47DAB6';
    }
  else
    {
      document.querySelector('#kara').src = 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/10624710_567782073368635_8600910908131503707_n.jpg?oh=c8e21de22a90bfe021c11bec9cbd8801&oe=5A54225D';
    }
}

function changeImageTwo() {
  if(document.querySelector('#matt').src == 'https://scontent-sjc2-1.xx.fbcdn.net/v/t31.0-8/20157915_10213783254478710_1713232044203715912_o.jpg?oh=4888134a88db9f7d89c005a17ad6a24f&oe=5A4B1518')
    {
  document.querySelector('#matt').src = 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/16729343_10212170056949780_8210820153973952251_n.jpg?oh=f0c30444303203eed1bfd21cc4f362ae&oe=5A592A75';
    }
  else
    {
      document.querySelector('#matt').src = 'https://scontent-sjc2-1.xx.fbcdn.net/v/t31.0-8/20157915_10213783254478710_1713232044203715912_o.jpg?oh=4888134a88db9f7d89c005a17ad6a24f&oe=5A4B1518';
    }
}

$(".t1, .t2, .t3, .t4").hover(function () {
    $(this).toggleClass("big-text");
});
