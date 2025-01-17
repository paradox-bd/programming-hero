import React from 'react';

const Footer = () => {
    return (
        <div>
            
            <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typing Monster: Blog</title>
    <!-- <link rel="stylesheet" href="styles.css" /> -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://cdn.jsdelivr.net/npm/daisyui@2.27.0/dist/full.css" rel="stylesheet" type="text/css" />
   <!-- theme changer  -->
   <html data-theme="dark"></html>
   <link rel="stylesheet" href="style.css">
   <script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"></script>

    <link
      href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;400;500&display=swap"
      rel="stylesheet"
    />
    <style>
   <---------css-------->


:root {
  --my-color: #fff;
  /* or any other variables/style */
}
[data-theme='dark'] {
  --my-color: #000;
}
[data-theme='retro'] {
  --my-color: rgba(247, 249, 223, 0.998);
}

[data-theme='cyberpunk'] {
  --my-color: #cadb12;
}
[data-theme='coffee'] {
  --my-color: #2d2222;
}
[data-theme='halloween'] {
  --my-color: #0f0e0ed1;
}
[data-theme='forest'] {
  --my-color: #1c1515;
}
[data-theme='valentine'] {
  --my-color: #deb9b9;
}
[data-theme='aqua'] {
  --my-color: #236dc1;
}


/* daisyUI  theme */


html {
  background-color: var(--my-color);
}

.theme{
  /* float: end; */
  background-color: var(--my-color);
  /* color: var(--my-color); */
  border: none;
  border-radius: 50%;
  /* box-shadow: 12px 12px 24px #3ABFF8; */
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: outset;
  position: absolute;
  /* top: 0; */
  right: 0;
  padding: 10px;
  margin: 10px;

}

.theme opiton{
  background-color: var(--my-color);
  color: var(--my-color);
}


        body {
  background-image: url("./bg.png");
  /* z-index: -1; */
  background-size: cover;
  background-position: left top;
  font-family: "Zilla Slab", serif;
}

.sinlge-faq {

    background-color: grey;
    background: rgb(255, 255, 255);
  background: linear-gradient(
    92.49deg,
    rgba(255, 255, 255, 0.1) 0.18%,
    rgba(255, 255, 255, 0.05) 99.85%
  );
  backdrop-filter: blur(5px);
}

    </style>
  </head>
  <body>
    <nav>
        <div class="navbar bg-base-100">
          <div class="flex-1">
            <a href="https://paradox-bd.com" class="btn btn-ghost normal-case text-xl">ParadoxBD</a>
          </div>
          <div class="flex-none gap-2">
            <div class="form-control hidden md:block">
              <input type="text" placeholder="Search" class="input input-bordered" />
            </div>
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a href="index.html" class="justify-between">
                    Typing Monster
                    
                  </a>
                </li>
                <li><a href="blog.html">Blog <span class="badge">New</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <!-- theme changer menu -->
    <select class="theme" data-choose-theme>
      <option value="dark">Dark</option>
      <option value="cyberpunk">Cyberpunk</option>
      <option value="retro">Retro</option>
      <option value="cupcake">Cupcake</option>
      <option value="light">Light</option>
      <option value="fantasy">Fantasy</option>
      <option value="wireframe">Wireframe</option>
      <option value="coffee">Coffee</option>
      <option value="valentine">Valentine</option>
      <option value="aqua">Aqua</option>
      <option value="forest">Foerest</option>
      <option value="halloween">Halloween</option>
      <option value="lofi">Lofi</option>
      <option value="lemonade">Lemonade</option>
    </select>
    <br>
    <h1 class="title flex justify-center p-9"><img src="./logo.png" /></h1>

    


    <section
   x-data="
   {
   openFaq1: false, 
   openFaq2: false, 
   openFaq3: false, 
   openFaq4: false, 
   openFaq5: false, 
   openFaq6: false
   }
   "
   class="container mx-auto px-4"
   
   >
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[520px]">
               <span class="font-semibold text-lg text-primary mb-2 block">
               BLOG
               </span>
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  Have a Question? We have an answer!
                 
               </h2>
               <p class="text-gray-300 text-body-color">
                Here are some of our FAQs. If you have any other questions you'd like answered please feel free to contact us. 
               </p>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap -mx-2 p-2">
         <div class="w-full lg:w-1/2 px-4">
            
            <div
               class="
               single-faq
               bg-zinc-800
               w-full
               
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
               >
               <button
                  class="faq-btn btn-green-500 flex w-full text-left"
                  @click="openFaq2 = !openFaq2"
                  >
                  <div
                     class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-outline-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                     >
                     <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        class="fill-current icon"
                        >
                        <path
                           d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                           fill="#3056D3"
                           stroke="#3056D3"
                           />
                     </svg>
                  </div>
                  <div class="w-full">
                     <h4 class="text-lg font-semibold text-gray-100">
                        What is the difference between local stoarage vs. global storage?
                     </h4>
                  </div>
               </button>
               <div x-show="openFaq2" class="faq-content pl-[62px]">
                  <p class="text-gray-300 text-body-color leading-relaxed py-3">
                  Difference between local stoarage vs. global storage: there is no difference between the window.localStorage and localStorage the Window is the global object the window is the default prefix but the correct one is window.localStorage because the localStorage attribute is part of window object. </p>
               </div>
            </div>
            <div
               class="
               single-faq
               bg-zinc-800
               w-full
               
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
               >
               <button
                  class="faq-btn btn-green-500 flex w-full text-left"
                  @click="openFaq3 = !openFaq3"
                  >
                  <div
                     class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-outline-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                     >
                     <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        class="fill-current icon"
                        >
                        <path
                           d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                           fill="#3056D3"
                           stroke="#3056D3"
                           />
                     </svg>
                  </div>
                  <div class="w-full">
                     <h4 class="text-lg font-semibold text-gray-100">
                        What are the differences between global scope vs. block scope?
                     </h4>
                  </div>
               </button>
               <div x-show="openFaq3" class="faq-content pl-[62px]">
                  <p class="text-gray-300 text-body-color leading-relaxed py-3">
                  Differences  between global scope vs. block scope: The Global scope

                  A variable exists inside or outside a block. If a variable is declared outside all functions or curly braces ({}), it exists in the global scope. The global variables can be accessed by any line of code in the program, including inside blocks.
                  
                  A Global scope example
                  
                  The Local scope
                  
                  In contrast to global variables, locally scoped ones are only visible within the function they are declared. Each function written in JavaScript creates a new local scope and every variable declared in this scope is a local variable. That means that variables with the same name can be used in different functions. However, any effort to reference a local variable outside its scope will result in a Reference Error:
                  
                   </p>
               </div>
            </div>
         </div>
         <div class="w-full lg:w-1/2 px-4">
            <div
               class="
               single-faq
               bg-zinc-800
               w-full
               
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
               >
               <button
                  class="faq-btn btn-green-500 flex w-full text-left"
                  @click="openFaq4 = !openFaq4"
                  >
                  <div
                     class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-outline-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                     >
                     <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        class="fill-current icon"
                        >
                        <path
                           d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                           fill="#3056D3"
                           stroke="#3056D3"
                           />
                     </svg>
                  </div>
                  <div class="w-full">
                     <h4 class="text-lg font-semibold text-gray-100">
                        Describe js event loop working method.
                     </h4>
                  </div>
               </button>
               <div x-show="openFaq4" class="faq-content pl-[62px]">
                  <p class="text-gray-300 text-body-color leading-relaxed py-3">
                     Working of the Event loop: When Node.js starts, it initializes the event loop, processes the provided input script which may make async API calls, schedule timers, then begins processing the event loop. In the previous example, the initial input script consisted of console.log () statements and a setTimeout () function which schedules a timer.</p>
               </div>
            </div>
            <div
               class="
               single-faq
               bg-zinc-800
               w-full
               
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
               >
               <button
                  class="faq-btn btn-green-500 flex w-full text-left"
                  @click="openFaq5 = !openFaq5"
                  >
                  <div
                     class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-outline-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                     >
                     <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        class="fill-current icon"
                        >
                        <path
                           d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                           fill="#3056D3"
                           stroke="#3056D3"
                           />
                     </svg>
                  </div>
                  <div class="w-full">
                     <h4 class="text-lg font-semibold text-gray-100">
                     How many ways can you get undefined at JS?
                     </h4>
                  </div>
               </button>
               <div x-show="openFaq5" class="faq-content pl-[62px]">
                  <p class="text-gray-300 text-body-color leading-relaxed py-3">
                     The short answer is that JavaScript interpreter returns undefined when accessing a variable or object property that is not yet initialized. For example: On the other side, null represents a missing object reference. JavaScript doesn’t initialize variables or object properties with null.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="absolute bottom-0 right-0 z-[-1]">
      <svg
         width="1440"
         height="886"
         viewBox="0 0 1440 886"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         >
         <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
            />
         <defs>
            <linearGradient
               id="paint0_linear"
               x1="1308.65"
               y1="1142.58"
               x2="602.827"
               y2="-418.681"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" stop-opacity="0.36" />
               <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
               <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
         </defs>
      </svg>
   </div>
</section>
<!-- ====== FAQ Section End -->`





<br>
<div class="text-center">
 <script src="https://tryhackme.com/badge/1054563"></script>
</div>
<br>

<!-- Trusted by over 80+ companies  -->

<section class="hidden md:block">
 
   <h1 class="text-bolder text-4xl text-primary text-center">
     Trusted by over 80+ companies
   </h1>
   <br>
 
   <div class="slider flex bg-white flex-wrap justify-evenly">
         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="240" alt="" />
       
         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="240" alt="" />
       
         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="240" alt="" />
       
         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="240" alt="" />
       
         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="240" alt="" />
       
       
       
     </div>
   </div>
 
 </section>




<!-- </footer> -->

<footer class="footer p-10 bg-base-200 text-base-content flex justify-evenly flex-wrap mx-auto  ">
    <div>
      <span class="footer-title">Services</span> 
      <a class="link link-hover">Branding</a> 
      <a class="link link-hover">Design</a> 
      <a class="link link-hover">Marketing</a> 
      <a class="link link-hover">Advertisement</a>
    </div> 
    <div>
      <span class="footer-title">Company</span> 
      <a class="link link-hover">About us</a> 
      <a class="link link-hover">Contact</a> 
      <a class="link link-hover">Jobs</a> 
      <a class="link link-hover">Press kit</a>
    </div> 
    <div>
      <span class="footer-title">Legal</span> 
      <a class="link link-hover">Terms of use</a> 
      <a class="link link-hover">Privacy policy</a> 
      <a class="link link-hover">Cookie policy</a>
    </div> 
    <div>
      <span class="footer-title">Newsletter</span> 
      <div class="form-control w-80">
        <label class="label">
          <span class="label-text">Enter your email address</span>
        </label> 
        <div class="relative ">
          <input type="text" placeholder="admin@paradox-bd.com" class="input input-bordered w-full pr-16" /> 
          <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
        </div>
      </div>
    </div>
  </footer>



    <div data-tf-popover="B9mOgUOl" data-tf-custom-icon="https://images.typeform.com/images/wgWxpnu2tbfi" data-tf-button-color="gray" data-tf-button-text="Launch me" data-tf-iframe-props="title=Product Review Form Template (copy)" data-tf-medium="snippet" style="all:unset;"></div><script src="//embed.typeform.com/next/embed.js"></script>
    <!-- <script src="./history.js"></script>
    <script src="./script.js"></script> -->
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>

  </body>
</html>


        </div>
    );
};

export default Footer;