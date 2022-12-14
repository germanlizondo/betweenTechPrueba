FROM node:18-alpine3.15

RUN mkdir -p /home/app

RUN mkdir -p /home/app/backend/src/public

COPY . /home/app

WORKDIR /home/app/frontend

RUN npm install

RUN npm run build

WORKDIR /


RUN cp -R /home/app/frontend/build/* /home/app/backend/src/public

WORKDIR /home/app/backend

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]