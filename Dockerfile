FROM node:18

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
COPY ./templates /templates

ENTRYPOINT [ "entrypoint.sh" ]