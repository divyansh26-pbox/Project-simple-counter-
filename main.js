const counter = document.querySelector('#count')
const btns = document.querySelectorAll('.btn')

let c =0;
btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('inc')){ c++}
        else if(styles.contains('dec')){c--}
        else{c=0}
        if(c<0){counter.style.color= 'red'}
        if(c>0){counter.style.color= '#14C38E'}
        if(c===0){counter.style.color= '#570A57'}

        
        
        counter.textContent = c
    })
})



