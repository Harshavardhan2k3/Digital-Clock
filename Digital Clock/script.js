
// function update()
// {
//     const now = new Date();
//     let hours = now.getHours().toString().podstart(2,0);
//     const meridian =  hours>=12 ? "PM" : "AM"; 
//     hours = hours%12 || 12;
//     const min = now.getMinutes().toString().podstart(2,0);
//     const sec = now.getSeconds().toString().posstart(2,0);
//     const timestring = `$(hours):$(min):$(sec)`;
//     document.getElementById("clock").textcontent = timestring;




// }
// update();

function update() {
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM"; 
    hours = hours % 12 || 12;
    const formattedHours = hours.toString().padStart(2, '0'); 
    const min = now.getMinutes().toString().padStart(2, '0');
    const sec = now.getSeconds().toString().padStart(2, '0');
    const timestring = `${formattedHours}:${min}:${sec} ${meridian}`;
    document.getElementById("clock").textContent = timestring;
}
update();
setInterval(update, 1000);




