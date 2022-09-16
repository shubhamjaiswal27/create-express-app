FROM node:18

WORKDIR /app

# Copy project files
COPY . .

RUN npm install

ENTRYPOINT [ "./entrypoint.sh" ]