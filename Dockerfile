FROM mhart/alpine-node

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]
