FROM registry.cn-beijing.aliyuncs.com/cz_public/nginx:1.23.4
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY /root/dist/ /usr/share/nginx/html/
RUN chmod 777 -R /usr/share/nginx
ENTRYPOINT nginx -g "daemon off;"

