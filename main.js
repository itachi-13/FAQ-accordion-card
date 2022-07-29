var q = document.querySelectorAll('.q');
var button = document.querySelectorAll('button');
var arrow = document.querySelectorAll('.arrow');

q.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        let p = btn.nextElementSibling;

        if (p.style.display === 'block') {
            p.style.display = "none";
            button[i].style.fontWeight = 400;
            arrow[i].style.transform = 'rotate(0deg)';
        }
        else {
            p.style.display = 'block';
            button[i].style.fontWeight = 700;
            arrow[i].style.transform = 'rotate(180deg)';
        }

        q.forEach ((bt, index) => {
            if (index != i) {
                let p2 = bt.nextElementSibling;
                p2.style.display = 'none'
                button[index].style.fontWeight = 400;
                 arrow[index].style.transform = 'rotate(0deg)';
            }
        })
    })
})