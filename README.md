# twitter-clone

Features:
1. User log in and registration using express session middleware 
2. Users can post tweets. 
3. Other users can see the tweets posted by other users. 
4. The ability to like and retweet.
5. Follow system. Feed shows tweets from the users that one follows. 
6. Ability to pin posts 
7. A Direct Chat and Group chat system with real time updates using socket.io  

Technologies used:
1. Frontend is uses simple CSS and Vanilla JS, no frameworks. 
2. Pug has been used as a templating engine. 
3. Express handles all the routing to serve the static pug templates. 
4. APIs responsible for chats, posts retrievel and related operations, and user profile related operations all implemented using Express. 
5. The Database for the entire system is MongoDB hosted on Atlas cloud. 
6. The realtime chat uses socket.io for realtime updates of the chat and showing typing indicators. 
