<!-- PROJECT LOGO -->
<h1 align="center"> KRYPTON </h1>

An online money management system with the aim of making individuals more aware about their expenditures and also to show recent financial news with a stock of choice to overview on the glance. These are elaborated in the upcoming sections. <br>
Aimed to cater young individuals the mission is to make financial literacy, an important part in everyone's life a common place so that they are financially aware.

<br/>

<p align="center">
    <img src="src/Assets/img/kryptonlogo-removebg.png" width="60%">
  <p align="center">
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/Narottam04/Krypton/issues">Report Bug</a>
    ·
    <a href="https://github.com/Narottam04/Krypton/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#inspiration">Inspiration</a></li>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#technologies-used">Technologies used</a></li>
    <li><a href="#how-we-built-it">How we built it</a></li>
    <li><a href="#challenges-we-ran-into">Challenges we ran into</a></li>
    <!-- <li><a href="#accomplishments-that-we're-proud-of">Accomplishments</a></li> -->
    <li><a href="#whats-next-for-fundchain">What's next?</a></li>
    <li><a href="#guide-to-setup-the-project-locally">Guide to setup the project locally</a></li>
    <li><a href="#guide-to-try-out-our-dapp">Guide to try out our DApp</a></li>
    <li><a href="#acknowledgements-and-references">Acknowledgements and References</a></li>
  </ol>
</details>



## Inspiration
Obtaining financial literacy is one of the most important things an individual can do to ensure prolonged financial stability. 
Strong financial knowledge and decision-making skills help people weigh options and make informed choices for their financial situations, such as deciding how and when to save and spend, comparing costs before a big purchase, and planning for retirement or other long-term savings. 

This is where Krypton comes in, to build a habit for being accountable for the income and expenses and 

While investing in stock markets has become more popular in recent times, overall penetration remains low — only 2.78 crore Indians invest in the stock markets, which is around 2% of the country’s population. In comparison, over 50% of Americans own stocks. This is a mind set that can be changes if people are exposed to topics like investments and stocks which is a great financial practice. 

Krypton provides a watch list for stocks and also provides relevent financial news and insights so that they have a mind set of using money wisely.

## About the project

<p align="center">
  <img src="assets/Final.jpg">
<p align="center">
    
Krypton is an online money management system with the aim of making individuals aware about their expediture and make them financially sound by providing them with stock watchlists and news that is relevent to investing and financial advices. The following are the key-words used in our project:

### 
Each organization has an upvote feature for other users to show support and a downvote feature to report an organization as spam. A little amount of gas fee will used for using this feature.
      
### Conditional Fund
There are two ways in which one can donate to these organizations. One way is to directly send the amount to the organization. But in this case, there is a slight risk factor as the organization may turn out to be a fake one. So to take fake organizations out of the equation the user may opt for conditional funding. In this type of funding, the number of downvotes plays a deciding role for an organization to be fake or genuine. Since marking an organization fake just by a fixed number of downvotes seems unfair, we let the donor fix this number. So the donor is asked the threshold number of downvotes at the time of donating. If the number of downvotes for the organization crosses the downvotes set by the donor, the donor may then choose to reclaim his money back. But the donor must be aware that he/she only gets 80% of the amount donated. The remaining 20% is redistributed to the field workers who spent their money to upvote or downvote the organization. 
      
### Claim-Reclaim
When a user donates using the conditional fund feature, the amount is stored in the smart contract until the deadline of the organization is reached. If in between the number of downvotes has crossed the threshold set by the donor, he/she may reclaim their amount(80%). Else after the deadline is reached the organization will claim the amount which the donor has donated.   

<p align="center">
<img src="assets/claim.png">

<p align="center">
<img src="assets/reclaim.png">

### XP mechanism
There are two variants of XP for a user. 
      <ui>
          <li>XP as a Funder</li>
          <li>XP as a Beneficiary</li>
      </ui>
#### XP as a Funder
This is a proportional indicator of the amount donated by the user to different organizations. To be precise, a donor gains this type of XP which is equal to 10 times the amount he/she donates through direct funding and 5 times if he/she donates with the help of conditional funding.

<p align="center">
<img src="assets/xp_funder.png">

#### XP as a Beneficiary
This represents the reputation of the organization from the number of upvotes/downvotes and the number of goals reached through this organization. To be precise, for each upvote or downvote, the organization gains or loses 5 XP (of this type) respectively. Also, there is one more way to gain XP for an organization, that is through accomplishing the goals set by themselves. If an organization reaches its goal before the deadline, the organization gains one-tenth of the target amount.

<p align="center">
<img src="assets/xp_beneficiary.png">

### Number of people upvoted or downvoted is not visible
This ensures that the decision taken by the validator solely depends upon only himself and his verification work.


A list of all the references and resources we used to achieve (partially) our goal are listed in the acknowledgements.
## Technologies used
    
<p align="center">
    <a href="https://reactjs.org/><img src="assets/react.png" width="40%" height="40%" </a>
       <p align="center" float="left">
<a href="https://www.netlify.com/"><img src="assets/angular-bg.png"  width="30%" height="30%"></a>
<a href="https://firebase.google.com/"><img src="assets/angular-bg.png"  width="30%" height="30%"></a>
</p>

    
React.js as the base library along with tailwind css<br/>
Firebase for the authentication of the users so that every users infformation can be saved<br/>
Netlify to host the react app <br/>


## How we built it

First we came up with a problem statement, then went in search of best blockchain technology that can be used. 
Then we followed with building a basic prototype of all the features that can be included and also specifically brainstormed for an hour to find a suitable verification algorithm. 

Then went with designing UI accordingly (with help of few resources mentioned in the last section). 


## Challenges we ran into

The frontend developers are only familiar with angular. So it took a while to build frontend.

This is our first time to integrate SAWO labs with a web application.

We had a very less time to finish the project.

We intially thought of making a flutter app but were not able to proceed due to lack of resources.

Our entire team is quite new to blockchain technology and this is our first attempt to make a DApp using blockchain technology. So choosing an appropriate blockchain for implementing our idea was very challenging. After brainstorming for some time, we found Tezos to be a suitable blockchain as it is a best suit for public distributed ledger applications as it has a unique on-chain governance mechanism.

<!-- ## Accomplishments that we're proud of

The 'Conditional Funding' is a unique feature of its own kind.

We designed a complete consensus to have some kind of verification mechanism to avoid the misleading fund raisings. -->


## What's next for Fundchain

Due to the time constraint of the hackathon, many things were accomplished only till half way. These include :

- Unique Digital Badges : We are planning to build a feature where after reaching a certain XP, we assign a unique digital badge as an NFT (using FA2) to the funder profile, representing his contributions. Also updating his/her avatar.
- Field Workers : Currently the system doesn't contain any distinction between a normal funder and field worker.
- CRON jobs : Introducing CRON jobs to automate the claims and re-claims (which are currently being triggered manually by a user using 'claim' and 'reclaim' options) based on either “deadline” or “number of dislikes” for a particular fund raising post.


## Guide to setup the project locally

Make sure you switch to node@12.22.1

To install node@12.22.1
   ```sh
    nvm install 12.22.1

    nvm use 12.22.1
   ```
Clone the repo
   ```sh
   git clone https://github.com/GSri30/Fundchain
   ```
Install NPM packages
   ```sh
   npm install
   ```
Run the local server inside the client folder
   ```sh
   ng serve --open
   ```


## Guide to try out our DApp

To actually try out our DApp, there are certain requirements to set up, which include : 
  * Install Temple wallet in your browser.
  * Use a standard Tezos faucet to get Testnet ꜩ (required to pay gas, which is required to register an email) [NOTE that this is only a one time spend for a given email]
    * Network : Flourence Testnet 
    * RPC :  https://florencenet.smartpy.io/
    * Lambda View : KT1BbTmNHmJp2NnQyw5qsAExEYmYuUpR2HdX
  * Enjoy!


## Acknowledgements and References

* [Infura](https://infura.io/) standard IPFS API for getting access to the IPFS networks.

* <a href="https://coinlayer.com/">Coin Layer API </a> to get the live exchange rates of XTZ.

* [ngx-admin](https://github.com/akveo/ngx-admin) for base angular components.

* <a href='https://www.freepik.com/vectors/logo'>Logo vector created by pch.vector - www.freepik.com</a>


* <a href="https://github.com/othneildrew/Best-README-Template"> README template </a>
