@import url('https://fonts.googleapis.com/css2?family=Akronim&display=swap');
/*  font-family: 'Akronim', sans-serif; */

@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap');
/*  font-family: 'Teko', sans-serif; */

@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
/*  font-family: 'Oxygen', sans-serif; */

.list_div ol {
    list-style: none;
}

.projects_page_whole {
    width: 100vw;
    background-color: rgb(245, 245, 245);
    overflow-x: hidden;
}

.projects_page_wrapper {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
}

/*  start of edit 
*/

.section_top {
    padding-left:7vw;
    padding-bottom: 20px;
    padding-top: 150px;
    background-image: url("/logogreythreed.jpg");
    background-position: center;
    background-size: cover;
    background-clip: border-box;
    width: 100vw;
    display: flex;
    margin-bottom: 50px;
  }
  
  .cocacola {
    border-radius: 50%;
    margin-bottom: 10px;
    transition: 0.4s;
  transform: scale(1.04);
  box-shadow: white 0px 0px 4px;
  }
  
  .section_top_list_item1 {
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin-top: 50px;
  }
  
  .section_top_list_item1:hover {
    color: #e9e9e9;
  }
  
  .top_title1 { 
    font-size: 20px;
    font-family: sans-serif;
  }
  
  .top_title2 { 
    font-size: 10px;
    color: grey;
  }
  
  .home_button{ 
    width: max-content;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 10px;
    padding: 3px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 15px;
    padding-bottom: 4px;
    background-color: rgba(255, 255, 255, 0.833);
    border-radius: 0.75rem;
    color: rgb(13, 18, 26);
    box-shadow: rgb(0, 0, 0) 0px 0px 5px;
    border-width: 1px;
    border-color: rgb(53, 53, 53);
    transition: 0.4s;
  }
  
  .home_button:hover{ 
    transform: scale(1.08);
    background-color: rgb(15, 15, 20);
    text-decoration: none;
    transition: 0.4s;
    color: rgb(222, 222, 222);
    border-color: rgb(255, 255, 255);
    box-shadow: rgb(206, 206, 206) 0px 0px 7px;
  }



/*  end of edit 
*/




.logored {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: white 0px 0px 4px;
    transition: 0.5s;
    margin-bottom: 10px;
    transform: scale(0.7);
}

.logored:hover {
    transition: 0.5s;
    transform: scale(0.75);
}

.list_div {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}


.title_and_title_description {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("/logogreythreed.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 60px;

}

.title1 {
    display: flex;
    flex-direction: row;
    color: rgb(224, 224, 224);
    font-size: 20px;
    font-family: Teko, sans-serif;
    font-weight: 900;
}

.title {
    height: 40px;
}

.title h1 {
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    color: rgb(77, 77, 77);
    font-size: 15px;
    font-family: Teko, sans-serif;
    font-weight: 900;
    background-color: rgb(230, 230, 230);
    border-radius: 0.60rem;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-width: 3px;
    width: 250px;
    border-color: rgb(26, 31, 34);
    transition: 0.6s;
}

.title h1:hover { 
    background-color: rgb(39, 39, 39);
    transition: 0.6s;
    color: rgb(228, 228, 228);
}

.title_brother {
    color: orange;
}

.description_list_element_wrapper {
    height: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    background-color: rgb(32, 32, 32);
    border-radius: 0.45rem;
    border-color: rgb(212, 212, 212);
    border-width: 3px;
    box-shadow: rgb(255, 255, 255) 0px 0px 4px;
    padding: 8px;
    transition: 0.5s;
}

.description_list_element_wrapper:hover {
    background-color: rgb(236, 236, 236);
    transition: 0.5s;
    transform: scale(1.03);
    box-shadow: rgb(0, 0, 0) 0px 0px 4px;
    border-color: rgb(26, 31, 34);

}

.description_list_element {
    text-align: center;
    width: 200px;
    font-size: 9px;
    color: rgb(133, 133, 133);
    margin-top: 1px;
    margin-bottom: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.description_list_element_right_side {
    color: rgb(184, 162, 0);
    white-space: nowrap;
}

.buttons_list_element {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    grid-auto-flow: dense;
    margin: 20px;
}

.contact_button {
    background-color: rgb(90, 96, 255);
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 0.15rem;
    box-shadow: white 0px 0px 2px;
    color: white;
    transition: 0.4s;
}

.contact_button:hover {
    transition: 0.4s;
    background-color: rgba(90, 96, 255, 0.714);
}


.see_more_button {
    background: linear-gradient(to top, rgb(52, 52, 52), rgb(50, 50, 50), rgb(49, 49, 49));
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 0.15rem;
    box-shadow: white 0px 0px 2px;
    color: white;
    transition: 0.4s;
}

.see_more_button:hover {
    background: linear-gradient(to top, rgba(52, 52, 52, 0.62), rgba(50, 50, 50, 0.541), rgba(49, 49, 49, 0.562));
    transition: 0.4s;
} 






.list2 {
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    flex-direction: column;
    width: 300px;
    height: 550px;
    box-shadow: rgb(159, 159, 159) 0px 0px 7px;
    transition: 0.4s;
    padding: 10px;
    border-radius: 0.95rem;
    border-bottom-right-radius: 0.95rem;
    border-bottom-left-radius: 0.95rem;
}

.list2:hover {
    border-bottom-right-radius: 0.95rem;
    border-bottom-left-radius: 80px;
    background-color: #ffffff;
    transform: scale(1.01);
    transition: 0.4s;
    box-shadow: rgba(224, 224, 224, 0.54) 0px 0px 5px;
}

.video_list_element {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    height: 250px;
    width: 280px;
    margin: 10px;
    padding: 0px;
}

.video_tag {
    width: 250px;
    border-radius: 35px;
    border-width: 3px;
    border-color: rgb(26, 31, 34);
    box-shadow: rgb(255, 255, 255) 0px 0px 10px;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.video_tag:hover {
    box-shadow: rgb(255, 255, 255) 0px 0px 7px;
    transition: 0.5s;
}

.arrow {
    margin: 10px;
    transition: 0.5s;
    transform: rotate(-90deg);
}

.arrow:hover {
    transform: rotate(270deg);
    transition: 0.5s;
}

.view_link_header {
    background-color: #00be98;
    color: #ffffff;
    box-shadow: white 0px 0px 6px;
    border-width: 3px;
    border-color: #009174;
    font-size: 10px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    transition: 0.3s;
    margin: 10px;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 0.35rem;
    white-space: nowrap;
}

.view_link_header:hover {
    background-color: rgb(239, 239, 239);
    color: rgb(46, 46, 46);
    transition: 0.3s;
}


@media (min-width: 200px) and (max-width: 250px) and (orientation: portrait) {

    .title h1 {
        width: 160px;
    } 
    .description_list_element_wrapper {
    width: 160px;
    }

    .description_list_element {
        width: 150px;
    } 


    .list2 {
        width: 190px;
        height: 400px;
    }

    .video_list_element {
        width: 165px;
        height: 140px;
    }

    .video_tag {
        width: 120px;
    }
}

@media (min-width: 200px) and (max-width: 250px) and (orientation: landscape) {
    .title h1 {
        width: 160px;
    } 
    .description_list_element_wrapper {
    width: 160px;
    }

    .description_list_element {
        width: 150px;
    } 


    .list2 {
        width: 190px;
        height: 400px;
    }

    .video_list_element {
        width: 165px;
        height: 140px;
    }

    .video_tag {
        width: 120px;
    }
}

@media (min-width: 250px) and (max-width: 300px) and (orientation: portrait) {
    .title h1 {
        width: 160px;
    } 
    .description_list_element_wrapper {
    width: 160px;
    }

    .description_list_element {
        width: 150px;
    } 

    .list2 {
        width: 190px;
        height: 400px;
    }

    .video_list_element {
        width: 165px;
        height: 140px;
    }

    .video_tag {
        width: 120px;
    }
}

@media (min-width: 250px) and (max-width: 300px) and (orientation: landscape) {
    .title h1 {
        width: 160px;
    } 
    .description_list_element_wrapper {
    width: 160px;
    }

    .description_list_element {
        width: 150px;
    } 

    .list2 {
        width: 190px;
        height: 400px;
    }

    .video_list_element {
        width: 165px;
        height: 140px;
    }

    .video_tag {
        width: 120px;
    }
}


@media (min-width: 300px) and (max-width: 400px) and (orientation: portrait) {
    .title h1 {
        width: 200px;
    } 
    .description_list_element_wrapper {
        width: 200px;
    }

    .description_list_element {
        width: 200px;
    } 

    .list2 {
        width: 270px;
        height: 450px;
    }

    .video_list_element {
        margin-top: 50px;
        margin-bottom: 20px;
        width: 200px;
        height: 140px;
    }

    .video_tag {
        width: 200px;
    }
}

@media (min-width: 300px) and (max-width: 400px) and (orientation: landscape) {
    .title h1 {
        width: 200px;
    } 
    .description_list_element_wrapper {
        width: 200px;
    }

    .description_list_element {
        width: 200px;
    } 

    .list2 {
        width: 270px;
        height: 450px;
    }

    .video_list_element {
        margin-top: 50px;
        margin-bottom: 20px;
        width: 200px;
        height: 140px;
    }

    .video_tag {
        width: 200px;
    }
}


@media (min-width: 400px) and (max-width: 500px) and (orientation: portrait) {
    .title h1 {
        width: 250px;
    } 
    .description_list_element_wrapper {
        width: 250px;
    }

    .description_list_element {
        width: 250px;
    } 
    .list2 {
        width: 300px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 250px;
        height: 250px;
    }

    .video_tag {
        width: 250px;
    }
}

@media (min-width: 400px) and (max-width: 500px) and (orientation: landscape) {
    .title h1 {
        width: 250px;
    } 
    .description_list_element_wrapper {
        width: 250px;
    }

    .description_list_element {
        width: 250px;
    } 


    .list2 {
        width: 300px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 250px;
        height: 250px;
    }

    .video_tag {
        width: 250px;
    }
}


@media (min-width: 500px) and (max-width: 600px) and (orientation: portrait) {
    .title h1 {
        width: 350px;
    } 
    .description_list_element_wrapper {
        width: 350px;
    }

    .description_list_element {
        width: 350px;
    } 

    .list2 {
        width: 400px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 350px;
        height: 250px;
    }

    .video_tag {
        width: 350px;
    }
}


@media (min-width: 500px) and (max-width: 600px) and (orientation: landscape) {
    .title h1 {
        width: 350px;
    } 
    .description_list_element_wrapper {
        width: 350px;
    }

    .description_list_element {
        width: 350px;
    } 


    .list2 {
        width: 400px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 350px;
        height: 250px;
    }

    .video_tag {
        width: 350px;
    }
}


@media (min-width: 600px) and (max-width: 700px) and (orientation: portrait) {
    .title h1 {
        width: 200px;
    } 
    .description_list_element_wrapper {
        width: 200px;
    }

    .description_list_element {
        width: 200px;
    } 


    .list2 {
        width: 250px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 200px;
        height: 250px;
    }

    .video_tag {
        width: 250px;
    }
}

@media (min-width: 600px) and (max-width: 700px) and (orientation: landscape) {
    .title h1 {
        width: 200px;
    } 
    .description_list_element_wrapper {
        width: 200px;
    }

    .description_list_element {
        width: 200px;
    } 
 
    .list2 {
        width: 250px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 200px;
        width: 200px;
    }

    .video_tag {
        width: 200px;
    }
}


@media (min-width: 700px) and (max-width: 800px) and (orientation: portrait) {
    .title h1 {
        width: 200px;
    } 
    .description_list_element_wrapper {
        width: 200px;
    }

    .description_list_element {
        width: 200px;
    }

    .list2 {
        width: 250px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 200px;
        height: 250px;
    }

    .video_tag {
        width: 250px;
    }

}

@media (min-width: 700px) and (max-width: 800px) and (orientation: landscape) {
    .title h1 {
        width: 200px;
    } 
    .description_list_element_wrapper {
        width: 200px;
    }

    .description_list_element {
        width: 200px;
    } 

    .list2 {
        width: 250px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 200px;
        height: 250px;
    }

    .video_tag {
        width: 250px;
    }

}



@media (min-width: 800px) and (max-width: 900px) and (orientation: portrait) {
    .title h1 {
        width: 300px;
    } 
    .description_list_element_wrapper {
        width: 300px;
    }

    .description_list_element {
        width: 300px;
    } 

    .list2 {
        width: 350px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 350px;
        height: 250px;
    }

    .video_tag {
        width: 300px;
    }
}

@media (min-width: 800px) and (max-width: 900px) and (orientation: landscape) {
    .title h1 {
        width: 300px;
    } 
    .description_list_element_wrapper {
        width: 300px;
    }

    .description_list_element {
        width: 300px;
    } 

    .list2 {
        width: 350px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 350px;
        height: 250px;
    }

    .video_tag {
        width: 300px;
    }
}



@media (min-width: 900px) and (max-width: 1000px) and (orientation: portrait) {
    .title h1 {
        width: 300px;
    } 
    .description_list_element_wrapper {
        width: 300px;
    }

    .description_list_element {
        width: 300px;
    } 

    .list2 {
        width: 350px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 300px;
        height: 250px;
    }

    .video_tag {
        width: 300px;
    }
}

@media (min-width: 900px) and (max-width: 1000px) and (orientation: landscape) {
    .title h1 {
        width: 300px;
    } 
    .description_list_element_wrapper {
        width: 300px;
    }

    .description_list_element {
        width: 300px;
    } 


    .list2 {
        width: 350px;
        height: 550px;
    }

    .video_list_element {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 300px;
        height: 250px;
    }

    .video_tag {
        width: 300px;
    }

}



@media (min-width: 1000px) and (max-width: 1100px) and (orientation: portrait) {


}

@media (min-width: 1000px) and (max-width: 1100px) and (orientation: landscape) {


}


@media (min-width: 1200px) and (max-width: 1300px) and (orientation: portrait) {

}

@media (min-width: 1200px) and (max-width: 1300px) and (orientation: landscape) {

}

@media (min-width: 1300px) and (max-width: 1400px) and (orientation: portrait) {

}

@media (min-width: 1300px) and (max-width: 1400px) and (orientation: landscape) {

}
