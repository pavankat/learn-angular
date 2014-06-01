These notes should help those having trouble getting the Contacts app working (the one that you downloaded from the course)

- I removed the $ from the package.json file and then this worked:
	npm install
	node server/server.js
- then I went to localhost:9000 and it worked in the browser

- but I kept getting this:
	Connection Error. [Error: failed to connect to [localhost:27017]]

- it just means that the database isn't running
	- so I opened up a new terminal window and did this
		mongod

- Then I restarted the node server, but I get this error in the terminal:
 ERROR: dbpath (/data/db) does not exist.

- so I did 
	cd ~
- and then 
	cd ..
- and then
	cd ..
- when doing this
	pwd
- it should say
	/

- then I made these directories in that root directory and chmod 755'd them
	- sudo mkdir data
	- chmod 755 data
	- cd data
	- sudo mkdir db
	- chmod 755 db

- then I ran
	mongod
 	- and got errors that the server was already running
		- so I ran this:
			sudo chown -R `id -u` /data/db

- then mongod works and after restarting the node server, the app works too
