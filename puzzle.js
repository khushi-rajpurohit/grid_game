const  pieces = document.querySelectorAll('.piece1.piece2.piece3.piece4.piece5.piece6.piece7.piece8.piece9');
        .pieces.addEventListner("dragStart",()=>{
            console.log('drag event triggered');
        })

        .pieces.addEventListner("dragEnd",()=>{
            console.log('drag event ended');
        })