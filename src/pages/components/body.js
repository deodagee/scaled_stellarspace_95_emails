@import url('https://fonts.googleapis.com/css2?family=Cabin:ital@1&display=swap');
/*  font-family: 'Cabin', sans-serif */

@import url('https://fonts.googleapis.com/css2?family=Akronim&display=swap');
/*  font-family: 'Akronim', sans-serif; */


@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap');
/*  font-family: 'Teko', sans-serif; */

@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
/*  font-family: 'Oxygen', sans-serif; */

.whole ul {
  list-style: none;
}
.whole ol {
  list-style: none;
}


.whole {
  background: linear-gradient(to bottom, #eeeeeef1, #f6f6f6f1, #f4f4f4 );
  align-items: center;
  justify-content: center;
  width: 100vw;
  font-family: Teko, sans-serif;
}

.parent_wrapper {
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.everything_wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
}

.cocacola {
  display: none;
  width: max-content;
  border-radius: 0.45rem;
  margin-top: 5vh;
  margin-bottom: -5vh;
  transform: scale(0.9);
  transition: 0.4s;
}

.promo_message_first_body { 
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 250px;
  background-color: rgba(194, 194, 194, 0.87);
  border-width: 1px;
  border-color: orange;
  padding: 20px;
  z-index: 90;
}

.promo_message_first_body h1{
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 11px;
  text-align: center;
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-color: rgba(167, 114, 0, 0.762);
padding: 10px;
border-radius: 0.45rem;
color: rgb(245, 245, 245);
}

.close_button  {
  width: max-content;
  display: flex;
  flex-direction: row;
  position: absolute;
  align-items: center;
  gap: 5px;
  justify-content: center;
  margin-left: 20px;
  background-color: black;
  border-radius: 0.15rem;
  box-shadow: white 0px 0px 4px;
  padding: 10px;
  transition: 0.5s;
  margin-top: 190px;
  color: white;
}

.close_button_image{ 
  width: 10px;
  height: 10px;
}

.close_button:hover { 
  background-color: black;
  transition: 0.5s;
  transform: scale(1.05);
}

.promo_code { 
  color: rgb(237, 197, 52);
}
.image_and_video  { 
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url("/card.png");
  background-size: 10%;
background-position-x: 55px;
  background-repeat: no-repeat;
}

.top_video_background{ 
  display: flex;
  width: 50vw;
  height: max-content;
  align-items: center;
  justify-content: center;
  margin-bottom: -140px;
  margin-top: -100px;
}

.video_background_tag {
  border-width: 2px;
  border-color: rgb(255, 255, 255);
  box-shadow: white 0px 0px 7px;
  border-radius: 0.45rem;
  transform: scale(0.4);
  align-items: center;
  justify-content: center;
  display: flex;
  width: max-content;
  transition: 0.5s;
}

.video_background_tag:hover {
box-shadow: white 0px 0px 10px;
transform: scale(0.405);
transition: 0.5s;
} 

.avatar_image_list_item_and_name_and_emails_item {
  display: flex;
  flex-direction: column;
  width: 100vw;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
}

.name_and_emails_wrapper {
  margin-top: 200px;
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-width: 1px;
  border-left: none;
  border-right: none;
  border-color: rgb(255, 255, 255);
  box-shadow: rgb(0, 0, 0) 0px 0px 5px;
  background-image: url("/bgwhole3.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5px;
  padding-bottom: 30px;
  
}

.avatar_image_items {
  margin-right: 50px;
  width: 70vw;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  display: flex;
}

.avatar_image_list_item {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
}

.avatar_image:hover {
  transition: 0.5s;
}

.avatar_image_deo {
  margin-top: -250px;
  margin-bottom: 20px;
  transition: 0.5s;
  width: max-content;
  border-radius: 50px;
  box-shadow: rgb(255, 255, 255) 0px 0px 20px;
}

.avatar_image_deo:hover {
  transition: 0.5s;
  box-shadow: rgb(0, 0, 0) 0px 0px 5px;
}

.avatar_image {
  width: 15px;
  height: 10px;
  border-radius: 50px;
}

@keyframes backgroundCycle {

  0%,
  100% {
    background-color: rgba(255, 255, 255, 0);
    color: rgb(255, 255, 255);
    font-weight: 700;
  }

  33% {
    background-color: rgb(53, 53, 53);
    color: rgb(232, 232, 232);
    font-weight: 700;
  }

  66% {
    background-color: rgb(0, 0, 0);
    color: rgb(205, 205, 205);
    font-weight: 700;
  }
}


.avatar_image_list_item_paragraph {
  text-align: center;
  white-space: nowrap;
  width: 85px;
  font-size: 8px;
  font-family: 'Oxygen', sans-serif;
  font-weight: 500;
  margin-top: 5px;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 45px;
  border-color: rgb(7, 219, 0);
  border-width: 1px;
  transition: background-color 0.4s, color 0.4s;
  /* Transition for background-color and color */
  animation: backgroundCycle 6s infinite;
  /* Animation to cycle through colors */
}




.avatar_image_list_item_paragraph:hover {
  border-width: 1px;
  border-color: rgb(7, 219, 0);
  background-color: rgba(0, 0, 0, 0);
  color: rgb(37, 37, 37);
  transition: 0.4s;
}

.name_and_emails_item {
  align-items: center;
  display: flex;
  flex-direction: column;
}


@keyframes textColorCycle_name {

  0%,
  100% {
    color: rgb(255, 255, 255);
  }

  33% {
    color: rgb(213, 213, 213);
  }

  66% {
    color: rgb(35, 35, 35);
  }
}

.name {
  font-family: 'Akronim', cursive;
  font-size: 60px;
  font-weight: 700;
  transition: color 0.5s;
  animation: textColorCycle_name 6s infinite;
}

.name:hover {
  transition: 0.3s;
  color: orange;
}

.emails {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(214, 214, 214);
  transition: 0.2s;
  font-size: 13px;
  font-weight: 700;
  font-family: 'Oxygen', sans-serif;
}

.emails:hover {
  color: rgb(69, 69, 69);
  transition: 0.2s;
  font-weight: 700;
}

.phone_number {
  font-weight: 800;
  color: rgb(255, 166, 0);
  font-family: 'Oxygen', sans-serif;
}

.phone_number:hover {
  font-weight: 800;
  color: rgb(255, 255, 255);
}

.separatorLine {
  height: 1px;
  background-color: #ccc;
}

.credentials {
  margin-top: 20px;
  margin-bottom: 40px;
  width: max-content;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  gap: 5vw;

}

.credentials_image {
  border-radius: 50px;
  width: 40px;
  height: 40px;
  transition: 0.5s;
  box-shadow: 0px 0px 15px #ffffff;
}

.credentials_image:hover {
  box-shadow: none;
  transition: 0.5s;
  transform: scale(1.2);
}

.container {
  position: relative;
  display: flex;
}


.top_main_header_and_paragraphs {
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 70px;
  padding-right: 70px;
  box-shadow: rgb(217, 217, 217) 0px 0px 10px;
  background-color: rgb(13, 13, 13);
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  justify-content: center;
  gap: 70px;
  transition: 0.4s;
  margin-bottom: 30px;
  margin-top: 50px;
}

.top_main_header_and_paragraphs:hover {
  transition: 0.4s;
  box-shadow: rgb(211, 211, 211) 0px 0px 5px;
}

.top_main_header {
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: max-content;
  justify-content: center;
  align-items: center;
}

.top_main_header_header1 {
  white-space: nowrap;
  color: rgb(246, 246, 246);
  font-size: 23px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 700;
}

.top_main_header_header2 {
  white-space: nowrap;
  color: rgb(97, 142, 164);
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
}


.top_main_header_button {
  color: rgb(67, 67, 67);
  text-align: center;
  background-color: rgb(240, 240, 240);
  border-color: rgb(46, 46, 46);
  border-width: 1px;
  width: 100px;
  padding: 4px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0.95rem;
  transition: 0.4s;
}

.top_main_header_button:hover {
  background-color: rgb(14, 25, 32);
  color: rgb(230, 230, 230);
  border-color: none;
  transition: 0.4s;
}


.top_main_paragraphs {
  display: grid;
  row-gap: 30px;
  column-gap: 50px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(2, 1fr);
}

.top_main_icons_target {
  height: 50px;
  width: 50px;
  margin-top: 5px;
  transform: scale(0.6);
  transition: 0.4s;
}

.top_main_icons_chip {
  margin-top: 5px;
  width: 50px;
  height: 50px;
  transform: scale(0.4);
  transition: 0.4s;
}

.top_main_icons_mountain {
  margin-top: 5px;
  height: 50px;
  width: 50px;
  transform: scale(0.5);
  transition: 0.4s;
}


.top_main_icons_features {
  height: 50px;
  margin-top: 5px;
  width: 50px;
  transform: scale(0.5);
  transition: 0.4s;
}



.top_main_icons_target:hover,
.top_main_icons_chip:hover,
.top_main_icons_mountain:hover,
.top_main_icons_features:hover {
  transform: scale(1.005);


}


.contact_page_link {
  color: rgb(0, 150, 150);
  transition: 0.6s;
}

.contact_page_link:hover {
  color: rgb(0, 74, 74);
  transition: 0.6s;
}

.lists { 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding-top: 20px;
  padding-bottom: 20px;
  background: linear-gradient(to left,  #000002, #0c0e14, #232323f1);
  box-shadow: white 0px 0px 5px;
  transition: 0.8s;
}

.lists:hover { 
  transition: 0.8s;
  box-shadow: white 0px 0px 7px;
  background: linear-gradient(to left,  #232323da, #0c0e14, #000002ee);

}


.list3 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: max-content;
}

.title {
  display: flex;
  flex-direction: row;
  color: rgb(226, 226, 226);
  font-size: 15px;
  font-family: Teko, sans-serif;
  font-weight: 900;
}

.description_list_element {
  text-align: center;
  font-size: 9px;
  padding: 10px;
  margin: 10px;
  color: rgb(144, 144, 144);
}



.top_main_header_paragraph1 {
  text-align: left;
  height: 20px;
  font-size: 10px;
  font-weight: 700;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(190, 190, 190);
}


.top_main_header_paragraph2 {
  text-align: left;
  font-size: 9px;
  font-weight: 500;
  height: 50px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(230, 230, 230);
}

.toggle_button {
  color: teal;
}

.popup {
  display: none;
  z-index: 100;
  position: absolute;
  margin-top: 10px;
  background-color: rgb(241, 241, 241);
  border-width: 1px;
  font-size: 12px;
  color: rgb(62, 62, 62);
  border-radius: 0.45rem;
  padding: 5px;
  max-width: 500px;
  margin-top: -50px;
  box-shadow: 0px 0px 10px rgba(182, 178, 178, 0.3);
}

.button_toggle_close_paragraph {
  color: rgb(0, 162, 180);
  font-weight: 700;
  font-size: 12px;
}




.essentials_list,
.essentials_list2 {
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

.essentials_list_item {
  display: flex;
  width: max-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
}

.essentials_list_item_wrapper {
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@keyframes textColorCycle_essentials_list {

  0%,
  100% {
    color: rgb(251, 251, 251);
  }

  33% {
    color: rgb(227, 227, 227);
  }

  66% {
    color: rgb(255, 255, 255);
  }
}

.essentials_list h1,
.essentials_list2 h1 {
  transition: 0.2s;
  font-size: 18px;
  font-weight: 600;
  color: rgb(0, 31, 32);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  animation: textColorCycle_essentials_list 6s infinite;
}

.essentials_list h1:hover,
.essentials_list2 h1:hover {
  transition: 0.2s;
  color: rgba(16, 36, 41, 0.657);
}

.essentials_list p,
.essentials_list2 p {
  width: max-content;
  margin-top: 5px;
  border-left: none;
  border-right: none;
  padding: 2px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 10px;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(238, 238, 238);
  transition: 0.5s;
  border-color: rgb(0, 206, 178);
  border-width: 2px;
}

.essentials_list p:hover,
.essentials_list2 p:hover {
  transform: scale(1.04);
  transition: 0.5s;
  color: rgb(255, 255, 255);
}

.essentials_list,
.essentials_list2 {
  margin-top: 10vh;
}

.essentials_list2 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 0vh;
}

.essentials_list2 h1 {
  color: rgb(112, 33, 33);
}

.link {
  color: rgb(206, 155, 0);
  text-decoration: underline;
}

.link:hover {
  text-decoration: none;

}

.tabber {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  width: 100vw;
  height: max-content;
  margin-top: 5vh;
  background-color: rgb(0, 0, 0);


}

.tabber_wrapper {
  border-width: 1px;
  border-color: rgb(228, 228, 228);
  box-shadow: rgb(255, 255, 255) 0px 0px 10px;
  border-radius: 0.25rem;
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 20px;
  background-image: url("/bgwhole20.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s;
}

.tabber_wrapper:hover {
  transition: 0.5s;
  box-shadow: rgb(66, 24, 0) 0px 0px 7px;
}

.description_item {
  padding: 20px;
}

.description {
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(255, 255, 255);
  transition: 0.7s;
}

.description:hover {
  transform: scale(1.02);
  transition: 0.7s;
  color: rgb(218, 218, 218);
}



.bio_tag {
  display: flex;
  flex-direction: row;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 13px;
  font-weight: 800;
  color: rgb(212, 212, 212);
  padding: 10px;
}

.bio_side_tag {
  width: 100px;
}

.bio_item {
  display: flex;
  flex-direction: column;
  background-color: rgba(228, 228, 228, 0.071);
  padding: 10px;
  border-radius: 0.15rem;
  box-shadow: rgba(50, 50, 50, 0.52) 0px 0px 10px;
  transition: 0.5s;
}

.bio_item:hover {
  transition: 0.5s;
  transform: scale(1.005);
  padding: 10px;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.873) 0px 0px 10px;
}

.bio_item span {
  background-color: rgba(98, 98, 98, 0.307);
  border-radius: 0.75rem;
  margin-left: 10px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: rgb(190, 190, 190);
  transition: 0.2s;
}

.bio_item span:hover {
  background-color: rgb(33, 33, 33);
  color: rgb(255, 255, 255);
  transition: 0.2s;
}

.bio_header {
  font-size: 30px;
  font-family: 'Teko', sans-serif;
  color: rgb(63, 63, 63);
  transition: 0.4s;
}

.bio_header:hover {
  transition: 0.4s;
  text-decoration: underline;
}

.bio_header2 {
  font-size: 20px;
  font-family: 'Teko', sans-serif;
  color: rgb(35, 35, 35);
  transition: 0.4s;
}

.thank_you {
  width: min-content;
  font-size: 10px;
  font-weight: 700;
  transition: 0.5s;
  background-color: rgb(226, 208, 0);
  text-decoration: underline;
  border-width: 0.5px;
  border-color: rgba(255, 255, 255, 0.322);
  border-radius: 45px;
  color: rgb(42, 42, 42);
  white-space: nowrap;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  transition: 0.5s;
  margin-top: 2vh;
  transition: 0.4s;
}

.thank_you:hover {
  transition: 0.4s;
  transform: scale(0.8);
}

.tabber_buttons_table {
  padding: 20px;
}

.tabber_buttons_list {
  max-width: max-content ;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style: none;
  justify-content: center;
  align-items: center;
}

.services_more_button,
.prices_more_button,
.contact_more_button,
.projects_more_button,
.more_more_button {
  border-radius: 0.55rem;
  font-size: 10px;
  font-weight: 600;
  color: rgb(233, 233, 233);
  background: linear-gradient(to top, #0c0e14, #000002, #232323f1);
  padding: 10px 20px;
  cursor: pointer;
  max-width: 90px;
  box-shadow: rgb(137, 137, 137) 0px 0px 8px;
  transition: 0.5s;
  border-color: rgba(255, 255, 255, 0.73);
  border-width: 1px;
}

.services_more_button:hover,
.prices_more_button:hover,
.contact_more_button:hover,
.projects_more_button:hover,
.more_more_button:hover {
  transform: scale(1.05);
  transition: 0.5s;
  box-shadow: rgb(75, 75, 75) 0px 0px 7px;
  border-width: 1px;
  border-color: rgb(88, 88, 88);
  background: linear-gradient(to bottom, #191e2e12, #19213a0c);
  color: #ffffff;
}


.rectangle_images_parent {
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
}

.rectangle_images_wrapper {
  margin-bottom: 10vh;
  margin-top: 30px;
  width: max-content;
  padding-left: 10px;
  padding-right: 10px;
  width: max-content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.rectangle_image {
  width: 270px;
  height: 130px;
  object-fit: cover;
  border-radius: 0.75rem;
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
}


.rectangle_image:hover {
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  transform: scale(1.04);
}

.promo_and_stuff {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.promo_and_stuff_wrapper {
  border-width: 2px;
  border-color: rgba(191, 162, 30, 0.719);
  box-shadow: rgb(165, 165, 165) 0px 0px 10px;
  border-radius: 0.55rem;
  background-image: url("/bgwhole2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 90vw;
  border: 1px solid #ccc;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10vw;
}

.promo_messages {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  color: rgb(232, 232, 232);
}

.promo_message_first {
  display: flex;
  position: absolute;
  margin-top: -40px;
  transform: scale(0.5);
  color: white;
}

.promo_message1,
.promo_message2 {
  color: rgb(62, 62, 62);
  border-color: white;
  padding: 5px;
  border-radius: 0.45rem;
  border-width: 1px;
  background-color: rgb(243, 243, 243);
  margin-bottom: 10px;
  transition: 0.5s;
  font-size: 12px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
}

.promo_message1:hover,
.promo_message2:hover {
  background-color: rgb(240, 240, 240);
  transition: 0.5s;
  transform: scale(1.02);
  color: rgb(27, 27, 27);
  box-shadow: white 0px 0px 10px;
  border-color: rgb(125, 125, 125);
}

.promo_code {
  font-weight: 800;
  color: #508ed0;
}

.and_more_stuff {
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
  gap: 10px;
}

.perks_header {
  padding: 2px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 45px;
  box-shadow: rgb(135, 135, 135) 0px 0px 5px;
  width: max-content;
  background-color: rgb(246, 246, 246);
  color: rgb(69, 69, 69);
  font-family: 'Cabin', sans-serif;
  font-size: 15px;
  margin-bottom: 0px;
  transition: 0.4s;
}

.perks_header:hover {
  transition: 0.4s;
  transform: scale(1.03);
}

.offered_list {
  gap: 0px;
  margin-top: 0px;
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}

.offered_item {
  transform: scale(0.9);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0px;
  gap: 10px;
}

.logo_ssl_logo {
  margin-top: 0px;
  box-shadow: white 0px 0px 7px;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  transition: 0.5s;
}

.logo_ssl_logo:hover,
.private_domain_logo:hover {
  box-shadow: white 0px 0px 15px;
  transition: 0.5s;
  transform: scale(1.05);
}

.more_tag {
  background-color: rgb(240, 240, 240);
  padding: 3px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 45px;
  color: rgb(77, 77, 77);
  font-size: 10px;
  font-weight: 600;
  font-family: 'Cabin', sans-serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.4s;
  box-shadow: rgb(82, 82, 82) 0px 0px 6px;
}

.more_tag:hover {
  transition: 0.4s;
  transform: scale(1.03);
  box-shadow: white 0px 0px 8px;
}

.span_divider_parent {
  margin-top: 15px;
  display: flex;
  position: relative;
}

.span_divider_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  padding: 0.5rem;
  gap: 2px;
}

.span_1,
.span_2,
.span_3,
.span_4,
.span_5 {
  height: 3px;
  width: 100px;
}

.span_1 {
  background-color: rgba(0, 123, 103, 0.769);
  box-shadow: rgba(255, 255, 255, 0.458) 0px 0px 6px;
}

.span_2 {
  background-color: rgba(255, 0, 0, 0.553);
  box-shadow: rgba(255, 255, 255, 0.458) 0px 0px 6px;
}

.span_3 {
  background-color: rgba(0, 255, 60, 0.597);
  box-shadow: rgba(255, 255, 255, 0.458) 0px 0px 6px;
}

.span_4 {
  background-color: rgba(255, 230, 0, 0.859);
  box-shadow: rgba(255, 255, 255, 0.458) 0px 0px 6px;
}

.span_5 {
  background-color: rgba(212, 0, 255, 0.687);
  box-shadow: rgba(255, 255, 255, 0.458) 0px 0px 6px;
}

.seperator_line {
  background-color: rgb(63, 63, 63);
  height: 20px;
  width: 1.5px;
}

.compare {
  width: 100vw;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.we_offer {
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
}


.pricing {
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pricing_wrapper {
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pricing_page ul {
  list-style: none;
}


.pricing_headers_list_wrapper {
  width: max-content;
  align-items: center;
  justify-content: center;
  display: none;
}

.pricing_headers_list {
  background-color: rgb(20, 32, 39);
  box-shadow: rgb(255, 255, 255) 0px 0px 7px;
  border-radius: 0.90rem;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  width: 100%;
}

.pricing_headers_list:hover {
  transition: 0.2s;
  box-shadow: rgb(255, 255, 255) 0px 0px 10px;
}

.pricing_headers_list p {
  white-space: nowrap;
  font-family: 'Oswald', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  padding: 5px;
  border-radius: 0.15rem;
  transition: 0.5s;
}

.pricing_headers_list p:hover {
  color: rgb(182, 182, 182);
  transition: 0.3s;
  text-decoration: underline;
}

.pricing_headers_list li:hover {
  color: rgb(255, 191, 0);
  transition: 0.3s;
  text-decoration: underline;
}

.we_offer_span {
  color: rgb(55, 55, 55);
}

.we_offer_span2 {
  color: rgb(52, 183, 0);
}

.we_offer_span3 {
  color: rgb(150, 77, 0);
}

.promo_regular_parent {
  display: flex;
  justify-content: center;
  transform: scale(0.85);

}

.promo_regular_wrapper {
  border-color: rgba(2, 73, 0, 0.491);
  list-style: none;
  border-width: 1.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background-color: white;
  border-radius: 50px;
  transition: 0.6s;
  margin-bottom: 5vh;
  box-shadow: rgb(220, 220, 220)0px 0px 20px;
}

.promo_regular_wrapper:hover {
  box-shadow: rgb(220, 220, 220)0px 0px 10px;
  transition: 0.6s;
}

.promo_price,
.regular {
  transition: 0.3s;
  padding: 15px;
}

.promo_price:hover,
.regular:hover {
  transition: 0.3s;
  transform: scale(1.05);
}

.pricing_note { 
  display: flex;
  width: 50vw;
  font-size: 9px;
  color: white;
  margin-bottom: 40px;
}

.your_session_has_tim,
.your_session_has_tim2 {
  background-color: #ffbb00;
  color: rgb(239, 239, 239);
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 50px;
  white-space: nowrap;
  width: 80px;
  height: 35px;
  font-size: 10px;
  font-weight: 700;
  font-family: 'Cabin', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(2, 56, 0, 0.491) 3px 2px 7px;
  transition: 0.7s;
}

.your_session_has_tim.clickedButton {
  transition: 0.6s;
  transform: scale(1.2);
  background-color: rgb(51, 180, 0);
  box-shadow: rgb(51, 180, 0) 0px 0px 8px;
  border-width: 1px;
  border-color: rgb(28, 99, 0) 0px 0px 8px;
  border-radius: 50px;
  box-shadow: rgba(2, 56, 0, 0.708) 3px 2px 7px;

}

.your_session_has_tim2.clickedButton {
  transition: 0.6s;
  transform: scale(1.2);
  background-color: rgb(51, 180, 0);
  box-shadow: rgb(51, 180, 0) 0px 0px 8px;
  border-width: 1px;
  border-color: rgb(28, 99, 0) 0px 0px 8px;
  border-radius: 50px;
  box-shadow: rgba(2, 56, 0, 0.681) 3px 2px 7px;

}

.your_session_has_tim:hover,
.your_session_has_tim2:hover {
  transition: 0.7s;
  color: rgba(0, 0, 0, 0.541);
}

.pricing_tab_groups_wrapper {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pricing_tab_group_1,
.pricing_tab_group_2 {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}


.frame_405 {
  width: max-content;
  display: grid;
  gap: 30px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(3, 1fr);
}

.label_header{ 
  font-size: 9px;
  color:black;
}



.frame_wrapper {
  background-image: url("/bgwhole14.jpg");
  border-width: 1px;
  box-shadow: rgb(60, 60, 60) 0px 0px 10px 1px;
  border-color: rgb(255, 196, 0);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  border-width: 2px;
  border-bottom-right-radius: 0.85rem;
  border-bottom-left-radius: 0.85rem;
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0;
  width: 400px;
  height: 550px;
  color: rgb(212, 212, 212);
  font-size: 12px;
  transition: 0.5s;
}

.frame_wrapper:hover {
  color: rgb(255, 255, 255);
  transition: 0.5s;
  box-shadow: rgb(60, 60, 60) 0px 0px 10px 1px;
  transform: scale(1.05);

}

.frame_402 {
  width: max-content;
  justify-content: center;
  align-items: center;
  display: flex;
  grid-template-columns: repeat(1, 1fr);
  flex-direction: column;
  gap: 20px;

}


.title {
  position: relative;
  justify-content: center;
  align-items: center;
  display: contents;
}


.recommended_div {
  position: relative;
  width: max-content;
  background: linear-gradient(to right, rgb(43, 153, 0), rgb(78, 180, 37), rgb(0, 183, 122));
  padding: 2px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 0.45rem;
  border-width: 1px;
  transition: 0.6s;
  box-shadow: rgb(0, 183, 122) 0px 0px 10px;
}

.recommended_div:hover {
  transform: scale(1.05);
  transition: 0.6s;
  box-shadow: rgb(0, 183, 122) 0px 0px 15px;
}



.your_session_has_tim3_regular {
  font-family: 'Teko', sans-serif;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50px;
  width: 17vw;
  border-width: 1px;
  border-color: linear-gradient(to right, rgba(255, 255, 255, 0.731), rgba(255, 255, 255, 0.935), rgba(255, 255, 255, 0.752));
  font-size: 20px;
  font-weight: 400;
  padding: 1px;
  color: rgb(70, 70, 70);
  box-shadow: white 0px 0px 8px;
  transition: 0.6s;
  background-color: rgba(255, 255, 255, 0.981);
  background: linear-gradient(to right, rgba(95, 95, 95, 0.801), rgba(255, 255, 255, 0.935), rgba(255, 255, 255, 0.845));
  padding-top: 5px;
}

.your_session_has_tim3_promo {
  font-family: 'Teko', sans-serif;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50px;
  width: 17vw;
  border-width: 1px;
  border-color: linear-gradient(to right, rgba(255, 255, 255, 0.731), rgba(255, 255, 255, 0.935), rgba(255, 255, 255, 0.752));
  font-size: 20px;
  font-weight: 400;
  padding: 1px;
  color: rgb(70, 70, 70);
  box-shadow: white 0px 0px 8px;
  transition: 0.6s;
  background-color: rgba(255, 255, 255, 0.981);
  background: linear-gradient(to right, rgba(255, 255, 255, 0.845), rgba(255, 255, 255, 0.935), rgba(95, 95, 95, 0.801));
  padding-top: 5px;
}



.your_session_has_tim3_regular:hover,
.your_session_has_tim3_promo:hover {
  transition: 0.6s;
  transform: scale(1.03);
  color: rgb(30, 30, 30);
  box-shadow: white 0px 0px 10px;
}

.plan_description { 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  font-size: 7px;
  width: 200px;
}

.sites_list {
  position: relative;
}

.list_component {
  display: flex;
}

.sites_list li {
  align-items: center;
  font-family: 'Cabin', sans-serif;
  color: rgb(235, 235, 235);
  font-weight: 700;
  margin: 5px;
  padding: 1px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 0.45rem;
  transition: 0.7s;
  gap: 10px;
}

.sites_list li:hover {
  font-size: 11px;
  font-weight: 700;
  border-radius: 0.10rem;
  transition: 0.7s;
  transform: scale(1.1);
  background-color: rgb(255, 255, 255);
  color: rgb(36, 36, 36);
}

.list_title {
  padding-left: 5px;
  padding-right: 5px;
  font-size: 11px;
  color: orange;
}

.list_description {
  font-size: 9px;
  white-space: nowrap;
}

.regular_disclaimer {
  border-width: 0.5px;
  background-color: red;
  width: max-content;
  height: max-content;
  padding-left: 7px;
  padding-right: 7px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 0.45rem;
  font-family: 'Cabin', sans-serif;
  font-size: 10px;
  font-weight: 400;
}

.percent_disclaimer {
  height: max-content;
  border-width: 0.5px;
  background-color: rgb(255, 255, 255);
  color: rgb(255, 0, 0);
  width: max-content;
  padding-left: 7px;
  padding-right: 7px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 0.45rem;
  font-family: 'Cabin', sans-serif;
  font-size: 10px;
  font-weight: 400;
}

.frame_399 {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.your_session_has_tim5 {
  text-decoration: overline;
}

.your_session_has_tim5:hover {
  text-decoration: underline;
}

.frame_407 {
  gap: 2px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  margin-bottom: 5px;
}

.your_session_has_tim5 {
  font-size: 25px;
  color: rgb(0, 189, 0);
}

.component_6 {
  background: linear-gradient(to right, rgb(113, 130, 0), rgb(0, 214, 89));
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 0.45rem;
  width: max-content;
  box-shadow: white 0px 0px 5px;
  transition: 0.6s;
  border-width: 1px;
}

.component_6:hover {
  box-shadow: white 0px 0px 8px;
  transform: scale(1.04);
  transition: 0.6s;
}



@media (min-width: 200px) and (max-width: 300px) and (orientation: portrait) {
  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.5);
    gap: 20px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }

  .avatar_image_deo {
    margin-top: -210px;
  } 

  .name {
    font-size: 30px;
  }
  .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -20vh;
    margin-top: -0vh;
  }
  
  .video_background_tag {
    box-shadow: white 0px 0px 7px;
    border-radius: 0.45rem;
    transform: scale(0.4);
    align-items: center;
    justify-content: center;
    display: flex;
    width: max-content;
    transition: 0.5s;
  }
  
  .video_background_tag:hover {
  box-shadow: white 0px 0px 10px;
  transform: scale(0.45);
  transition: 0.5s;
  } 

  .promo_message_first {
    margin-top: -45px;
    transform: scale(0.4);
  }

  .promo_message_first p {
    width: 500px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-top: -70px;
    margin-bottom: 30px;
    position: absolute;
    transform: scale(0.8);
    width: 100%;
    height: 100%;
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 25px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 30px;
    column-gap: 50px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(1, 1fr);
  }




  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .tabber_buttons_list { 
    transform: scale(0.45);
  }



  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 220px;
    height: 150px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }



  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 85vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}


@media (min-width: 200px) and (max-width: 300px) and (orientation: landscape) {
  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.6);
    gap: 20px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }

  .name {
    font-size: 30px;
  }

  .promo_message_first {
    margin-top: -45px;
    transform: scale(0.4);
  }

  .promo_message_first p {
    width: 500px;
    display: block;
  }


  .avatar_image_list_item_deo {
    margin-bottom: 30px;
    position: absolute;
    transform: scale(0.8);
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 25px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 30px;
    column-gap: 50px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(1, 1fr);
  }




  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .tabber_buttons_list { 
    transform: scale(0.45);
  }


  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 220px;
    height: 150px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 85vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}




@media (min-width: 300px) and (max-width: 400px) and (orientation: portrait) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }



  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.6);
    gap: 20px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name {
    font-size: 30px;
  }

  .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -8vh;
    margin-top: -0vh;
  }
  
  .video_background_tag {
    box-shadow: white 0px 0px 7px;
    border-radius: 0.45rem;
    transform: scale(0.4);
    align-items: center;
    justify-content: center;
    display: flex;
    width: max-content;
    transition: 0.5s;
  }
  
  .video_background_tag:hover {
  box-shadow: white 0px 0px 10px;
  transform: scale(0.45);
  transition: 0.5s;
  } 

  .promo_message_first {
    margin-top: -45px;
    transform: scale(0.4);
  }

  .promo_message_first p {
    width: 500px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-top: -150px;
    margin-bottom: 0;
    position: absolute;
    transform: scale(0.8);
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 25px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 30px;
    column-gap: 50px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(1, 1fr);
  }




  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }


  .tabber_buttons_list { 
    transform: scale(0.6);
  }


  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 300px;
    height: 150px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 85vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}



@media (min-width: 300px) and (max-width: 400px) and (orientation: landscape) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }


  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.7);
    gap: 25px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }



  .name {
    font-size: 30px;
  }

  

  .promo_message_first {
    margin-top: -45px;
    transform: scale(0.4);
  }

  .promo_message_first p {
    width: 500px;
    display: block;
  }


  .avatar_image_list_item_deo {
    margin-bottom: 50px;
    position: absolute;
    transform: scale(0.8);

  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 25px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 10px;
    column-gap: 60px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, 1fr);
  }




  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .tabber_buttons_list { 
    transform: scale(0.6);
  }

  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 150px;
    height: 160px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }


  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}




@media (min-width: 400px) and (max-width: 500px) and (orientation: portrait) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }


  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.5);
    gap: 45px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }

  .name {
    font-size: 30px;
  }

    .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -70px;
    margin-top: -0vh;
  }
  
  .video_background_tag {
    box-shadow: white 0px 0px 7px;
    border-radius: 0.45rem;
    transform: scale(0.4);
    align-items: center;
    justify-content: center;
    display: flex;
    width: max-content;
    transition: 0.5s;
  }
  
  .video_background_tag:hover {
  box-shadow: white 0px 0px 10px;
  transform: scale(0.45);
  transition: 0.5s;
  } 

  .promo_message_first {
    margin-top: -45px;
    transform: scale(0.4);
  }

  .promo_message_first p {
    width: 500px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 150px;
    position: absolute;
    transform: scale(0.9);

  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 25px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 30px;
    column-gap: 50px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(1, 1fr);
  }




  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .tabber_buttons_list { 
    transform: scale(0.75);
  }


  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 370px;
    height: 160px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 85vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}


@media (min-width: 400px) and (max-width: 500px) and (orientation: landscape) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.5);
    gap: 45px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }

  .name {
    font-size: 30px;
  }

  
  .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -70px;
    margin-top: -10px;
  }
  
  .video_background_tag {
    box-shadow: white 0px 0px 7px;
    border-radius: 0.45rem;
    transform: scale(0.4);
    align-items: center;
    justify-content: center;
    display: flex;
    width: max-content;
    transition: 0.5s;
  }
  
  .video_background_tag:hover {
  box-shadow: white 0px 0px 10px;
  transform: scale(0.45);
  transition: 0.5s;
  } 


  .promo_message_first {
    margin-top: -45px;
    transform: scale(0.4);
  }

  .promo_message_first p {
    width: 500px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 150px;
    position: absolute;
    transform: scale(0.8);
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 25px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 30px;
    column-gap: 50px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(1, 1fr);
  }




  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .tabber_buttons_list { 
    transform: scale(0.75);
  }


  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 370px;
    height: 160px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 85vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}





@media (min-width: 500px) and (max-width: 600px) and (orientation: portrait){

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.7);
    gap: 45px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    transform: scale(0.7);
  }



  .name {
    font-size: 30px;
  }
  .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -10vh;
    margin-top: -0vh;
  }
  
  .video_background_tag {
    box-shadow: white 0px 0px 7px;
    border-radius: 0.45rem;
    transform: scale(0.4);
    align-items: center;
    justify-content: center;
    display: flex;
    width: max-content;
    transition: 0.5s;
  }
  
  .video_background_tag:hover {
  box-shadow: white 0px 0px 10px;
  transform: scale(0.45);
  transition: 0.5s;
  } 
  .promo_message_first {
    margin-top: -35px;
    transform: scale(0.5);
  }

  .promo_message_first p {
    width: 900px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 120px;
    position: absolute;
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 25px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 10px;
    column-gap: 60px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, 1fr);
  }




  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .tabber_buttons_list { 
    transform: scale(0.95);
  }

  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 240px;
    height: 160px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 240px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}




@media (min-width: 500px) and (max-width: 600px) and (orientation: landscape){

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.7);
    gap: 45px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }



  .name {
    font-size: 30px;
  }

    .promo_message_first {
    margin-top: -35px;
    transform: scale(0.5);
  }

  .promo_message_first p {
    width: 900px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-top: -150px;
    position: absolute;
    transform: scale(0.8);
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 25px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 10px;
    column-gap: 60px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, 1fr);
  }



  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .tabber_buttons_list { 
    transform: scale(0.95);
  }


  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 240px;
    height: 160px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }


  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 240px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}



@media (min-width: 600px) and (max-width: 700px) and (orientation: portrait) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.7);
    gap: 50px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }



  .name {
    font-size: 30px;
  }

  .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -10vh;
    margin-top: -0vh;
  }
  
  .video_background_tag {
    box-shadow: white 0px 0px 7px;
    border-radius: 0.45rem;
    transform: scale(0.4);
    align-items: center;
    justify-content: center;
    display: flex;
    width: max-content;
    transition: 0.5s;
  }
  
  .video_background_tag:hover {
  box-shadow: white 0px 0px 10px;
  transform: scale(0.45);
  transition: 0.5s;
  } 

  .promo_message_first {
    margin-top: -20px;
    transform: scale(0.5);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 150px;
    position: absolute;
    transform: scale(0.9);
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 10px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 10px;
    column-gap: 60px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, 1fr);
  }




  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }


  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 240px;
    height: 160px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }
  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 240px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}


@media (min-width: 600px) and (max-width: 700px) and (orientation: landscape) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.7);
    gap: 50px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }
  .name {
    font-size: 30px;
  }

  .promo_message_first {
    margin-top: -20px;
    transform: scale(0.5);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 150px;
    position: absolute;
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 10px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 10px;
    column-gap: 60px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, 1fr);
  }




  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 240px;
    height: 160px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }


  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 240px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}



@media (min-width: 700px) and (max-width: 800px) and (orientation: portrait){

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.7);
    gap: 50px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }

  .name {
    font-size: 30px;
  }

  .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -0vh;
    margin-top: -0vh;
  }
  
  .video_background_tag {
    box-shadow: white 0px 0px 7px;
    border-radius: 0.45rem;
    transform: scale(0.4);
    align-items: center;
    justify-content: center;
    display: flex;
    width: max-content;
    transition: 0.5s;
  }
  
  .video_background_tag:hover {
  box-shadow: white 0px 0px 10px;
  transform: scale(0.45);
  transition: 0.5s;
  } 

  .promo_message_first {
    margin-top: -5px;
    transform: scale(0.6);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 150px;
    position: absolute;
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 0px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 10px;
    column-gap: 60px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, 1fr);
  }


  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }


  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 220px;
    height: 160px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 210px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}



@media (min-width: 700px) and (max-width: 800px) and (orientation: landscape){

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .name_and_emails_wrapper {
  }

  .credentials {
    transform: scale(0.7);
    gap: 50px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }

  .name {
    font-size: 30px;
  }

  .promo_message_first {
    margin-top: -5px;
    transform: scale(0.6);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 150px;
    position: absolute;
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: column;
    margin-top: 0px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }

  .top_main_header_and_paragraphs {
    display: flex;
    flex-direction: column;
  }

  .top_main_paragraphs {
    width: 90vw;
    display: grid;
    row-gap: 10px;
    column-gap: 60px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, 1fr);
  }



  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    text-align: center;
    font-size: 7px;
    font-weight: 600;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 9px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 220px;
    height: 160px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }



  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 210px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 170px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {
    display: flex;
  }

  .sites_list li {
    padding: 0;
  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}




@media (min-width: 800px) and (max-width: 900px) and (orientation: portrait){

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 0;
    margin-bottom: 0;
  }
  
  .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -10vh;
    margin-top: -0vh;
  }
  
  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }

  .promo_message_first {
    margin-left: -100px;
    margin-top: -150px;
    transform: scale(0.6);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }




  .name_and_emails_wrapper {
  }

  .avatar_image_list_item_deo {
    margin-top: 0px;
    margin-bottom: 70px;
    transform: scale(0.9);
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: row;
    margin-top: 10px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }



  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }


  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 240px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }


  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    justify-content: center;
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}


@media (min-width: 800px) and (max-width: 900px) and (orientation: landscape){

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 0;
    margin-bottom: 0;
  }

  
  .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -10vh;
    margin-top: -0vh;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .promo_message_first {
    margin-left: -100px;
    margin-top: -150px;
    transform: scale(0.6);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }





  .name_and_emails_wrapper {
  }

  .avatar_image_list_item_deo {
    margin-top: -150px;
    margin-bottom: 0px;
    position: absolute;
    transform: scale(0.9);
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: row;
    margin-top: 10px;
  }

  .avatar_image {
    display: none;
  }

  .avatar_image_list_item_paragraph {
    display: none;
  }



  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }


  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }

  .bio_item {
    display: none;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 240px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }


  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    justify-content: center;
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }
}


@media (min-width: 900px) and (max-width: 1000px) and (orientation: portrait) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 0;
    margin-bottom: 0;
  }

  .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -10vh;
    margin-top: -0vh;
  }
  
  .video_background_tag {
    box-shadow: white 0px 0px 7px;
    border-radius: 0.45rem;
    transform: scale(0.4);
    align-items: center;
    justify-content: center;
    display: flex;
    width: max-content;
    transition: 0.5s;
  }
  
  .video_background_tag:hover {
  box-shadow: white 0px 0px 10px;
  transform: scale(0.45);
  transition: 0.5s;
  } 

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }

  .name_and_emails_wrapper {
  }

    .promo_message_first {
    margin-left: -50px;
    margin-top: -150px;
    transform: scale(0.6);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 150px;
    position: absolute;
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: row;
    margin-top: 25px;
  }



  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    animation: backgroundCycle 6s infinite;
  }


  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }



  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 280px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 290px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}




@media (min-width: 900px) and (max-width: 1000px) and (orientation: landscape) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 0;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }

  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: -50px;
    margin-top: -150px;
    transform: scale(0.6);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 150px;
    position: absolute;
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: row;
    margin-top: 25px;
  }



  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    animation: backgroundCycle 6s infinite;
  }


  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }



  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 280px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }


  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 290px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}







@media (min-width: 1000px) and (max-width: 1100px) and (orientation: portrait) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 0;
    margin-bottom: 0;
  }
  .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -10vh;
    margin-top: -0vh;
  }
  
  .video_background_tag {
    box-shadow: white 0px 0px 7px;
    border-radius: 0.45rem;
    transform: scale(0.4);
    align-items: center;
    justify-content: center;
    display: flex;
    width: max-content;
    transition: 0.5s;
  }
  
  .video_background_tag:hover {
  box-shadow: white 0px 0px 10px;
  transform: scale(0.45);
  transition: 0.5s;
  } 

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: -25px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: row;
    margin-top: 25px;
  }



  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }


  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 12px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 8px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }

  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }


  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}





@media (min-width: 1000px) and (max-width: 1100px) and (orientation: landscape) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 0;
    margin-bottom: 0;
  }


  .top_video_background{ 
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-bottom: -10vh;
    margin-top: -0vh;
  }
  
  .video_background_tag {
    box-shadow: white 0px 0px 7px;
    border-radius: 0.45rem;
    transform: scale(0.4);
    align-items: center;
    justify-content: center;
    display: flex;
    width: max-content;
    transition: 0.5s;
  }
  
  .video_background_tag:hover {
  box-shadow: white 0px 0px 10px;
  transform: scale(0.45);
  transition: 0.5s;
  } 

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: -10px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-right: 0;
    flex-direction: row;
    margin-top: 25px;
  }



  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }


  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 12px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 8px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}



@media (min-width: 1100px) and (max-width: 1200px) and (orientation: portrait) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 0;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: 50px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }


  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }

  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .rectangle_image {
    width: 320px;
    height: 170px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }


  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}



@media (min-width: 1100px) and (max-width: 1200px) and (orientation: landscape) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 0;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: 50px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }


  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }


  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }

  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .rectangle_image {
    width: 320px;
    height: 170px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}




@media (min-width: 1200px) and (max-width: 1300px) and (orientation: portrait) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.6);
    gap: 0;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: 75px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }


  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-left: 50px;
    margin-bottom: 10px;
    margin-top: 10px;
  }


  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }


  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }

  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .rectangle_image {
    width: 270px;
    height: 170px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}




@media (min-width: 1200px) and (max-width: 1300px) and (orientation: landscape) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.6);
    gap: 0;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: 75px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1000px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-left: 50px;
    margin-bottom: 10px;
    margin-top: 10px;
  }


  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }


  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }


  .offered_item {
    flex-direction: column;
    gap: 5px;
  }

  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }

  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .rectangle_image {
    width: 270px;
    height: 170px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}




@media (min-width: 1300px) and (max-width: 1400px) and (orientation: portrait){

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 0;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: -20px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1400px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-bottom: 10px;
    margin-top: 10px;
  }


  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }


  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }

  .offered_item {
    flex-direction: column;
    gap: 5px;
  }

  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }


  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: max-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    flex-direction: column;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}



@media (min-width: 1300px) and (max-width: 1400px) and (orientation: landscape){

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 0;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: -20px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1400px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-bottom: 10px;
    margin-top: 10px;
  }


  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }


  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }

  .offered_item {
    flex-direction: column;
    gap: 5px;
  }

  .tabber_wrapper {
    width: 95vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
  }


  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .rectangle_image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: max-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    flex-direction: column;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}




@media (min-width: 1400px) and (max-width: 1500px) and (orientation: portrait) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 20px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: 25px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1400px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-bottom: 10px;
    margin-top: 10px;
  }


  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }

  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }

  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 80vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
    font-weight: 600;
  }


  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .rectangle_image {
    width: 310px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    flex-direction: column;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}




@media (min-width: 1400px) and (max-width: 1500px) and (orientation: landscape) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 20px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: 25px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1400px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-bottom: 10px;
    margin-top: 10px;
  }


  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }

  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }

  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 80vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
    font-weight: 600;
  }


  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .rectangle_image {
    width: 310px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    flex-direction: column;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}



@media (min-width: 1500px) and (max-width: 1600px) and (orientation: portrait) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 20px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: 25px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1400px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-bottom: 10px;
    margin-top: 10px;
  }


  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }

  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }

  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 80vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
    font-weight: 600;
  }


  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .rectangle_image {
    width: 310px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    flex-direction: column;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}




@media (min-width: 1500px) and (max-width: 1600px) and (orientation: landscape) {

  .whole {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .parent_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .everything_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .credentials {
    width: 100vw;
    transform: scale(0.7);
    gap: 20px;
    margin-bottom: 0;
  }

  .name_and_emails_item {
    margin-top: 0vh;
    transform: scale(0.7);
  }


  .name_and_emails_wrapper {
  }

  .promo_message_first {
    margin-left: 25px;
    margin-top: -150px;
    transform: scale(0.7);
  }

  .promo_message_first p {
    width: 1400px;
    display: block;
  }

  .avatar_image_list_item_deo {
    margin-bottom: 70px;
    position: absolute;
  }

  .avatar_image_items {
    margin-bottom: 10px;
    margin-top: 10px;
  }


  .avatar_image_list_item_paragraph {
    text-align: center;
    white-space: nowrap;
    width: 60px;
    font-size: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-top: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 45px;
    transition: background-color 0.4s, color 0.4s;
    /* Transition for background-color and color */
    animation: backgroundCycle 6s infinite;
    /* Animation to cycle through colors */
  }

  .essentials_list2 {
    width: 100vw;
  }

  .essentials_list,
  .essentials_list2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-bottom: 0;
  }

  .essentials_list h1,
  .essentials_list2 h1 {
    font-size: 15px;
    font-weight: 600;
  }

  .essentials_list p,
  .essentials_list2 p {
    width: max-content;
    margin-top: 5px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

  }

  .offered_item {
    flex-direction: column;
    gap: 5px;
  }


  .tabber_wrapper {
    width: 80vw;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
    font-weight: 600;
  }


  .thank_you {
    transform: scale(0.7);
  }

  .table_item {
    white-space: nowrap;
  }


  .rectangle_images_wrapper {
    margin-top: 30px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .rectangle_image {
    width: 310px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.859) 0px 0px 6px;
  }


  .promo_message1,
  .promo_message2 {
    font-size: 10px;
    font-weight: 600;
  }

  .promo_and_stuff_wrapper {
    flex-direction: column;
    gap: 0;
  }

  .and_more_stuff {
    display: flex;
    align-items: center;
    justify-content: center;
  }



  .offered_item {
    transform: scale(0.6);
    flex-direction: column;
    gap: 0px;
  }

  .compare {
    margin-top: 50px;
    transform: scale(0.7);
  }

  .more_tag {
    margin-top: -5px;
  }

  .pricing_tab_groups_wrapper {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .frame_wrapper {
    padding: 20px;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .frame_405 {
    width: max-content;
    display: grid;
    flex-direction: column;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }


  .label {
    width: 100px;
  }

  .frame_402 {
    width: max-content;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    gap: 0px;
  }

  .your_session_has_tim3_regular,
  .your_session_has_tim3_promo {
    width: 250px;
  }

  .sites_list {
    position: relative;
  }

  .list_component {

    display: flex;
  }

  .sites_list li {
    padding: 0;

  }

  .list_title {
    font-size: 9px;
    color: orange;
  }

  .list_description {
    font-size: 8px;
    white-space: nowrap;
  }

}
