## Stage 1 - Lets build the "deployable package"
FROM node:12.14.1 as frontend-build
WORKDIR /car-storage/frontend

# Step 1 - Download all package dependencies first.
# We will redownload dependencies only when packages change.
COPY package.json package-lock.json ./
RUN npm install

# Step 2 - Copy all source and run build
COPY . ./
RUN npm run build

## Stage 2 - Let's build a minimal image with the "deployable package"
FROM nginx:1.19.2-alpine
COPY --from=frontend-build /car-storage/frontend/dist/cars-storage-front /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
