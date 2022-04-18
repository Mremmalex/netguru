# movie service 

for the api documentation please go through the POSTMANmove_api_documentation.json file for detials 


## env variabiles
```
JWT_SECRET has to match the auth-service JWT_SECRET
DB_URL is a url for mongo databse 
PORT your application port 
```
### run locally 
1. clone the repo
2. run from inside movie-service directory

to start movie api srvice


```shell 
docker compose -f docker-compose.build.yml up -d --build 
```

to stop movie api service 

```shell
docker compose -f docker-compose.build.yml down
```


## Api Doc

##### the authorization bearer token is gotten from the auth service refer to the README.md file in auth-service directory

### request to post a movie

```
curl --request POST \
  --url http://localhost:5000/movies \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkJhc2ljIFRob21hcyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTY1MDMxNTgzOCwiZXhwIjoxNjUwMzE3NjM4LCJpc3MiOiJodHRwczovL3d3dy5uZXRndXJ1LmNvbS8iLCJzdWIiOiIxMjMifQ.Huo7Q-fsp4cRj0lgGOdRzko1_dyU8m5Fq4vYL6aI538' \
  --header 'Content-Type: application/json' \
  --data '{
    "title": "thor"
}'
```

### response 

```
{
	"action": "ok",
	"data": {
		"userId": 434,
		"title": "Thor",
		"released": "06 May 2011",
		"genre": "Action, Adventure, Fantasy",
		"director": "Kenneth Branagh",
		"_id": "625dec2919a925cc34812496",
		"createdAt": "2022-04-18T22:54:33.460Z",
		"updatedAt": "2022-04-18T22:54:33.460Z",
		"__v": 0
	}
}
```

### request  to get movie 

```
curl --request GET \
  --url http://localhost:5000/movies \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQzNCwibmFtZSI6IlByZW1pdW0gSmltIiwicm9sZSI6InByZW1pdW0iLCJpYXQiOjE2NTAzMjIxMTYsImV4cCI6MTY1MDMyMzkxNiwiaXNzIjoiaHR0cHM6Ly93d3cubmV0Z3VydS5jb20vIiwic3ViIjoiNDM0In0.RL0YOF5aPW4ttUYjktKw72UlZ7h3BBIsT7FMVC_dK8w' \
  --header 'Content-Type: application/json'
```


### reponse 

```
{
 "action": "ok",
 "data": [
  {
   "_id": "625dec2919a925cc34812496",
   "userId": 434,
   "title": "Thor",
   "released": "06 May 2011",
   "genre": "Action, Adventure, Fantasy",
   "director": "Kenneth Branagh",
   "createdAt": "2022-04-18T22:54:33.460Z",
   "updatedAt": "2022-04-18T22:54:33.460Z",
   "__v": 0
  }
 ]
}

```