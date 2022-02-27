FROM node:alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY .  .
RUN npm run build

FROM nginx
EXPOSE 3000
#nginx 설정 복사
COPY ./nginx/default.conf   /etc/nginx/conf.d/default.conf
# 위에서 빌드한 내용을 해당 서버의 경로로 복사
COPY --from=builder /app/build /usr/share/nginx/html