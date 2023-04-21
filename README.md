# API Key Authentication in a NodeJS, Express and Typescript API with rate limiting
A nodejs, express and typescript API with API auth and rate limiting.
You can read the blogpost written on this project here: https://mydaytodo.com/how-to-build-nodejs-api-with-api-key-authentication/

# Features

- nodesjs REST API
- express
- typescript
- node-localstorage
- api key authentication
- postman collections

# How to run 
1. Clone the repository 
2. Install all the dependencies
3. Start the app in development mode

```
git clone git@github.com:cptdanko/typescript_api_key_auth.git
cd typescript_api_key_auth/
npm i
npm run localRun
```

## How to test this repo?
The .json file in the api_tests folder is a is a Postman collection that can be imported in to [Postman]. Import the collection and you will see endpoints to create user and retrieve exchange rates. 

- Create the user in the post query tab
- Copy the API key generated
- add a new header in the /exchangeRates get request ```x-api-key``` and enter the API key generated in the step above as it's value
- the rate limit is set to 10 on [line 13] in user_db.ts so if you try to get excahnge rates more than 10 times you will get a 429 error


# Any help?
If you have difficulty understanding anything about this repo, feel free to reach out to me through this Github account or at bhuman@mydaytodo.com or bhuman.soni@gmail.com 

# More great tutorials and code samples
I will be writing a detailed tutorial on how to work with this repo on my blog. Until then refer to [my blog] for other tutorials and "how-to" articles with detailed code samples.


If you like what I am doing, you can [buy me a coffee]

Click on the next link for more info on the 13+ year [software engineering career journey] of the author.

[line 13]: https://github.com/cptdanko/typescript_api_key_auth/blob/main/src/user_db.ts#L13
[Postman]: https://www.postman.com/downloads/
[line 16]: https://github.com/cptdanko/nodetypescriptcrudnotes/blob/main/src/db.ts#L16
[my blog]: https://mydaytodo.com/blog/
[line 17]: https://github.com/cptdanko/nodetypescriptcrudnotes/blob/main/src/db.ts#L17
[AWS docs]: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html
[blogpost]: https://mydaytodo.com/blog/
[this blog]: https://mydaytodo.com/blog/
[buy me a coffee]: https://www.buymeacoffee.com/bhumansoni
[software engineering career journey]: https://mydaytodo.com/the-3-stages-of-a-software-engineering-career/
