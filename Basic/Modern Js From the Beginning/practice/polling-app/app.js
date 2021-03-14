
const tabsContain = document.querySelector('.tabs')

function changeTab(){
  event
    const tabs = tabsContain.getElementsByTagName('li');
    const tabsArr = Array.from(tabs);
    tabsArr.forEach(tab => {
      tab.classList.remove('is-active');
    });
    console.log(event.target);
    event.target.parentElement.classList.add('is-active');
    document.querySelector('#election-data').innerHTML = `<h4>Kerala Elections</h4>`;
}
