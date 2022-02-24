window.addEventListener('load', ()=> {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d"); 

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeRect(100, 100, 200, 500);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.strokeRect(200, 200, 200, 500);


});