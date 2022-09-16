FROM node:18

WORKDIR /app

# Copy project files
COPY . ./

RUN ls -la

RUN npm install

ENTRYPOINT [ "./entrypoint.sh" ]