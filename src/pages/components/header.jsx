@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
/*font-family: 'Oswald', sans-serif;*/

@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap');


@import url('https://fonts.googleapis.com/css2?family=Cabin:ital@1&display=swap');
/*  font-family: 'Cabin', sans-serif;
*/

@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');


@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap');
/*  font-family: 'Teko', sans-serif;
*/

@import url('https://fonts.googleapis.com/css2?family=Skranji:wght@400;700&display=swap');



.favicon { 
  width: 10px;
  height: 5px;
}



.parent ul {
  list-style: none;
}

.parent {
  width: 100vw;
  z-index: 100;
  color: white;
  display: flex;
  overflow: hidden;
  position: absolute;
}

@keyframes textColorCycle_name {

  0%,
  100% {
    background-color: #101010;
  }

  33% {
    background-color: #fafafafb;
  }

  66% {
    background-color: #131313;
  }
}

.parent_wrapper {
  position: fixed;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
}

.parent_wrapper_margin {
  transition: 0.6s;
}

.logo__signature_and_button_parent {
  background: linear-gradient(to top, #0e0e0e, #1e1e1e, #202020, #323232);
  display: flex;
  width: 100vw;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 5px;
  padding-bottom: 5px;
}

.logo_and_signature {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  margin-top: 5px;
}

.logo_item {
  margin: 5px;
  margin-top: 0px;
  margin-left: 20px;
}

.header_logo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: white 0px 0px 7px;
  transition: 0.6s;
}

.header_logo:hover {
  transition: 0.6s;
  transform: scale(0.9);
  cursor: pointer;
  margin-top: 0;
  box-shadow: white 0px 0px 12px;
}

.signature_item {
  margin: 5px;
}

.header_signature {
  margin-left: 10vw;
  margin-top: 6px;
  transition: 0.5s;
  width: 100px;
  height: 30px;
}

.header_signature:hover {
  cursor: pointer;
  transition: 0.5s;
  transform: scale(1.1);
}

.hide {
  display: none;
}

.menu_bars_wrapper {
  gap: 1px;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
}

.menuitem { 
  cursor: pointer;
}

.first_menubar {
  gap: 10vw;
  width: 100vw;
  display: flex;
  font-size: 9px;
  font-family: 'Skranji', cursive;
  font-weight: 700;
  flex-direction: row;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  background-color: rgb(34, 34, 34);
  background: linear-gradient(to top, #111316, #11141a);
  padding: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: rgb(255, 255, 255);
  position: fixed;
  text-decoration: underline;
  transition: 0.8s;
}

.first_menubar p:hover {
  cursor: pointer;
  transition: 0.3s;
  color: rgb(0, 68, 93);
}

.first_menubar:hover {
  transition: 0.5s;
  color:#f0f0f0;
  background: linear-gradient(to top, #171717, #191919);
    box-shadow: rgb(255, 255, 255) 0px 0px 5px;
}

.second_menubar {
  gap: 12vw;
  width: 100vw;
  display: flex;
  font-size: 10px;
  font-family: 'Skranji', cursive;
  font-weight: 700;
  flex-direction: row;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  background-color: rgb(17, 17, 17);
  padding: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: rgb(212, 212, 212);
  color: rgb(246, 246, 246);
  border-width: 1px;
  box-shadow: rgb(255, 255, 255) 0px 0px 3px;
  transition: 0.5s;
}

.second_menubar:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(31, 31, 31);
  transition: 0.5s;
  box-shadow: rgb(255, 255, 255) 0px 0px 5px;
}

.second_menubar p {
  transition: 0.7s;
}

.second_menubar p:hover {
  cursor: pointer;
  color: rgb(250, 250, 250);
  transition: 0.4s;
  text-decoration: underline;
}

.buttons {
  margin-top: 10px;
  display: flex;
  margin-right: 2vw;
  font-size: 15px;
  font-family: 'Teko', sans-serif;
  flex-direction: row;
  margin-left: auto;
  font-weight: 600;
  color: rgb(255, 255, 255);
}

.login_logout_list { 
  display: flex;
  flex-direction: row;
}

.promo_message_first{
  position: absolute; 
  margin-top: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(194, 194, 194, 0.699);
  border-width: 1px;
  border-color: orange;
  width: 90vw;
  height: 250px;
  padding: 10px;
  font-weight: 400;
  font-size: 11px;
  text-align: center;
font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.promo_message_first h1{ 

  text-align: left;
  background-color: rgba(167, 114, 0, 0.762);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  border-radius: 0.45rem;
  color: rgb(245, 245, 245);
}

.close_button  {
  display: flex;
  flex-direction: row;
  position: absolute;
  align-items: center;
  gap: 5px;
  justify-content: center;
  margin-top: 200px;
  margin-left: 20px;
  background-color: black;
  border-radius: 0.15rem;
  box-shadow: white 0px 0px 4px;
  padding: 10px;
  transition: 0.5s;
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

.register_button {
  color: rgb(40, 40, 40);
  white-space: nowrap;
  margin-left: 10px;
  margin-bottom: 5px;
  border-width: 0.5px;
  border-color: white;
  width: max-content;
  padding: 3px;
  padding-left: 20px;
  padding-right: 20px;
  background: linear-gradient(to top, #ededed, #efefef, #f7f7f7f1);
  border-radius: 0.99rem;
  transition: 0.6s;
}

.register_button:hover {
  color: rgb(224, 224, 224);
  background: linear-gradient(to top, #0a0a0a, #0e0e0e, #232323f1);
  transition: 0.6s;
  box-shadow: white 0px 0px 5px;
}

.login_button {
  color: rgb(40, 40, 40);
  white-space: nowrap;
  margin-left: 10px;
  margin-bottom: 5px;
  border-width: 0.5px;
  border-color: rgb(255, 174, 0);
  width: max-content;
  padding: 3px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
  background: linear-gradient(to top, #ededed, #efefef, #f7f7f7f1);
  border-radius: 0.25rem;
  transition: 0.6s;
}

.login_button:hover {
  color: rgb(227, 227, 227);
  background: linear-gradient(to top, #0a0a0a, #0e0e0e, #232323f1);
  transition: 0.6s;
  box-shadow: white 0px 0px 5px;
}

