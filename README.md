# A discord bot boilerplate in NodeJs using discordjs and typescript

## Steps
- Rename the .env.example file to .env
- Paste your token and client Id in the .env file
```sh
TOKEN=YOUR-TOKEN-HERE
CLIENT_ID=YOUR-CLIENT-ID-HERE
# You can get the token and the client Id from the discord dev website
```


- Install the packages with your package manager
```sh
yarn
# OR
npm i
```
- Start the dev environment
```sh
yarn dev
# OR
npm run dev
```

- Once the dev is finished build and start

```
yarn build && yarn start
# OR
npm run build && npm run start
```


## Notes

Events and commands are loaded automatically using the fs, in order to add new event handler simply create a new file in the src/events directory and make sure the filename is the same as the event name for eg: ```messageCreate.ts```, ```ready.ts``` etc...
The same goes for commands