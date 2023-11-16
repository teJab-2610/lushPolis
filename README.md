# [LushPolis](https://github.com/teJab-2610/lushPolis/tree/master)

LushPolis is a one-stop platform for all gardeners, from hobbyists to professionals, the website has something for everyone. In a world where humans are getting more and more detached from nature, we hope this will motivate more people to start gardening.

The project was born out of the team’s dedication to propose a solution to the SDGs' climate action. We wanted to make a web app which would enable users to connect more with nature in a positive manner.

The team consists of Teja Battula, Chetan Moturi, Vidhyabhushan Mallela, ASPVM Aditya and VSKSS Narayana Rao.

This repo is the project work for the Software Engineering Course - CS302L.

## How to Install
The project is made using the MERN stack, before installing please make sure that you install the latest version of Node.js from [[here]](https://nodejs.org/en/download).

To check the node version
~~~shell
node --version
~~~

To download the repo paste this command in the terminal,
~~~shell
git clone https://github.com/teJab-2610/lushPolis.git
~~~

Now, run the following commands to start the backend server,
~~~bash
cd ./server
npm install
npm run dev
~~~

Next, run this in a separate terminal to start the frontend,
~~~bash
cd ../client
npm install --force
npm start
~~~

Nothing specific is required, A web browser with an internet connection is enough.
## Use cases diagram

![Use Cases Diagram_page-0001](https://i.imgur.com/p9sXvKU.jpg)


## Use cases

### Release 1

| SNo.   | Use Case Name | Description | 
| ------------ | ------------- | ----------- |
| 1.       | User Login/Register| Basic Account creation|
| 2.       | Blogs | Users can read other blogs, post their views, save the post, like the post, etc|
| 3.       | Posting/Editing Blogs    | Allow users to make their own blog posts, edit them and delete them|
| 4. | Interest Groups | Allow users to form groups for people with similar interests|
| 5. | Plant Search and ID using APIs | Utilizing 3rd-party APIs to implement Plant Identification using images and a plant text search feature |
| 6. | Group Chats | Users can form group chats in which they can talk to other users |
| 7. | Plant Diary | A basic plant diary in which users can log their plants and track them | 

## Design Decisions and Contributions

Please look at the "LushPolis Report" pdf for the details. 
