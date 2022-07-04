# WebRTC Overview
1. Real Time Communication
2. Find a peer to peer path to exchange video, audio and messages in efficient and low latency manner.
3. Standardized API
4. Enable rich communication browsers, mobile and IOT devices.

![image](https://user-images.githubusercontent.com/74914096/177128089-8cf93283-f457-4af0-8c64-d10c3330a7f2.png)
![image](https://user-images.githubusercontent.com/74914096/177128808-8ab2bc55-cf06-4262-9095-1954f40a7c26.png)
![image](https://user-images.githubusercontent.com/74914096/177129064-3503c6b6-f32b-4908-a454-7acedf465f45.png)
![image](https://user-images.githubusercontent.com/74914096/177129227-0ed27a9b-a5b8-486a-b99f-78a845beab50.png)

NAT
![image](https://user-images.githubusercontent.com/74914096/177130770-9739023b-b4ea-40fd-91ea-bd35e14b3559.png)
![image](https://user-images.githubusercontent.com/74914096/177130860-c485b3e1-4c5f-46f3-a9f4-dddbd977bef5.png)
![image](https://user-images.githubusercontent.com/74914096/177131110-9826e1fd-581b-4ce6-a3d1-e76614bb79f8.png)
![image](https://user-images.githubusercontent.com/74914096/177131417-35a5f28e-91c3-466d-a456-05cfea3df4f5.png)

# NAT Translation Method
![image](https://user-images.githubusercontent.com/74914096/177131551-087432ac-3aa2-44eb-aeb0-9e747e444d50.png)
#One to one NAT (Full Cone NAT
![image](https://user-images.githubusercontent.com/74914096/177131878-ca0c5638-38bd-473e-9f66-a3c0f4743c7a.png)
![image](https://user-images.githubusercontent.com/74914096/177132350-f83d4450-0c93-4814-a772-f5bf977ffd26.png)

# Address Restricted NAT
![image](https://user-images.githubusercontent.com/74914096/177132608-13ebfe97-c144-459d-96a7-74a9d43e8b81.png)
![image](https://user-images.githubusercontent.com/74914096/177133579-9da2c583-67f6-457e-9377-52db74bfddb0.png)

# Port Resticted NAT
![image](https://user-images.githubusercontent.com/74914096/177133877-b9a449f2-0e4d-4d2c-92bd-84019d976edf.png)
![image](https://user-images.githubusercontent.com/74914096/177135165-4351d50b-d31e-4ef5-b530-1663d50dd06d.png)

#Symmetric NAT  : Not work with WebRTC
![image](https://user-images.githubusercontent.com/74914096/177135341-40539766-2300-416f-8b38-12c88f2f874f.png)
![image](https://user-images.githubusercontent.com/74914096/177135532-dda0b733-84d8-4125-9537-8329e572de98.png)

# STUN
We need this to findout over public presence so we communcate this public presence to someone else so that can communicate with us. becuase we are behind NAT.
![image](https://user-images.githubusercontent.com/74914096/177136208-b2deca10-1088-495c-9406-3be0729a9621.png)

# STUN Request & Response
![image](https://user-images.githubusercontent.com/74914096/177137074-a954d2fb-cf7a-475e-8c55-7159777dfd08.png)
![image](https://user-images.githubusercontent.com/74914096/177140023-68684121-1e03-4c2d-a9c8-f044c3ec8888.png)
![image](https://user-images.githubusercontent.com/74914096/177140095-4bed7823-0751-4d84-b11d-8c6c291802ec.png)
![image](https://user-images.githubusercontent.com/74914096/177140149-db8c57f8-e21b-45ce-ae07-bb780e412dae.png)
![image](https://user-images.githubusercontent.com/74914096/177140237-d1150134-f590-435a-9878-b3a59047f7ef.png)
![image](https://user-images.githubusercontent.com/74914096/177140394-b949d487-8fce-4967-bf41-7b2f66cbbb34.png)
![image](https://user-images.githubusercontent.com/74914096/177140464-8d7e857f-de3f-4da9-b102-6889354078e9.png)
![image](https://user-images.githubusercontent.com/74914096/177140516-5d8addd5-65a3-4cf2-a98e-c2ba7ef1e535.png)
![image](https://user-images.githubusercontent.com/74914096/177140571-bca1fa9c-9929-4c99-8d4a-80e2c9dcbd41.png)
![image](https://user-images.githubusercontent.com/74914096/177140615-f3e973b8-8b04-41af-a1b6-d91eaa39f723.png)

#STUN When it works
![image](https://user-images.githubusercontent.com/74914096/177141188-310ca31f-7c60-4da0-84b8-0c801e4c7723.png)
![image](https://user-images.githubusercontent.com/74914096/177141766-08fd661d-1178-46be-bb5c-a889debc5c44.png)

#STUN does't works
![image](https://user-images.githubusercontent.com/74914096/177142866-24f23c5b-a829-4f1a-9271-841ea200591c.png)







SDP : Session Description Protocol
