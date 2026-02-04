#Backend

>>cd backend
>>npm init -y
>>npm install prisma@5.10.2 @prisma/client@5.10.2
>>npx prisma init
>>npx prisma db push
>>node server.js

Make sure to login and make a neon AWS server nad get the connection string and replace it in .env

#Frontend
>>npx create-react-app frontend
>>cd frontend
>>npm start

#Database
Use neonDB

#git
>>Remove-Item -Recurse -Force frontend/.git
>>git init
>>git add .
>>git commit -m "Initial Commit"
>>git branch -M main
>> git remote add origin https:
>>git push -u origin main