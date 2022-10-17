### Docker  first networks test

this repository is for testing networks :
 - backend1 service is connected to both networks public and private
 - backend2 service is only connected to private network

--> The host can only access "backend1" via http://localhost:5000/
and can't access the "backend2"  (no mapped ports)

--> "backend1"  can access "backend2"  via "http://backend2:5001/" (docker DNS resolution)


