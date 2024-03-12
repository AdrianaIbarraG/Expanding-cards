const panels = document.querySelectorAll('.panel'); /* Select all the elements with the class panel */

/* Verify panels 0, 1, 2, 3, 4 */
/* console.log(panels[0]);  */

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active'); /* List classes and select one */
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}