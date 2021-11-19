function collision(ret1, ret2){
  if(ret1.x - ret2.x <= ret1.width/2 + ret2.width/2 &&
     ret1.y - ret2.y <= ret1.height/2 + ret2.height/2 &&
      ret2.x - ret1.x <= ret1.width/2 + ret2.width/2 &&
       ret2.y - ret1.y <= ret1.height/2 + ret2.height/2){
    return true;
  } else {
      return false;
  }
}