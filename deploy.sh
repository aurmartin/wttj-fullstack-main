rm -rf /srv/wttj

echo "Cloning repo ..."

git clone https://github.com/aurmartin/wttj-fullstack-main.git /srv/wttj
mv .env /srv/wttj
cd /srv/wttj

echo "Cleaning docker ..."

docker kill $(docker ps -q)
docker rm $(docker ps -a -q)
# docker rmi $(docker images -q)

echo "Pulling image ..."

aws ecr get-login-password --region eu-west-3 | docker login --username AWS --password-stdin 705111241922.dkr.ecr.eu-west-3.amazonaws.com
docker pull 705111241922.dkr.ecr.eu-west-3.amazonaws.com/my-ecr:$CIRCLE_SHA1

echo "Starting application ..."

docker-compose up -d
