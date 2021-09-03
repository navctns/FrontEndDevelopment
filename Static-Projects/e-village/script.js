function showServices(event, fromEl){
    //Hide other list groups
    const allLists = document.getElementsByClassName('list-group');
    for(let i=0;i<allLists.length;i++){
      allLists[i].style.display = 'none';
      //show top image
      allLists[i].parentElement.previousElementSibling.style.display = 'block';
      //hide and show arrow buttons
      allLists[i].previousElementSibling.style.display = 'block';
      //hide arrow-top button
      allLists[i].nextElementSibling.style.display = 'none';
    }
    console.log('all-lists', allLists);
    console.log('showServices',event);
    console.log(event.originalTarget.nextElementSibling)
    let nextSibling = null;
    if(fromEl === 'btn'){
      nextSibling = event.originalTarget.nextElementSibling;
    }else if(fromEl === 'icon'){
      nextSibling = event.originalTarget.parentElement.nextElementSibling;
      console.log('nextSibling', nextSibling);
    }
    nextSibling.style.display = 'block';
    //hide the bottom arrow button
    event.originalTarget.style.display = 'none';
    //show top arrow button
    nextSibling.nextElementSibling.style.display = 'block';
    //hide top image 
    event.originalTarget.parentElement.previousElementSibling.style.display = 'none';
  }
  function hideServices(event){
    const prevSibling = event.originalTarget.previousElementSibling;
    console.log('prev sibling', prevSibling)
    //hide services list
    prevSibling.style.display = 'none';
    //hide the top arrow button itself
    event.originalTarget.style.display = 'none';
    //show bottom arrow button
    prevSibling.previousElementSibling.style.display = 'block';
    //show top image 
    event.originalTarget.parentElement.previousElementSibling.style.display = 'block';

  }

  function showServicesOnMouseEnter(event){
    //show services when mouse enter on card
    //Hide other list groups
    const allLists = document.getElementsByClassName('list-group');
    for(let i=0;i<allLists.length;i++){
      allLists[i].style.display = 'none';
      //show top image
      allLists[i].parentElement.previousElementSibling.style.display = 'block';
      //hide and show arrow buttons
      allLists[i].previousElementSibling.style.display = 'block';
      //hide arrow-top button
      allLists[i].nextElementSibling.style.display = 'none';
    }
    console.log('on Mouseenter',event,event.originalTarget);
    //get list group
    let listGroup = null;
    //top image elements
    let topImageEl = null;
    //arrow pointer elem
    let arrowBtnEl = null;
    if(event.originalTarget){
      listGroup = event.originalTarget.getElementsByClassName('list-group');
      //set Top img elems
      topImageEl = event.originalTarget.getElementsByClassName('card-img-top');
      //arrow pointer elem
      arrowBtnEl = event.originalTarget.getElementsByClassName('fas');
    }else if(event.target){
      //To work on chrome
      listGroup = event.target.getElementsByClassName('list-group');
      console.log('list-group-chrome', listGroup);
      //top img elems 
      topImageEl = event.target.getElementsByClassName('card-img-top');
      //arrow pointer elem
      arrowBtnEl = event.target.getElementsByClassName('fas');
    }
    console.log(listGroup, listGroup[0]);
    listGroup[0].style.display = 'block';
    //get card top image
    // const topImageEl = event.originalTarget.getElementsByClassName('card-img-top');
    //hide card top image
    topImageEl[0].style.display = 'none';
    //get arrow button element
    // const arrowBtnEl = event.originalTarget.getElementsByClassName('fas');
    //hide arrow button element
    arrowBtnEl[0].style.display = 'none';
  }
  function hideServicesOnMouseLeave(event){
    //Hide services when mouse leave card
    //Get list-group element
    // const listGroup = event.originalTarget.getElementsByClassName('list-group');
    //get list group
    let listGroup = null;
    //top image elements
    let topImageEl = null;
    //arrow pointer elem
    let arrowBtnEl = null;
    if(event.originalTarget){
      listGroup = event.originalTarget.getElementsByClassName('list-group');
      //set Top img elems
      topImageEl = event.originalTarget.getElementsByClassName('card-img-top');
      //arrow pointer elem
      arrowBtnEl = event.originalTarget.getElementsByClassName('fas');
    }else if(event.target){
      //To work on chrome
      listGroup = event.target.getElementsByClassName('list-group');
      console.log('list-group-chrome', listGroup);
      //top img elems 
      topImageEl = event.target.getElementsByClassName('card-img-top');
      //arrow pointer elem
      arrowBtnEl = event.target.getElementsByClassName('fas');
    }

    //hide list group
    listGroup[0].style.display = 'none';
    //get card top image element
    // const topImageEl = event.originalTarget.getElementsByClassName('card-img-top');
    //show cart top image
    topImageEl[0].style.display = 'block';
    //hide arrow button element
    arrowBtnEl[0].style.display = 'block';
  }
