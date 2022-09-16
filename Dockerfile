FROM node:18

WORKDIR /app

# Copy project files
COPY . .
COPY entrypoint.sh /usr/local/bin

RUN npm install

ENTRYPOINT [ "entrypoint.sh" ]